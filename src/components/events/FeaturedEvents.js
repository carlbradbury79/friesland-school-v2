import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import FeaturedEvent from "./FeaturedEvent"

const FeaturedEventSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1rem;
  margin-bottom: 3rem;

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

const EventTitle = styled.h2`
  margin-top: 4rem;
  margin-bottom: 4rem;
  font-family: "Cormorant Garamond", serif;
  font-size: var(--h3Size);
  font-weight: 600;
  text-align: center;
`

const NoEventMsg = styled.h4`
  text-align: center;
  margin-bottom: 2rem;
`

const FeaturedNewsLink = styled(Link)`
  background: #fff;
  color: var(--primary);
  border: 2px solid var(--primary);
  padding: 10px 20px;
  display: block;
  margin: auto;
  width: 200px;
  text-align: center;
  margin-bottom: 4rem;
  :hover {
    background: var(--primary);
    color: #fff;
    border: 2px solid #fff;
    text-decoration: none;
  }
`

const FeaturedEvents = () => {
  const FeaturedEventData = useStaticQuery(graphql`
    query EventQuery {
      allWpPost(
        filter: {
          categories: { nodes: { elemMatch: { name: { eq: "Events" } } } }
        }
      ) {
        nodes {
          title
          eventDate {
            dateofevent
            endtime
          }
          id
          title
          link
          slug
          status
          content
          featuredImage {
            node {
              remoteFile {
                childImageSharp {
                  fluid(
                    cropFocus: NORTH
                    fit: CONTAIN
                    background: "#fff"
                    maxWidth: 1000
                    maxHeight: 750
                  ) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  `)

  const [events, setEvents] = useState([])

  useEffect(() => {
    const eventPosts = FeaturedEventData.allWpPost.nodes.map(event => {
      // console.log("WP date", event.eventDate.dateofevent)
      event.eventDate.dateofevent = new Date(event.eventDate.dateofevent)
      event.eventDate.endtime = new Date(event.eventDate.endtime)
      // console.log("post WP", event.eventDate.dateofevent)
      return event
    })
    // Order events
    const sortedEvents = eventPosts.sort(
      (a, b) => a.eventDate.dateofevent - b.eventDate.dateofevent
    )

    const today = new Date(Date.now())

    // Remove old events
    const newEvents = sortedEvents.filter(
      event => today < event.eventDate.endtime
    )
    console.log("newEvents", newEvents)

    setEvents(newEvents)
  }, [])
  console.log(events)
  console.log("events 0?", events.length)

  return (
    <>
      <EventTitle>Upcoming Events</EventTitle>
      {events.length > 0 ? (
        <FeaturedEventSection>
          {events.map((event, i) => {
            console.log(event)
            return i < 2 && <FeaturedEvent key={event.id} event={event} />
          })}
        </FeaturedEventSection>
      ) : (
        <NoEventMsg>No events coming up right now</NoEventMsg>
      )}
      <FeaturedNewsLink to="/blog/events">More events</FeaturedNewsLink>
    </>
  )
}

export default FeaturedEvents
