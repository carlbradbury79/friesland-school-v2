import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const FeaturedEvent = ({ event }) => {
  const { title, excerpt, content, featured_media, acf } = event.node

  const altFeaturedEventImage = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "friesland-logo.jpg" }) {
        id
        childImageSharp {
          fluid(
            maxWidth: 2000
            maxHeight: 1500
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
    featured_media === null || featured_media.localFile.childImageSharp === null
      ? altFeaturedEventImage.image.childImageSharp.fluid
      : featured_media.localFile.childImageSharp.fluid

  //   const image =
  //     featured_media && featured_media.localFile
  //       ? featured_media.localFile.childImageSharp
  //       : SpareImage.image.childImageSharp;

  console.log(FeaturedEventImage)
  console.log(acf.date_of_event)
  return (
    <div>
      <Img fluid={FeaturedEventImage} />
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{acf.date_of_event.toString()}</p>
    </div>
  )
}

export default FeaturedEvent
