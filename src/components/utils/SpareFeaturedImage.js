import { useStaticQuery, graphql } from "gatsby"
export const SpareImage = useStaticQuery(graphql`
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
`)
