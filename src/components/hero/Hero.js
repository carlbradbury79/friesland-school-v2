import React from "react"
import styled from "styled-components"
import BGImage from "../BGImage/BGImage"
import { useStaticQuery, graphql } from "gatsby"

const HeroWrapper = styled.div``

const TextWrapper = styled.div``

const Hero = () => {
  const HeroImage = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "home/home-hero-img.jpg" }) {
        id
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
          fluid(
            duotone: { highlight: "#f00e2e", shadow: "#192550" }
            toFormat: PNG
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <HeroWrapper>
      <BGImage
        title="Title"
        fluid={HeroImage.image.childImageSharp.fluid}
        height="100vh"
        mobileHeight="200px"
      >
        <TextWrapper>
          <h2>Friesland School</h2>
          <p>This is some text</p>
        </TextWrapper>
      </BGImage>
    </HeroWrapper>
  )
}

export default Hero
