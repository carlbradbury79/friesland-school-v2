import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const PostImage = styled(Img)`
  /* display: block; */
  /* max-height: 100%; */
`

const ImgContainer = styled.div`
  @media (min-width: 500px) {
    height: 60vh;
  }
`

const FeaturedImage = ({ image }) => {
  // console.log(image)

  const altFeaturedImage = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "friesland-logo.jpg" }) {
        id
        childImageSharp {
          fluid(
            maxHeight: 400
            cropFocus: NORTH
            fit: COVER
            background: "#fff"
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const Image =
    image === null || image.node.remoteFile.childImageSharp === null
      ? altFeaturedImage.image.childImageSharp.fluid
      : image.node.remoteFile.childImageSharp.fluid
  // console.log("Featured Image Component", image)

  return (
    <ImgContainer>
      <PostImage
        fluid={Image}
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        imgStyle={{ objectFit: "contain" }}
      />
    </ImgContainer>
  )
}

export default FeaturedImage
