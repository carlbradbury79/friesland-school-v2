import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import StyledHeroLeft from "../components/home/hero/HeroImageLeft"
import StyledHeroRight from "../components/home/hero/HeroImageRight"
import TwitterFeed from "../components/twitterFeed/TwitterFeed"
import { useSpring, animated, config } from "react-spring"
// import CurriculumChart from "../components/curriculum/CurriculumChart"
// import { yearSevenAndEight } from "../components/curriculum/year7and8"
import FeaturedEvents from "../components/events/FeaturedEvents"
// import { useInstagram } from "../components/instagram/UseInstagram"
// import InstaOverlay from "../components/instagram/InstaOverlay"
// import Gram from "../components/instagram/Instagram"
// import Modal from "../components/instagram/Modal"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faInstagram } from "@fortawesome/free-brands-svg-icons"
// import { Waypoint } from "react-waypoint"
// import {
//   StyledInstaSection,
//   GramContainer,
//   InstaIcon,
// } from "../components/styles/InstaStyles"

import CardLayout from "../components/cardLayouts/CardLayout"
import { useAllPosts } from "../components/graphql/AllPosts"

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
  font-size: 2rem;
  font-weight: bold;
  margin: 1.3rem 0;
  line-height: 1.5;
`

const IndexPage = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translate3d(0,50px,0)" },
    opacity: 1,
    transform: "translate3d(0,0px,0)",
    delay: 1000,
    config: config.molasses,
  })

  // ---------------------- Instagram -----------------------------------
  // const gramz = useInstagram()

  // // The currently selected instagram photo object
  // const [gramForModal, setGramForModel] = useState(false)

  // // Is the modal visible
  // const [modalVisible, setModalVisible] = useState(false)

  // // Animation
  // const transitions = useTransition(modalVisible, null, {
  //   from: { opacity: 0, transform: "translateY(-40px)" },
  //   enter: { opacity: 1, transform: "translateY(0px)" },
  //   leave: { opacity: 0, transform: "translateY(-40px)" },
  // })

  // // Get the clicked instagram photo and set gramForModal
  // function getGram(id) {
  //   const newGram = gramz.filter(g => {
  //     console.log("getGram", id, g.id)
  //     return g.id === id
  //   })
  //   console.log("newGram", newGram)
  //   setGramForModel(newGram)
  //   console.log("state", gramForModal)
  //   setModalVisible(true)
  // }

  // // Instagram visible animation
  // const [isInstaVisible, toggleInstaVisible] = useState(false)
  // const visibleInstaAnimation = useSpring({
  //   opacity: isInstaVisible ? 1 : 0,
  //   transform: isInstaVisible
  //     ? "translate3d(0,0px,0)"
  //     : "translate3d(0,150px,0)",
  //   config: config.molasses,
  // })
  // ------------------------End Insta--------------------------------------

  // All WP Posts
  const allPostData = useAllPosts()

  // Covid-19 Posts
  const covidPosts = allPostData.allWpPost.nodes.filter(post => {
    // if (post.categories.nodes.find(obj => obj.name === "Covid-19")) {
    //   return post
    // }
    return post.categories.nodes.find(obj => obj.name === "Covid-19") && post
  })

  // Event Posts
  const eventPosts = allPostData.allWpPost.nodes.filter(post => {
    // if (post.categories.nodes.find(obj => obj.name === "Events")) {
    //   return post
    // }
    return post.categories.nodes.find(obj => obj.name === "Events") && post
  })

  console.log(eventPosts)

  return (
    <Layout>
      <SEO title="Home" />

      <Welcome style={fadeIn}>Welcome to Friesland School</Welcome>

      {/* Hero Image with two panel */}
      <HeroContainer>
        <div>
          <StyledHeroLeft></StyledHeroLeft>
        </div>
        <div>
          <StyledHeroRight></StyledHeroRight>
        </div>
      </HeroContainer>
      <FeaturedEvents
        data={eventPosts}
        link="/events"
        title="Upcoming Events"
      />
      <CardLayout
        title="Featured News"
        data={allPostData.allWpPost.nodes}
        link="/news"
        number={4}
        includeDate={true}
      />
      <TwitterFeed />

      <CardLayout
        title="Covid-19"
        data={covidPosts}
        link="/covid-19"
        number={4}
        includeDate={false}
      />

      {/* ------------------ InstaGram ----------------------------- */}
    </Layout>
  )
}

export default IndexPage
