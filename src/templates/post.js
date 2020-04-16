/* eslint-disable react/no-danger */
import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

import Layout from "../components/layout"
import BreadCrumb from "../components/utils/BreadCrumb"
// import PostSidebar from "../components/post/PostSidebar"
import FeaturedImage from "../components/utils/FeaturedImage"

const PostContent = styled.article`
  /* margin: 20px 0 0 0; */
  margin: auto;
  padding: 20px 54px 20px 54px;
  max-width: 1180px;
  background: #fff;
  position: relative;
  margin-bottom: 3rem;

  h1 {
    font-size: 50px;
    font-family: "Cormorant Garamond", serif;

    @media (max-width: 500px) {
      font-size: 30px;
    }
  }

  div {
    /* position: relative; */
    /* top: -100px; */
  }

  @media (max-width: 600px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`

const PostContentText = styled.div`
  position: relative;
  /* top: -100px; */
  width: 60%;
  margin: auto;

  @media (max-width: 600px) {
    width: 100%;
    padding: 10px;
    /* top: 20px; */
  }

  p {
    line-height: 1.8;
  }

  p:first-child {
    font-size: 1.1rem;
    color: #000;
    font-style: italic;
  }
`

const postTemplate = ({ data: { post } }) => (
  <Layout>
    {/* <PostSidebar
          date={post.date}
          author={post.author.name}
          categories={post.categories}
        /> */}
    <PostContent>
      <BreadCrumb
        parent={{
          link: "/blog/news",
          title: "News",
        }}
      />
      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
      <p dangerouslySetInnerHTML={{ __html: post.date }}></p>
      <FeaturedImage image={post.featured_media} />

      <PostContentText dangerouslySetInnerHTML={{ __html: post.content }} />
    </PostContent>
  </Layout>
)

postTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default postTemplate

export const pageQuery = graphql`
  query($id: String!) {
    post: wordpressPost(id: { eq: $id }) {
      content
      date(formatString: "DD MMM YYYY")
      excerpt
      path
      slug
      title
      status
      link
      author
      featured_media {
        id
        wordpress_id
        title
        status
        slug
        post
        path
        localFile {
          childImageSharp {
            fluid(cropFocus: NORTH, fit: CONTAIN, background: "#fff") {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
