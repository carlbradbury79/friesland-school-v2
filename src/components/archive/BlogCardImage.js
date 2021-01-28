// import React from "react"
import { useStaticQuery, graphql } from "gatsby"
// import BackgroundImage from "gatsby-background-image"

const AltCardImage = () => {
  const altImage = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "friesland-logo.jpg" }) {
        id
        childImageSharp {
          fluid(
            maxHeight: 500
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
  //   console.log(altImage.image.childImageSharp.fluid)
  return altImage.image.childImageSharp.fluid
}

export default AltCardImage
