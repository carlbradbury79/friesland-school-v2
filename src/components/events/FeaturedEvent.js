import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Moment from "react-moment"
import { Link } from "gatsby"
import styled from "styled-components"

const Event = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  text-align: center;

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
    <Event>
      <Img fluid={FeaturedEventImage} />
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      {/* <p dangerouslySetInnerHTML={{ __html: content }} /> */}
      <p>
        <Moment fromNow>{eventDate.dateofevent}</Moment>
      </p>
      <Link to={`/${slug}`}>Read More</Link>
      {/* <p>{acf.date_of_event.toString()}</p> */}
    </Event>
  )
}

export default FeaturedEvent
