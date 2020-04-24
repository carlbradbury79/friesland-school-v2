import React, { useEffect } from "react"
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
import { useSpring, animated, config } from "react-spring"

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
`

const IndexPage = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translate3d(0,50px,0)" },
    opacity: 1,
    transform: "translate3d(0,0px,0)",
    delay: 1000,
    config: config.molasses,
  })
  // useEffect(() => {
  //   var el = document.createElement("script")
  //   el.src = "https://www.ticketsource.co.uk/ticketshop/GMJJH"
  //   var s = document.getElementsByTagName("script")[0]
  //   s.parentNode.insertBefore(el, s)
  // }, [])

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

      <FeaturedNews />
      <TwitterFeed />
    </Layout>
  )
}

export default IndexPage
