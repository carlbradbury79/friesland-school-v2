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
  const today = new Date(Date.now())

  const days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"]
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

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
          <h2 dangerouslySetInnerHTML={{ __html: title }} />

          {/* Event yet to start */}
          {eventDate.dateofevent > today && (
            <div>
              <p>
                Event starts at {eventDate.dateofevent.getHours()}:
                {eventDate.dateofevent.getMinutes() < 10
                  ? "0" + eventDate.dateofevent.getMinutes().toString()
                  : eventDate.dateofevent.getMinutes()}{" "}
                on {days[eventDate.dateofevent.getDay()]},{" "}
                {eventDate.dateofevent.getDate()}-
                {months[eventDate.dateofevent.getMonth() - 1]}-
                {eventDate.dateofevent.getFullYear()}
              </p>

              {/* Event starts tomorrow */}
              {eventDate.dateofevent.getMonth() - today.getMonth() === 0 &&
              eventDate.dateofevent.getDate() - today.getDate() === 1 ? (
                <p>
                  Tomorrow at {eventDate.dateofevent.getHours()}:
                  {eventDate.dateofevent.getMinutes() < 10
                    ? "0" + eventDate.dateofevent.getMinutes().toString()
                    : eventDate.dateofevent.getMinutes()}
                </p>
              ) : (
                <p>
                  Starts <Moment fromNow>{eventDate.dateofevent}</Moment>
                </p>
              )}

              {/* Event Starts today */}
              {eventDate.dateofevent.getMonth() - today.getMonth() === 0 &&
                eventDate.dateofevent.getDate() - today.getDate() === 0 && (
                  <p>
                    Today at {eventDate.dateofevent.getHours()}:
                    {eventDate.dateofevent.getMinutes() < 10
                      ? "0" + eventDate.dateofevent.getMinutes().toString()
                      : eventDate.dateofevent.getMinutes()}
                  </p>
                )}
            </div>
          )}

          {/* Event that has started */}
          {eventDate.endtime > today && eventDate.dateofevent < today && (
            <div>
              <p>Event is on right now!</p>
              <p>
                Finishes <Moment to={eventDate.endtime}>{today}</Moment>
              </p>
              <p>
                Event finishes at {eventDate.endtime.getHours()}:
                {eventDate.endtime.getMinutes() < 10
                  ? "0" + eventDate.endtime.getMinutes().toString()
                  : eventDate.endtime.getMinutes()}{" "}
              </p>
            </div>
          )}

          <p>Read More</p>
          {/* <Link to={`/${slug}`}>Read More</Link> */}
          {/* <p>{acf.date_of_event.toString()}</p> */}
        </Event>
      </BackgroundImage>
    </Link>
  )
}

export default FeaturedEvent
