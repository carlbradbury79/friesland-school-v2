import { graphql, useStaticQuery } from "gatsby"

// Custom Hook for getting the default image from /images
export const useArticleImage = () => {
  const image = useStaticQuery(
    graphql`
      query {
        image: file(relativePath: { eq: "friesland-logo.jpg" }) {
          id
          childImageSharp {
            fluid(
              maxWidth: 2000
              maxHeight: 1500
              cropFocus: NORTH
              fit: CONTAIN
              background: "#fff"
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )
  return image
}
