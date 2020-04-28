import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import FeaturedNewsCard from "./FeaturedNewsCard"
import styled from "styled-components"
import FeaturedNewsSlider from "./NewFeaturedNewsSlider"
import { useSpring, animated, config } from "react-spring"
import { Waypoint } from "react-waypoint"

const FeaturedNewsSection = styled(animated.section)`
  /* margin: 2rem 0; */

  h1 {
    margin-top: 4rem;
    margin-bottom: 4rem;
    font-family: "Cormarant Garamond", serif;
    font-size: 2rem;
    font-weight: normal;
    font-weight: Semi-bold;
    text-align: center;
  }
`

const FeaturedNewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 36px;
  grid-row-gap: 36px;
  padding: 0 40px;
  margin-bottom: 5rem;

  a {
    color: #004c97;
    :hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 10px;
    display: none;
  }
`

const FeaturedNewsLink = styled(Link)`
  background: #fff;
  color: var(--primary);
  border: 2px solid var(--primary);
  padding: 10px 20px;
  display: block;
  margin: auto;
  width: 200px;
  text-align: center;
  margin-bottom: 4rem;
  :hover {
    background: var(--primary);
    color: #fff;
    border: 2px solid #fff;
    text-decoration: none;
  }
`

const FeaturedNews = () => {
  const FeaturedArticlesData = useStaticQuery(graphql`
    query FeaturedNews {
      allWordpressPost(
        limit: 4
        filter: { categories: { elemMatch: { name: { eq: "News" } } } }
      ) {
        edges {
          node {
            id
            featured_media {
              localFile {
                id
                childImageSharp {
                  fixed(width: 500, height: 400, cropFocus: NORTH, fit: COVER) {
                    ...GatsbyImageSharpFixed
                  }
                  fluid(maxWidth: 2000, maxHeight: 1500, cropFocus: CENTER) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            date(formatString: "DD MMM YYYY")
            path
            slug
            title
          }
        }
      }
    }
  `)

  const [isFeaturedNewsVisible, toggleFeaturedNewsVisible] = useState(false)
  const visibleAnimation = useSpring({
    opacity: isFeaturedNewsVisible ? 1 : 0,
    transform: isFeaturedNewsVisible
      ? "translate3d(0,0px,0)"
      : "translate3d(0,150px,0)",
    config: config.slow,
  })

  const FeaturedNewsArticles = FeaturedArticlesData.allWordpressPost.edges
  // console.log("fad", FeaturedNewsArticles)
  return (
    <FeaturedNewsSection style={visibleAnimation}>
      <Waypoint
        bottomOffset="20%"
        onEnter={() =>
          isFeaturedNewsVisible ? null : toggleFeaturedNewsVisible(true)
        }
      />
      <h1>Featured News</h1>
      <FeaturedNewsContainer>
        {FeaturedNewsArticles.map(post => {
          return <FeaturedNewsCard key={post.node.id} post={post.node} />
        })}
      </FeaturedNewsContainer>
      <FeaturedNewsSlider post={FeaturedNewsArticles} />
      <FeaturedNewsLink to="/blog/news">More Articles</FeaturedNewsLink>
    </FeaturedNewsSection>
  )
}

export default FeaturedNews
