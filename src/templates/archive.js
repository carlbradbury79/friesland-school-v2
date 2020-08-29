/* eslint-disable react/no-danger */
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import ArchiveSidebar from '../components/archive/ArchiveSidebar';
import BreadCrumb from "../components/utils/BreadCrumb"
import Pagination from "../components/archive/Pagination"
// import PageHero from '../components/PageHero';
import BlogCard from "../components/utils/NewBlogCard"

import styled from "styled-components"
import CategoriesMenu from "../components/archive/CategoriesMenu"

const PageContent = styled.article`
  background-color: #f2f2f2;
`

const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin-bottom: 2rem;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const ArchiveTitle = styled.h1`
  font-family: "Cormarant Garamond", serif;
  color: #000;
  font-size: 3rem;
  font-weight: 500;
  text-align: center;
`

const archiveTemplate = ({
  data: { file, allWpPost, allWpCategory },
  pageContext: {
    catId,
    catName,
    catSlug,
    // categories,
    humanPageNumber,
    numberOfPages,
  },
}) => {
  // console.log("all posts", allWpPost)
  // console.log(catId)

  return (
    <Layout>
      {console.log("arch", catName, catId)} {console.log(allWpCategory)}
      {console.log(allWpPost)}
      <div className="container">
        <div className="row" style={{ marginBottom: "40px" }}>
          <PageContent>
            <ArchiveTitle dangerouslySetInnerHTML={{ __html: catName }} />

            <CategoriesMenu categories={allWpCategory.nodes} />

            <BreadCrumb
              parent={{
                slug: `/blog/${catSlug}`,
                title: catName,
              }}
            />

            <ArticleGrid>
              {allWpPost.nodes.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </ArticleGrid>

            {/* Pagination */}
            <Pagination
              catSlug={catSlug}
              page={humanPageNumber}
              totalPages={numberOfPages}
            />
          </PageContent>
        </div>
      </div>
    </Layout>
  )
}

export default archiveTemplate

// TODO Fix Archive Query

// export const archiveQuery = graphql`
//   query($catId: String!, $skip: Int!, $limit: Int!) {
//     archive: wpCategory(id: { eq: $catId }) {
//       name
//       id
//       posts {
//         nodes {
//           title
//           content
//           date
//           eventDate {
//             dateofevent
//           }
//           excerpt
//           id
//           slug
//           uri
//           link
//         }
//       }
//     }
//   }
// `

export const pageQuery = graphql`
  query($catName: String!, $skip: Int!, $limit: Int!) {
    allWpPost(
      filter: {
        categories: { nodes: { elemMatch: { name: { eq: $catName } } } }
      }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        categories {
          nodes {
            id
            name
            slug
            uri
          }
        }
        id
        title
        excerpt
        slug
        date
        eventDate {
          dateofevent
        }
        featuredImage {
          node {
            remoteFile {
              childImageSharp {
                fluid(maxWidth: 1000, cropFocus: ATTENTION) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    allWpCategory {
      nodes {
        name
        count
        id
        slug
        posts {
          nodes {
            title
            slug
            id
            status
            link
            uri
            excerpt
            date
            content
            featuredImage {
              node {
                remoteFile {
                  childImageSharp {
                    fluid(maxWidth: 1000, cropFocus: ATTENTION) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

// export const pageQuery = graphql`
//   query($catId: String!, $skip: Int!, $limit: Int!) {
//     allWpPosts(
//       filter: { categories: { elemMatch: { id: { eq: $catId } } } }
//       skip: $skip
//       limit: $limit
//     ) {
//       edges {
//         node {
//           author
//           categories {
//             id
//             name
//             path
//             slug
//           }
//           id
//           title
//           excerpt
//           slug
//           date(formatString: "DD MMM YYYY")
//           path
//           featured_media {
//             source_url
//             localFile {
//               url
//               childImageSharp {
//                 fluid(maxWidth: 1000, cropFocus: ATTENTION) {
//                   ...GatsbyImageSharpFluid
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//     file(relativePath: { eq: "gatsby-astronaut.png" }) {
//       childImageSharp {
//         fluid(quality: 100, maxWidth: 4000) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }

//     allWordpressCategory {
//       edges {
//         node {
//           id
//           name
//           slug
//           wordpress_id
//           count
//         }
//       }
//     }
//   }
// `
