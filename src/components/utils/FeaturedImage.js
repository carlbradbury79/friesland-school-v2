import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const PostImage = styled(Img)`
  display: block;
  max-height: 100%;
`

const FeaturedImage = ({ image }) => {
  const altFeaturedImage = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "friesland-logo.jpg" }) {
        id
        childImageSharp {
          fluid(
            maxWidth: 2000
            maxHeight: 400
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
  const Image =
    image === null || image.localFile.childImageSharp === null
      ? altFeaturedImage.image.childImageSharp.fluid
      : image.localFile.childImageSharp.fluid
  console.log("Featured Image Component", image)

  return <PostImage fluid={Image} />
}

export default FeaturedImage