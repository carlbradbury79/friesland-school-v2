import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

// import CbyStyledBackgroundSection from "../components/BGImage/BGImageThree"
// import HomeHeroContent from "../components/home/HomeHeroContent"
import FeaturedNews from "../components/home/FeaturedNews"
import StyledHeroLeft from "../components/home/hero/HeroImageLeft"
import StyledHeroRight from "../components/home/hero/HeroImageRight"
import TwitterFeed from "../components/twitterFeed/TwitterFeed"

const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
  }
  div {
    height: 400px;
    flex: 1;
  }
`

const Welcome = styled.h1`
  text-align: center;
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />

      <Welcome>Welcome to Friesland School</Welcome>
      <HeroContainer>
        <div>
          <StyledHeroLeft></StyledHeroLeft>
        </div>
        <div>
          <StyledHeroRight></StyledHeroRight>
        </div>
      </HeroContainer>

      <FeaturedNews />
      <TwitterFeed />
    </Layout>
  )
}

export default IndexPage
