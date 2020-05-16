/* eslint-disable react/no-danger */
import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import Moment from "react-moment"

import Layout from "../components/layout"
import BreadCrumb from "../components/utils/BreadCrumb"
// import PostSidebar from "../components/post/PostSidebar"
import FeaturedImage from "../components/utils/FeaturedImage"
import SocialShare from "../components/utils/SocialShare"

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
      {/* {console.log("cat", post.categories[0].name)} */}
      <BreadCrumb
        parent={{
          slug: `/blog/${post.categories.nodes[0].slug}`,
          title: post.categories.nodes[0].name,
        }}
      />
      <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
      <p>
        Published:
        <Moment format="DD-MM-YYYY">
          <span dangerouslySetInnerHTML={{ __html: post.date }} />
        </Moment>
      </p>

      <FeaturedImage image={post.featuredImage} />
      <SocialShare title={post.title} link={post.link} />
      <PostContentText dangerouslySetInnerHTML={{ __html: post.content }} />
    </PostContent>
  </Layout>
)

postTemplate.propTypes = {
  data: PropTypes.object.isRequired,
}

export default postTemplate

export const query = graphql`
  query($id: String!) {
    post: wpPost(id: { eq: $id }) {
      content
      date
      excerpt
      uri
      title
      status
      slug
      link
      categories {
        nodes {
          count
          id
          link
          name
          slug
        }
      }
      featuredImage {
        remoteFile {
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

// export const pageQuery = graphql`
//   query($id: String!) {
//     post: post(id: { eq: $id }) {
//       content
//       date(formatString: "DD MMM YYYY")
//       excerpt
//       path
//       slug
//       title
//       status
//       link
//       categories {
//         name
//         slug
//       }
//       author
//       featured_media {
//         id
//         wordpress_id
//         title
//         status
//         slug
//         post
//         path
//         localFile {
//           childImageSharp {
//             fluid(cropFocus: NORTH, fit: CONTAIN, background: "#fff") {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `
