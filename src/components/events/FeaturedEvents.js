import React, { useState, useEffect } from "react"
import styled from "styled-components"
import FeaturedEvent from "./FeaturedEvent"
import {
  SectionLink,
  SectionTitle,
  EventLayoutContainer,
} from "../cardLayouts/CardStyles"

const NoEventMsg = styled.h4`
  text-align: center;
  margin-bottom: 2rem;
`

const FeaturedEvents = ({ data: eventData, link, title }) => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const eventPosts = eventData.map(event => {
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

    setEvents(newEvents)
  }, [eventData])

  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      {events.length > 0 ? (
        <EventLayoutContainer displayNumber={events.length}>
          {events.map((event, i) => {
            return (
              i < events.length && (
                <FeaturedEvent key={event.id} event={event} />
              )
            )
          })}
        </EventLayoutContainer>
      ) : (
        <NoEventMsg>No events coming up right now</NoEventMsg>
      )}
      <SectionLink to={link}>More events</SectionLink>
    </>
  )
}

export default FeaturedEvents
