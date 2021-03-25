import { graphql, useStaticQuery } from "gatsby"

// Custom Hook
export const useAllPosts = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allWpPost {
          nodes {
            title
            eventDate {
              dateofevent
              endtime
            }
            id
            title
            link
            date
            slug
            status
            content
            postPlus {
              sticky
            }
            featuredImage {
              node {
                remoteFile {
                  childImageSharp {
                    fluid(
                      cropFocus: NORTH
                      fit: CONTAIN
                      background: "#fff"
                      maxWidth: 1000
                      maxHeight: 750
                    ) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
            categories {
              nodes {
                name
              }
            }
          }
        }
      }
    `
  )
  return data
}
