const { resolve } = require(`path`)
const path = require("path")
const slash = require("slash")
const { paginate } = require("gatsby-awesome-pagination")
const glob = require(`glob`)
const chunk = require(`lodash/chunk`)

// Get archive, post and page templates from the directory
const getTemplates = () => {
  const sitePath = path.resolve(`./`)
  return glob.sync(`./src/templates/*.js`, { cwd: sitePath })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const templates = getTemplates()

  // const pageTemplate = path.resolve("./src/templates/page.js")
  const archiveTemplate = path.resolve("./src/templates/archive.js")
  // const postTemplate = path.resolve("./src/templates/post.js")
  // const newsletterTemplate = path.resolve("./src/templates/newsletter.js")

  const {
    data: {
      allWpContentNode: { nodes: contentNodes },
    },
  } = await graphql(/* GraphQL */ `
    query ALL_CONTENT_NODES {
      allWpContentNode(
        sort: { fields: modifiedGmt, order: DESC }
        filter: { nodeType: { ne: "MediaItem" } }
      ) {
        nodes {
          nodeType
          uri
          id
          slug
        }
      }
    }
  `)

  const contentTypeTemplateDirectory = `./src/templates/`

  const contentTypeTemplates = templates.filter(path =>
    path.includes(contentTypeTemplateDirectory)
  )

  await Promise.all(
    contentNodes.map(async (node, i) => {
      const { nodeType, uri, id, slug } = node
      const templatePath = `${contentTypeTemplateDirectory}${nodeType.toLowerCase()}.js`

      const contentTypeTemplate = contentTypeTemplates.find(
        path => path === templatePath
      )

      if (!contentTypeTemplate) {
        reporter.log(``)
        reporter.log(``)
        reporter.panic(
          `[using-gatsby-source-wordpress] No template found at ${templatePath}\nfor single ${nodeType} ${
            node.id
          } with path ${
            node.uri
          }\n\nAvailable templates:\n${contentTypeTemplates.join(`\n`)}`
        )
      }

      // Create pages and posts
      await createPage({
        component: resolve(contentTypeTemplate),
        path: `/${slug}`,
        context: {
          id,
        },
      })
    })
  )

  // const result = await graphql(`
  //   {
  //     pages {
  //       edges {
  //         node {
  //           id
  //           status
  //           link
  //           slug
  //           uri
  //         }
  //       }
  //     }
  //     posts {
  //       edges {
  //         node {
  //           id
  //           link
  //           slug
  //           uri
  //           status

  //           categories {
  //             {
  //               nodes {
  //                 id
  //               }
  //             }

  //           }
  //         }
  //       }
  //     }
  //     categories {
  //       edges {
  //         node {
  //           id
  //           name
  //           slug
  //           count
  //         }
  //       }
  //     }
  //   }
  // `)

  // Check for errors
  // if (result.errors) {
  //   throw new Error(result.errors)
  // }

  // const { pages, posts, categories } = result.data
  const {
    data: { allWpCategory },
  } = await graphql(/* GraphQL */ `
    {
      allWpCategory {
        nodes {
          name
          id
          slug
          count
          posts {
            nodes {
              id
              link
              slug
              uri
              status
              date
            }
          }
        }
      }
    }
  `)

  allWpCategory.nodes.forEach(cat => {
    // console.log(cat)
    // if (cat.length > 0) {
    paginate({
      createPage,
      items: cat.posts.nodes,
      itemsPerPage: 6,
      // pathPrefix: `blog/${cat.slug}`,
      pathPrefix: `${cat.slug}`,
      component: slash(archiveTemplate),
      context: {
        catId: cat.id,
        catName: cat.name,
        catSlug: cat.slug,
        catCount: cat.count,
        // categories: allWordpressCategory.edges,
      },
    })
    // }
  })

  // Newsletter --------------------------------------------------------
  // const {
  //   data: { allWpPost },
  // } = await graphql(/* GraphQL */ `
  //   {
  //     allWpPost(
  //       filter: {
  //         categories: { nodes: { elemMatch: { name: { eq: "Newsletters" } } } }
  //       }
  //     ) {
  //       nodes {
  //         id
  //         slug
  //       }
  //     }
  //   }
  // `)

  // allWpPost.nodes.forEach(newsletter => {
  //   createPage({
  //     path: `${newsletter.slug}`,
  //     component: slash(newsletterTemplate),
  //     context: {
  //       id: newsletter.id,
  //     },
  //   })
  // })
}
// console.log(data)

// console.log(result.data)

// Create archive pages for each category
// categories.edges.forEach(catEdge => {
//   // First filter out the posts that belongs to the current category
//   const filteredPosts = posts.edges.filter(({ node: { categories } }) =>
//     categories.some(el => el.id === catEdge.node.id)
//   )
//   // Some categories may be empty and we don't want to show them
//   if (filteredPosts.length > 0) {
//     paginate({
//       createPage,
//       items: filteredPosts,
//       itemsPerPage: 6,
//       pathPrefix: `blog/${catEdge.node.slug}`,
//       component: slash(archiveTemplate),
//       context: {
//         catId: catEdge.node.id,
//         catName: catEdge.node.name,
//         catSlug: catEdge.node.slug,
//         catCount: catEdge.node.count,
//         categories: allWordpressCategory.edges,
//       },
//     })
//   }
// })

// pages.edges.forEach(edge => {
//   if (edge.node.status === "publish") {
//     createPage({
//       path: edge.node.slug,
//       component: slash(pageTemplate),
//       context: {
//         id: edge.node.id,
//         parent: edge.node.wordpress_parent,
//         wpId: edge.node.wordpress_id,
//       },
//     })
//   }
// })

//   posts.edges.forEach(edge => {
//     if (edge.node.status === "publish") {
//       createPage({
//         path: `${edge.node.path}`,
//         component: slash(postTemplate),
//         context: {
//           id: edge.node.id,
//         },
//       })
//     }
//   })
