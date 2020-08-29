/* eslint-disable react/no-danger */
import React, { useState } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import Moment from "react-moment"

import Layout from "../components/layout"
import BreadCrumb from "../components/utils/BreadCrumb"
// import PostSidebar from "../components/post/PostSidebar"
import FeaturedImage from "../components/utils/FeaturedImage"
import SocialShare from "../components/utils/SocialShare"
import { Helmet } from "react-helmet"

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

const postTemplate = ({ data: { post } }) => {
  const postType = post.categories.nodes.find(
    category => category.name === "Events"
  )
  const today = new Date(Date.now())
  return (
    <Layout>
      <Helmet>
        <title>Friesland School | {post.title}</title>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.meta.description} />
        <meta
          property="og:image"
          content="http://euro-travel-example.com/thumbnail.jpg"
        />
        <meta
          property="og:url"
          content="http://euro-travel-example.com/index.htm"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
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

        {postType ? (
          <p>
            Event starts <Moment fromNow>{post.eventDate.dateofevent}</Moment>
          </p>
        ) : (
          <p>
            Published:
            <Moment format="DD-MM-YYYY">
              <span dangerouslySetInnerHTML={{ __html: post.date }} />
            </Moment>
          </p>
        )}

        <FeaturedImage image={post.featuredImage} />
        <SocialShare title={post.title} link={post.slug} />
        {console.log("meta")}
        <PostContentText dangerouslySetInnerHTML={{ __html: post.content }} />
      </PostContent>
    </Layout>
  )
}

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
      meta {
        description
      }
      eventDate {
        dateofevent
        endtime
      }
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
        node {
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
