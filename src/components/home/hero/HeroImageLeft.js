import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"
import HeroLink from "../../utils/HeroLink"
import { animated, useTrail } from "react-spring"

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 20px;
  align-items: center;

  h1 {
    background-color: var(--primary-alpha);
    color: #fff;
    padding: 10px;
  }
`

export const HeroLeft = () => {
  const HeroImageLeft = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "home/green-trees.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1980, toFormat: PNG) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const links = [
    { to: "/vision-ethos", text: "Headteacher's Welcome" },
    { to: "/curriculum", text: "Curriculum" },
    { to: "/send", text: "SEND" },
    { to: "/ofsted", text: "OfSted and DFE" },
  ]
  const trail = useTrail(links.length, {
    from: { opacity: 0 },
    to: { opacity: 1 },
  })
  const LeftImage = HeroImageLeft.file.childImageSharp.fluid

  return (
    <BackgroundImage fluid={LeftImage}>
      <HeroContent>
        <h1>New Visitors</h1>
        {links.map(link => (
          <HeroLink key={link.to} to={link.to} text={link.text} />
          // <animated.div style={animation} key={links[link]}>
          //   <HeroLink to={links[link].to} text={links[link].text} />
          // </animated.div>
        ))}
      </HeroContent>
    </BackgroundImage>
  )
}

const StyledHeroLeft = styled(HeroLeft)`
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
export default StyledHeroLeft
