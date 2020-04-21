import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Link } from "gatsby"

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

  a {
    padding: 5px;
    /* background-color: #fff; */
    color: #fff;
    background-color: var(--primary-alpha);
    /* border: var(--primary) 2px solid; */
    margin-bottom: 10px;

    :hover {
      /* background-color: var(--primary); */
      color: #fff;

      text-decoration: underline;
    }
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

  const LeftImage = HeroImageLeft.file.childImageSharp.fluid

  return (
    <BackgroundImage fluid={LeftImage}>
      <HeroContent>
        <h1>New Visitors</h1>
        <Link to="/vision-ethos">Headteacher's Welcome</Link>
        <Link to="/curriculum">Curriculum</Link>
        <Link>SEND</Link>
        <Link to="/ofsted">OfSted and DFE</Link>
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
