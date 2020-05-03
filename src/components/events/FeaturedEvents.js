import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql, Link } from "gatsby"
import FeaturedEvent from "./FeaturedEvent"

import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"

const APOLLO_QUERY = gql`
  {
    categories {
      edges {
        node {
          id
        }
      }
    }
  }
`

const FeaturedEventSection = styled.section`
  h1 {
    margin-top: 4rem;
    margin-bottom: 4rem;
    font-family: "Cormarant Garamond", serif;
    font-size: 2rem;
    font-weight: normal;
    font-weight: Semi-bold;
    text-align: center;
  }

  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 36px;
    grid-row-gap: 36px;
    padding: 0 40px;
    margin-bottom: 5rem;

    a {
      color: #004c97;
      :hover {
        text-decoration: underline;
      }
    }

    @media (max-width: 860px) {
      grid-template-columns: repeat(2, 1fr);
      padding: 0 20px;
    }

    @media (max-width: 480px) {
      grid-template-columns: repeat(1, 1fr);
      padding: 0 10px;
      display: none;
    }
  }
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
  const { loading, error, data } = useQuery(APOLLO_QUERY)
  console.log("FEATURED EVENTS", data)
  const FeaturedEventData = useStaticQuery(graphql`
    query EventQuery {
      allWordpressPost(
        filter: { categories: { elemMatch: { name: { eq: "Events" } } } }
      ) {
        edges {
          node {
            title
            acf {
              date_of_event
            }
            categories {
              name
            }
            slug
            id
            excerpt
            content
            featured_media {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 2000, maxHeight: 1500, cropFocus: CENTER) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  console.log("Events", FeaturedEventData.allWordpressPost.edges)
  console.log(
    "Events",
    FeaturedEventData.allWordpressPost.edges[0].node.acf.date_of_event
  )
  const dateToFormat =
    FeaturedEventData.allWordpressPost.edges[0].node.acf.date_of_event

  let eventDay = new Date(dateToFormat)

  const eventPosts = FeaturedEventData.allWordpressPost.edges.map(event => {
    event.node.acf.date_of_event = new Date(event.node.acf.date_of_event)
    return event
  })

  const sortedEvents = eventPosts.sort(
    (a, b) => a.node.acf.date_of_event - b.node.acf.date_of_event
  )
  console.log("eventPosts", eventPosts)
  console.log("sortedEvents", sortedEvents)

  const today = Date.now()
  console.log("today", today)

  const newEvents = sortedEvents.filter(
    event => today < event.node.acf.date_of_event
  )

  console.log("newEvents", newEvents)

  return (
    <FeaturedEventSection>
      <h1>Upcoming Events</h1>
      <div>
        {newEvents.map((event, i) => {
          return i < 2 && <FeaturedEvent key={event.node.id} event={event} />
        })}
      </div>
      <FeaturedNewsLink to="/blog/events">More events</FeaturedNewsLink>
    </FeaturedEventSection>
  )
}

export default FeaturedEvents
