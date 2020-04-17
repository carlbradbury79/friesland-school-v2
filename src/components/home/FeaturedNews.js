import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FeaturedNewsCard from "./FeaturedNewsCard"
import styled from "styled-components"
import FeaturedNewsSlider from "./FeaturedNewsSlider"

const FeaturedNewsSection = styled.section`
  margin: 2rem 0;

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
  const FeaturedNewsArticles = FeaturedArticlesData.allWordpressPost.edges
  console.log("fad", FeaturedNewsArticles)
  return (
    <FeaturedNewsSection>
      <h1>Featured News</h1>
      <FeaturedNewsContainer>
        {FeaturedNewsArticles.map(post => {
          return <FeaturedNewsCard key={post.node.id} post={post.node} />
        })}
      </FeaturedNewsContainer>
      <FeaturedNewsSlider post={FeaturedNewsArticles} />
    </FeaturedNewsSection>
  )
}

export default FeaturedNews
