import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(
              maxWidth: 1920
              duotone: { highlight: "#47b9d6", shadow: "#214f95", opacity: 0 }
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          style={{
            height: `100vh`,
            width: `100vw`,
            backgroundColor: `transparent`,
            backgroundSize: `cover`,
            backgroundPosition: `center center`,
            display: `flex`,
            alignItems: `center`,
            justifyContent: "center",
          }}
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
          <h2 style={{ color: "#fff" }}>gatsby-background-image</h2>
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection
