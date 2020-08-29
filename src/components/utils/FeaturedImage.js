import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const PostImage = styled(Img)`
  display: block;
  max-height: 100%;
`

const FeaturedImage = ({ image }) => {
  // console.log(image)

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
    image.node === null || image.node.remoteFile.childImageSharp === null
      ? altFeaturedImage.image.childImageSharp.fluid
      : image.node.remoteFile.childImageSharp.fluid
  // console.log("Featured Image Component", image)

  return <PostImage fluid={Image} />
}

export default FeaturedImage
