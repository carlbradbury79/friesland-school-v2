// import { render } from "react-dom"
import React, { useState } from "react"
import { useTransition, animated } from "react-spring"
import { useStaticQuery, graphql, Link } from "gatsby"
// import "./styles.css"
import styled from "styled-components"
// import FeaturedNewsCard from "./FeaturedNewsCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import "./slider.css"
import Img from "gatsby-image"

const Button = styled.button`
  position: absolute;
  top: calc(100% / 2);
  border: none;
  background: var(--light-shade-alpha);
  color: var(--dark-shade);
  height: 50px;
  width: 50px;
  font-size: 40px;
  padding: 0;
`

const Next = styled(Button)`
  right: 0;
`

const Prev = styled(Button)`
  left: 0;
`

const FeaturedNewsSlider = ({ post }) => {
  const newAltFeaturedArticleImage = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "friesland-logo.jpg" }) {
        id
        childImageSharp {
          fixed(width: 400, height: 300, cropFocus: NORTH, fit: COVER) {
            ...GatsbyImageSharpFixed
          }
          fluid(
            maxWidth: 2000
            maxHeight: 1500
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

  const pages = [
    ({ style, post }) => (
      <animated.div style={{ ...style, width: "100%" }}>
        <Img
          fluid={
            post[0].node.featured_media === null ||
            post[0].node.featured_media.localFile.childImageSharp === null
              ? newAltFeaturedArticleImage.image.childImageSharp.fluid
              : post[0].node.featured_media.localFile.childImageSharp.fluid
          }
        />
        <p>{post[0].node.date}</p>
        <h1>{post[0].node.title}</h1>
        {/* <Prev onClick={handlePrevious}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Prev>
        <Next onClick={handleNext}>
          <FontAwesomeIcon icon={faArrowRight} />
        </Next> */}
        <Link to={`/${post[0].node.slug}`}>Read More...</Link>
      </animated.div>
    ),

    ({ style, post }) => (
      <animated.div style={{ ...style }}>
        <Img
          fluid={
            post[1].node.featured_media === null ||
            post[1].node.featured_media.localFile.childImageSharp === null
              ? newAltFeaturedArticleImage.image.childImageSharp.fluid
              : post[1].node.featured_media.localFile.childImageSharp.fluid
          }
        />
        <p>{post[1].node.date}</p>
        <h1>{post[1].node.title}</h1>
        {/* <Prev onClick={handlePrevious}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Prev>
        <Next onClick={handleNext}>
          <FontAwesomeIcon icon={faArrowRight} />
        </Next> */}
        <Link to={`/${post[1].node.slug}`}>Read More...</Link>
      </animated.div>
    ),
    ({ style, post }) => (
      <animated.div style={{ ...style }}>
        <Img
          fluid={
            post[2].node.featured_media === null ||
            post[2].node.featured_media.localFile.childImageSharp === null
              ? newAltFeaturedArticleImage.image.childImageSharp.fluid
              : post[2].node.featured_media.localFile.childImageSharp.fluid
          }
        />
        <p>{post[2].node.date}</p>
        <h1>{post[2].node.title}</h1>
        {/* <Prev onClick={handlePrevious}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Prev>
        <Next onClick={handleNext}>
          <FontAwesomeIcon icon={faArrowRight} />
        </Next> */}
        <Link to={`/${post[2].node.slug}`}>Read More...</Link>
      </animated.div>
    ),
    ({ style, post }) => (
      <animated.div style={{ ...style }}>
        <Img
          fluid={
            post[3].node.featured_media === null ||
            post[3].node.featured_media.localFile.childImageSharp === null
              ? newAltFeaturedArticleImage.image.childImageSharp.fluid
              : post[3].node.featured_media.localFile.childImageSharp.fluid
          }
        />
        <p>{post[3].node.date}</p>
        <h1>{post[3].node.title}</h1>
        {/* <Prev onClick={handlePrevious}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </Prev>
        <Next onClick={handleNext}>
          <FontAwesomeIcon icon={faArrowRight} />
        </Next> */}
        <Link to={`/${post[3].node.slug}`}>Read More...</Link>
      </animated.div>
    ),
  ]

  const [index, setIndex] = useState(0)
  const [backForth, setBackForth] = useState()

  // const onClick = useCallback(() => setIndex(state => (state + 1) % 3), [])

  const transitions = useTransition(index, p => p, {
    from: {
      opacity: 0,
      transform: backForth ? "translate3d(100%,0,0)" : "translate3d(-100%,0,0)",
    },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: {
      opacity: 0,
      transform: backForth ? "translate3d(-50%,0,0)" : "translate3d(50%,0,0)",
    },
  })

  const length = post.length - 1

  const handleNext = () => {
    index === length ? setIndex(0) : setIndex(index + 1)
    setBackForth(true)
  }
  const handlePrevious = () => {
    index === 0 ? setIndex(length) : setIndex(index - 1)
    setBackForth(false)
  }

  return (
    <div className="simple-trans-main">
      {transitions.map(({ item, props, key }) => {
        const Page = pages[item]
        return <Page key={key} style={props} post={post} />
      })}
      <Prev onClick={handlePrevious}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Prev>
      <Next onClick={handleNext}>
        <FontAwesomeIcon icon={faArrowRight} />
      </Next>
    </div>
  )
}

export default FeaturedNewsSlider
