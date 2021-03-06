import React from "react"
// import Img from "gatsby-image"
import Moment from "react-moment"
import { Link } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { useArticleImage } from "../graphql/useArticleImage"

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

    @media (max-width: 850px) {
      font-size: 2rem;
    }
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

  const { title, featuredImage, eventDate, slug } = event

  // excerpt, content,

  const altFeaturedEventImage = useArticleImage()

  const FeaturedEventImage =
    featuredImage === null ||
    featuredImage.node.remoteFile.childImageSharp === null
      ? altFeaturedEventImage.image.childImageSharp.fluid
      : featuredImage.node.remoteFile.childImageSharp.fluid

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
                {months[eventDate.dateofevent.getMonth()]}-
                {eventDate.dateofevent.getFullYear()}
                {/* {" ("}
                <Moment to={eventDate.dateofevent}>{today}</Moment>
                {")"} */}
              </p>

              {/* Event is at least over 1 day away  */}
              {/* {eventDate.dateofevent.getMonth() - today.getMonth() > 0 ||
                (eventDate.dateofevent.getDate() - today.getDate() > 1 && (
                  <p>
                    This event starts{" "}
                    <Moment to={eventDate.dateofevent}>{today}</Moment>
                  </p>
                ))} */}

              {/* Event starts tomorrow */}
              {eventDate.dateofevent.getMonth() - today.getMonth() === 0 &&
                eventDate.dateofevent.getDate() - today.getDate() === 1 && (
                  <p>
                    This event starts tomorrow at{" "}
                    {eventDate.dateofevent.getHours()}:
                    {eventDate.dateofevent.getMinutes() < 10
                      ? "0" + eventDate.dateofevent.getMinutes().toString()
                      : eventDate.dateofevent.getMinutes()}
                  </p>
                )}

              {/* Event Starts today */}
              {eventDate.dateofevent.getMonth() - today.getMonth() === 0 &&
                eventDate.dateofevent.getDate() - today.getDate() === 0 && (
                  <p>
                    This event starts today at{" "}
                    {eventDate.dateofevent.getHours()}:
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
              {/* <p>
                Event finishes at {eventDate.endtime.getHours()}:
                {eventDate.endtime.getMinutes() < 10
                  ? "0" + eventDate.endtime.getMinutes().toString()
                  : eventDate.endtime.getMinutes()}{" "}
              </p> */}
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
