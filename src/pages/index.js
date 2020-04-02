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
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
        quibusdam aut ea. Ipsa quasi id et aspernatur, quaerat iure repellat
        accusamus omnis recusandae eaque sit sed consequuntur? Illum
        consequuntur maiores commodi facere. Voluptate temporibus esse est
        officiis architecto minus eum molestias dolor eligendi ullam voluptates
        voluptatibus corporis debitis, impedit animi.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores,
        rem quis adipisci unde facere placeat accusamus, ipsa incidunt animi
        alias reiciendis veritatis quam. Sapiente quisquam distinctio commodi
        unde perspiciatis aut.
      </p>
    </Layout>
  )
}

export default IndexPage
