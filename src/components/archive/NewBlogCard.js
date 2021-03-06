import React from "react"
import { Link } from "gatsby"
// import Img from "gatsby-image"
// import PropTypes from "prop-types"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import Moment from "react-moment"
import AltCardImage from "./BlogCardImage"

const StyledArticle = styled.article`
  padding: 1rem;

  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.15);
  position: relative;

  :hover {
    /* -webkit-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3); */
    box-shadow: var(--level-4);
  }
`

const StyledBackgroundImage = styled(BackgroundImage)`
  /* width: 100%; */
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
      background-color: #004c97;
      padding: 5px;
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
  margin: 0;
  margin-bottom: 10px;
  color: #000;
  font-size: 1.2rem;
`

const CardContent = styled.div`
  position: relative;
  a {
    text-decoration: none;
  }
`

const BlogCard = ({ post }) => {
  const altBgImage =
    post.featuredImage === null ||
    post.featuredImage.node.remoteFile.childImageSharp === null
      ? AltCardImage()
      : post.featuredImage.node.remoteFile.childImageSharp.fluid

  return (
    <StyledArticle>
      <Link to={`/${post.slug}`}>
        <StyledBackgroundImage fluid={altBgImage}>
          <Categories>
            <ul>
              {post.categories.nodes.map(category => {
                return (
                  <li key={category.id}>
                    <Link to={`/${category.slug}`}>{category.name}</Link>
                  </li>
                )
              })}
            </ul>
          </Categories>
        </StyledBackgroundImage>
      </Link>
      <CardContent>
        {post.categories.nodes[0].name === "Events" ? (
          <p>
            <Moment fromNow>{post.eventDate.dateofevent}</Moment>
          </p>
        ) : (
          <p>
            <Moment fromNow>{post.date}</Moment>
          </p>
        )}

        <span className="author"></span>
        <Link to={`/${post.slug}`}>
          <Title dangerouslySetInnerHTML={{ __html: post.title }}></Title>
        </Link>
      </CardContent>
    </StyledArticle>
  )
}

// BlogCard.propTypes = {
//   post: PropTypes.object,
// }

export default BlogCard
