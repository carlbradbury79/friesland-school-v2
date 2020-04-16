import React from "react"
import Img from "gatsby-image"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"

const NewsCard = styled.div`
  -webkit-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);

  p {
    padding: 10px;
    font-size: 0.8rem;
    margin: 0;
    font-weight: 600;
  }
  h3 {
    margin: 0;
    padding: 10px;
    font-size: 1rem;
    font-weight: normal;
  }
`
const FeaturedNewsCard = ({ post }) => {
  const altFeaturedArticleImage = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "friesland-logo.jpg" }) {
        id
        childImageSharp {
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
  const FeaturedArticleImage =
    post.featured_media === null ||
    post.featured_media.localFile.childImageSharp === null
      ? altFeaturedArticleImage.image.childImageSharp.fluid
      : post.featured_media.localFile.childImageSharp.fluid
  console.log("FeaturedArticleImage", post)
  return (
    <NewsCard>
      <Link to={`/${post.slug}`}>
        <Img fluid={FeaturedArticleImage} title={post.title} alt={post.title} />
      </Link>
      <p>{post.date}</p>
      <Link to={`/${post.slug}`}>
        <h3>{post.title}</h3>
      </Link>
    </NewsCard>
  )
}

export default FeaturedNewsCard
