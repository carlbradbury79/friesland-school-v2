import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Moment from "react-moment"
import { Link } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const Event = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 20px;
  align-items: center;

  h2 {
    font-size: 3rem;
    /* padding: 1rem; */
    margin: 0;
    margin-bottom: 1rem;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    display: inline-block;
  }

  p {
    background: var(--primary-alpha);
    color: #fff;
    font-size: 1rem;
    margin: 0;
    margin-bottom: 1rem;
    padding: 0.5rem;
  }

  a {
    /* display: inline-block; */
    background: var(--primary-alpha);
    color: #fff;
  }

  img {
    max-height: 300px;
  }
`

const FeaturedEvent = ({ event }) => {
  // console.log("event", event)
  const { title, excerpt, content, featuredImage, eventDate, slug } = event

  const altFeaturedEventImage = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "friesland-logo.jpg" }) {
        id
        childImageSharp {
          fluid(
            maxWidth: 1000
            maxHeight: 750
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

  const FeaturedEventImage =
    featuredImage === null || featuredImage.remoteFile.childImageSharp === null
      ? altFeaturedEventImage.image.childImageSharp.fluid
      : featuredImage.remoteFile.childImageSharp.fluid

  //   const image =
  //     featured_media && featured_media.localFile
  //       ? featured_media.localFile.childImageSharp
  //       : SpareImage.image.childImageSharp;

  // console.log(FeaturedEventImage)
  // console.log(acf.date_of_event)
  return (
    <Link to={`/${slug}`}>
      <BackgroundImage fluid={FeaturedEventImage}>
        <Event>
          {/* <Img fluid={FeaturedEventImage} /> */}
          <h2 dangerouslySetInnerHTML={{ __html: title }} />
          {/* <p dangerouslySetInnerHTML={{ __html: content }} /> */}
          <p>
            <Moment fromNow>{eventDate.dateofevent}</Moment>
          </p>
          <p>Read More</p>
          {/* <Link to={`/${slug}`}>Read More</Link> */}
          {/* <p>{acf.date_of_event.toString()}</p> */}
        </Event>
      </BackgroundImage>
    </Link>
  )
}

export default FeaturedEvent
