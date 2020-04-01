/* eslint-disable react/no-danger */
import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

import Layout from "../components/layout"
// import Breadcrumb from "../components/BreadCrumb"
// import PostSidebar from "../components/post/PostSidebar"

const PostContent = styled.article`
  margin: 20px 0 0 0;
`

const postTemplate = ({ data: { post } }) => (
  <Layout>
    {/* <Breadcrumb
      parent={{
        link: "/trends/alla-trendspaningar",
        title: "trends",
      }}
    /> */}
    <div className="container">
      <div className="row" style={{ marginBottom: "40px" }}>
        {/* <PostSidebar
          date={post.date}
          author={post.author.name}
          categories={post.categories}
        /> */}
        <PostContent className="col-lg-9">
          <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </PostContent>
      </div>
    </div>
  </Layout>
)

postTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default postTemplate

export const pageQuery = graphql`
  query($id: String!) {
    post: wordpressPost(id: { eq: $id }) {
      title
      content

      date(formatString: "DD, MMM, YYYY")
      categories {
        id
        name
        slug
        path
      }
    }
  }
`
