import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledHeroLeft from "../components/home/hero/HeroImageLeft"
import StyledHeroRight from "../components/home/hero/HeroImageRight"
import TwitterFeed from "../components/twitterFeed/TwitterFeed"
import { useSpring, animated, config } from "react-spring"
import Modal from "react-modal"

import FeaturedEvents from "../components/events/FeaturedEvents"

import CardLayout from "../components/cardLayouts/CardLayout"
import { useAllPosts } from "../components/graphql/AllPosts"
import {
  modalStyles,
  ModalCloseDiv,
  ModalButton,
  Welcome,
  HeroContainer,
} from "../components/styles/IndexStyles"

const IndexPage = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translate3d(0,50px,0)" },
    opacity: 1,
    transform: "translate3d(0,0px,0)",
    delay: 1000,
    config: config.molasses,
  })

  // Todo Find root node in Gatsby
  // Modal.setAppElement(document.getElementById("root"))

  const [modalIsOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  const [twitterImageForModal, setTwitterImageForModal] = useState(null)

  // Get twitter image url and open modal, passing in img url
  const getTwitterPic = e => {
    setTwitterImageForModal(e.target.src)
    setIsOpen(true)
  }

  // All WP Posts from query
  const allPostData = useAllPosts()

  // Covid-19 Posts
  const covidPosts = allPostData.allWpPost.nodes.filter(post => {
    return post.categories.nodes.find(obj => obj.name === "Covid-19") && post
  })

  // Event Posts
  const eventPosts = allPostData.allWpPost.nodes.filter(post => {
    return post.categories.nodes.find(obj => obj.name === "Events") && post
  })

  const newsPosts = allPostData.allWpPost.nodes.filter(post => {
    return post.categories.nodes.find(obj => obj.name === "News") && post
  })

  // Remove hours from date so day can be compared
  Date.prototype.removeTimeFromDate = function() {
    let newDate = new Date(this)
    newDate.setHours(0, 0, 0, 0)
    return newDate
  }

  // Get Newsletter Posts
  const newsLetterPosts = allPostData.allWpPost.nodes.filter(post => {
    return post.categories.nodes.find(obj => obj.name === "Newsletters") && post
  })
  // Get latest date from newsletters
  const latest = new Date(
    Math.max(...newsLetterPosts.map(e => new Date(e.date)))
  )
  // Get latest newletters
  const latestNewsLetterPosts = newsLetterPosts.filter(post => {
    return (
      new Date(post.date).removeTimeFromDate().getTime() ===
      latest.removeTimeFromDate().getTime()
    )
  })

  return (
    <Layout>
      <SEO title="Home" />

      <Welcome style={fadeIn}>Welcome to Friesland School</Welcome>

      {/* Hero Image with two panel */}
      <HeroContainer>
        <div id="main">
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
        title="Essential News"
        data={newsPosts}
        link="/news"
        number={4}
        includeDate={true}
        displayNumber={4}
      />
      <CardLayout
        title="Latest Newsletter Articles"
        data={newsLetterPosts}
        link="/newsletters"
        number={6}
        includeDate={true}
        displayNumber={6}
      />

      <TwitterFeed getTwitterPic={getTwitterPic} />

      <CardLayout
        title="Covid-19"
        data={covidPosts}
        link="/covid-19"
        number={4}
        includeDate={false}
        displayNumber={4}
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={true}
        twitterImageForModal={twitterImageForModal}
        ariaHideApp={false}
      >
        <ModalCloseDiv>
          <ModalButton onClick={closeModal}>
            <i style={{ color: "gray" }} className="fas fa-times"></i>
          </ModalButton>
        </ModalCloseDiv>
        <img
          style={{ maxWidth: "100%", maxHeight: "400vh" }}
          src={twitterImageForModal}
          alt=""
        />
      </Modal>
    </Layout>
  )
}

export default IndexPage
