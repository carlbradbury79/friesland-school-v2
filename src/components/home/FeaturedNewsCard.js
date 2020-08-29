import React from "react"
import Img from "gatsby-image"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import Moment from "react-moment"

const NewsCard = styled.div`
  /* -webkit-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3); */
  box-shadow: var(--level-1);
  text-decoration: none;

  p {
    padding: 10px;
    font-size: 0.8rem;
    margin: 0;
    font-weight: 600;
  }
  h3 {
    margin: 0;
    padding: 10px;
    font-size: 1.2rem;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    :hover {
      /* color: #000; */
    }
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

  // Set the Friesland Logo if there is no featured image
  const FeaturedArticleImage =
    post.featuredImage.node === null ||
    post.featuredImage.node.remoteFile.childImageSharp === null
      ? altFeaturedArticleImage.image.childImageSharp.fluid
      : post.featuredImage.node.remoteFile.childImageSharp.fluid

  return (
    <NewsCard>
      <Link to={`/${post.slug}`}>
        <Img fluid={FeaturedArticleImage} title={post.title} alt={post.title} />
      </Link>
      <p>
        <Moment fromNow>{post.date}</Moment>
      </p>
      <Link to={`/${post.slug}`}>
        <h3 dangerouslySetInnerHTML={{ __html: post.title }} />
      </Link>
    </NewsCard>
  )
}

export default FeaturedNewsCard
