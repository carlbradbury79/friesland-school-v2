const path = require("path")
const slash = require("slash")
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pageTemplate = path.resolve("./src/templates/page.js")
  const archiveTemplate = path.resolve("./src/templates/archive.js")
  const postTemplate = path.resolve("./src/templates/post.js")

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            status
            link
            wordpress_id
            wordpress_parent
            slug
            path
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            link
            slug
            path
            status
            categories {
              id
            }
          }
        }
      }
      allWordpressCategory {
        edges {
          node {
            id
            name
            slug
            count
          }
        }
      }
    }
  `)

  // Check for errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  const {
    allWordpressPage,
    allWordpressPost,
    allWordpressCategory,
  } = result.data

  console.log(result.data)

  // Create archive pages for each category
  allWordpressCategory.edges.forEach(catEdge => {
    // First filter out the posts that belongs to the current category
    const filteredPosts = allWordpressPost.edges.filter(
      ({ node: { categories } }) =>
        categories.some(el => el.id === catEdge.node.id)
    )
    // Some categories may be empty and we don't want to show them
    if (filteredPosts.length > 0) {
      paginate({
        createPage,
        items: filteredPosts,
        itemsPerPage: 10,
        pathPrefix: `blog/${catEdge.node.slug}`,
        component: slash(archiveTemplate),
        context: {
          catId: catEdge.node.id,
          catName: catEdge.node.name,
          catSlug: catEdge.node.slug,
          catCount: catEdge.node.count,
          categories: allWordpressCategory.edges,
        },
      })
    }
  })

  allWordpressPage.edges.forEach(edge => {
    if (edge.node.status === "publish") {
      createPage({
        path: edge.node.slug,
        component: slash(pageTemplate),
        context: {
          id: edge.node.id,
          //   parent: edge.node.wordpress_parent,
          wpId: edge.node.wordpress_id,
        },
      })
    }
  })

  allWordpressPost.edges.forEach(edge => {
    if (edge.node.status === "publish") {
      createPage({
        path: `${edge.node.path}`,
        component: slash(postTemplate),
        context: {
          id: edge.node.id,
        },
      })
    }
  })
}
