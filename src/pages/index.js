import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import FeaturedNews from "../components/home/FeaturedNews"
import FeaturedEvents from "../components/events/FeaturedEvents"
import StyledHeroLeft from "../components/home/hero/HeroImageLeft"
import StyledHeroRight from "../components/home/hero/HeroImageRight"
import TwitterFeed from "../components/twitterFeed/TwitterFeed"
import { useSpring, animated, config } from "react-spring"
// import CurriculumChart from "../components/curriculum/CurriculumChart"
// import { yearSevenAndEight } from "../components/curriculum/year7and8"

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

const Welcome = styled(animated.h1)`
  text-align: center;
  user-select: true;
`

const IndexPage = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translate3d(0,50px,0)" },
    opacity: 1,
    transform: "translate3d(0,0px,0)",
    delay: 1000,
    config: config.molasses,
  })

  return (
    <Layout>
      <SEO title="Home" />

      <Welcome style={fadeIn}>Welcome to Friesland School</Welcome>
      <HeroContainer>
        <div>
          <StyledHeroLeft></StyledHeroLeft>
        </div>
        <div>
          <StyledHeroRight></StyledHeroRight>
        </div>
      </HeroContainer>
      {/* <CurriculumChart data={yearSevenAndEight} /> */}
      {/* <FeaturedEvents /> */}
      <FeaturedNews />
      <TwitterFeed />
    </Layout>
  )
}

export default IndexPage
