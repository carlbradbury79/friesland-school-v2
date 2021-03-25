import React, { useState } from "react"
// import { Link } from "gatsby"
import Card from "./Card"
// import styled from "styled-components"
import { useSpring, config } from "react-spring"
import { Waypoint } from "react-waypoint"
import { LayoutSection, LayoutContainer, SectionLink } from "./CardStyles"

const CardLayout = ({
  data,
  title,
  link,
  number,
  displayNumber,
  includeDate,
}) => {
  // UseSpring animation for component
  const [isComponentVisible, toggleComponentVisible] = useState(false)
  const visibleAnimation = useSpring({
    opacity: isComponentVisible ? 1 : 0,
    transform: isComponentVisible
      ? "translate3d(0,0px,0)"
      : "translate3d(0,150px,0)",
    config: config.slow,
  })

  // Sort the dates from all of the nodes from WP from newest to oldest
  //   Refactored to accept an array only
  const articlesInOrder = data.sort(
    (a, b) => (a.date > b.date ? -1 : 1)
    //   const articles = data.allWpPost.nodes.sort((a, b) =>
    //     a.date > b.date ? -1 : 1
  )

  // Find first sticky article in all posts for this component
  const latestSticky = articlesInOrder.find(a => a.postPlus.sticky)

  let articles = []

  if (latestSticky) {
    // Remove latest sticky article
    articles = articlesInOrder.filter(article => article.id !== latestSticky.id)
    // Inser the sticky article at the front
    articles.splice(0, 0, latestSticky)
  } else {
    articles.push(...articlesInOrder)
  }

  return (
    <LayoutSection style={visibleAnimation}>
      <Waypoint
        bottomOffset="20%"
        onEnter={() =>
          isComponentVisible ? null : toggleComponentVisible(true)
        }
      />
      <h2>{title}</h2>
      <LayoutContainer displayNumber={displayNumber}>
        {articles.map((post, i) => {
          // If number of posts is 4 allow 4, else show them all
          if (number === displayNumber) {
            return (
              i <= displayNumber - 1 && (
                <Card key={post.id} post={post} includeDate={includeDate} />
              )
            )
          } else {
            return <Card key={post.id} post={post} includeDate={includeDate} />
          }
        })}
      </LayoutContainer>
      {/* <FeaturedNewsSlider post={FeaturedNewsArticles} /> */}
      <SectionLink to={link}>More Articles</SectionLink>
    </LayoutSection>
  )
}

export default CardLayout
