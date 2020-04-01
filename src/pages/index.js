import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import CbyStyledBackgroundSection from "../components/BGImage/BGImageThree"
import HomeHeroContent from "../components/home/HomeHeroContent"

const IndexPage = () => {
  const HeroImage = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "home/home-hero-img.jpg" }) {
        id
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
          fluid(
            maxWidth: 1980
            duotone: { highlight: "#47b9d6", shadow: "#214f95" }
            toFormat: PNG
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      {/* <Hero /> */}
      {/* <StyledBackgroundSection /> */}
      <CbyStyledBackgroundSection fluid={HeroImage.image.childImageSharp.fluid}>
        <HomeHeroContent />
      </CbyStyledBackgroundSection>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
      <p>Some text</p>
    </Layout>
  )
}

export default IndexPage
