import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
// import Img from "gatsby-image"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"
import BackgroundImage from "gatsby-background-image"

const cardFall = keyframes`
  from {
    transform: translateY(-50%);
    opacity: 0;
  }

  to {
    transform: translateY(0%);
    opacity: 1;
  }
`

const StyledArticle = styled.article`
max-width: 350px;
  margin: 10px;
  background: #fff;
  height: 470px;
  /* animation: ${cardFall} 0.4s ease-in; */
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  position: relative;

  :hover {
    /* -webkit-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3); */
    box-shadow: var(--level-1);
  }
`

const StyledBackgroundImage = styled(BackgroundImage)`
  /* width: 100%; */
  height: 210px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const Date = styled.div`
  border-radius: 100%;
  background-color: #f24eaf;
  position: absolute;
  height: 55px;
  width: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 3px;
  right: 3px;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-self: center;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  ul li {
    color: #fff;
  }

  ul .day {
    font-size: 18px;
    font-weight: bold;
  }

  ul .month {
    font-size: 12px;
    text-transform: uppercase;
  }
`

const Categories = styled.div`
  position: absolute;
  bottom: 3px;
  left: 3px;
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    list-style: none;

    li {
      background-color: #21bf31;
      padding: 5px;
      font-weight: bold;
      margin-right: 3px;
      margin-bottom: 3px;

      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
`

const Title = styled.h2`
  font-weight: bold;
  margin: 0;
  margin-bottom: 10px;
  color: #666;
  font-size: 22px;
  text-align: center;
`

const CardContent = styled.div`
  padding: 20px;
  position: relative;
`

const Excerpt = styled.div`
  p {
    font-size: 14px;
    line-height: 1.8;
    color: #666;
    height: 75px;
    overflow: hidden;
  }
`

const ReadMore = styled(Link)`
  background-color: var(--primary);
  color: #fff;
  font-weight: bold;
  text-align: center;
  padding: 10px 10px;
  border-radius: 10px;
  width: 100%;
  display: block;
  text-decoration: none;
`

const BlogCard = ({ post }) => {
  const altImage = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "friesland-logo.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const altBgImage =
    post.node.featured_media === null ||
    post.node.featured_media.localFile.childImageSharp === null
      ? altImage.image.childImageSharp.fluid
      : post.node.featured_media.localFile.childImageSharp.fluid

  const [day, month] = post.node.date.split(",")

  const excerpt = post.node.excerpt
  const length = 140
  const trimmedExcerpt =
    excerpt.length > length ? excerpt.substring(0, length - 3) + "..." : excerpt

  return (
    <StyledArticle>
      <StyledBackgroundImage fluid={altBgImage}>
        <Date>
          <ul>
            <li className="day" dangerouslySetInnerHTML={{ __html: day }}></li>
            <li
              className="month"
              dangerouslySetInnerHTML={{ __html: month }}
            ></li>
          </ul>
        </Date>
        <Categories>
          <ul>
            {post.node.categories.map(category => {
              return (
                <li id={category.id}>
                  <Link to={`/blog/${category.slug}`}>{category.name}</Link>
                </li>
              )
            })}
          </ul>
        </Categories>
      </StyledBackgroundImage>
      <CardContent>
        <span className="author"></span>
        <Title dangerouslySetInnerHTML={{ __html: post.node.title }}></Title>
        <Excerpt dangerouslySetInnerHTML={{ __html: trimmedExcerpt }}></Excerpt>
        <ReadMore to={`/${post.node.slug}`}>
          <span>Read More...</span>
        </ReadMore>
      </CardContent>
    </StyledArticle>
  )
}

BlogCard.propTypes = {
  post: PropTypes.object,
}

export default BlogCard
