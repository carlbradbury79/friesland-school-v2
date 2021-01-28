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
import { Helmet } from "react-helmet"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

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

const PublishDate = styled.p`
  font-size: 0.8rem;
`

const postTemplate = ({ data: { post } }) => {
  const postType = post.categories.nodes.find(
    category => category.name === "Events"
  )
  const now = new Date(Date.now())
  const eventStart = new Date(post.eventDate.dateofevent)
  const eventEnd = new Date(post.eventDate.endtime)
  // console.log(now)
  // console.log(eventStart)
  // console.log(eventEnd)
  // console.log(post)
  return (
    <Layout>
      <Helmet>
        <title>Friesland School | {post.title}</title>
        <meta property="og:title" content={post.title} />
        <meta
          property="og:description"
          content={
            post.meta.description && post.meta.description.length > 0
              ? post.meta.description
              : "This is an article on frieslandschool.com"
          }
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/frieslandschool/image/upload/v1599168252/Logo/friesland-logo_uadh71.jpg"
        />
        <meta
          property="og:url"
          content={`http://frieslandschool.com/${post.slug}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      {/* <PostSidebar
          date={post.date}
          author={post.author.name}
          categories={post.categories}
        /> */}
      <PostContent>
        <BreadCrumb
          parent={[
            {
              slug: `/${post.categories.nodes[0].slug}`,
              title: post.categories.nodes[0].name,
            },
          ]}
        />
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />

        {postType ? (
          <PublishDate>
            {eventStart > now ? (
              <span>
                Event starts{" "}
                <Moment fromNow>{post.eventDate.dateofevent}</Moment>
              </span>
            ) : now > eventEnd ? (
              <span>
                Event finshed <Moment fromNow>{post.eventDate.endtime}</Moment>
              </span>
            ) : (
              <span>Event on now!</span>
            )}
            {/* Event starts <Moment fromNow>{post.eventDate.dateofevent}</Moment> */}
          </PublishDate>
        ) : (
          <PublishDate>
            Posted:{" "}
            <Moment format="DD-MM-YYYY">
              {post.date}
              {/* <span dangerouslySetInnerHTML={{ __html: post.date }} /> */}
            </Moment>
          </PublishDate>
        )}

        <FeaturedImage image={post.featuredImage} />
        <SocialShare title={post.title} link={post.slug} />
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
