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
    text-align: center;
    font-size: var(--h3Size);
  }

  a {
    padding: 5px;
    background-color: var(--primary-alpha);
    color: #fff;
    /* border: var(--primary) 2px solid; */
    margin-bottom: 10px;

    :hover {
      /* background-color: var(--primary); */
      color: #fff;
      text-decoration: underline;
    }
  }
`

const HeroRight = () => {
  const HeroImageRight = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "home/champions.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1980, toFormat: PNG) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const RightImage = HeroImageRight.file.childImageSharp.fluid

  return (
    <BackgroundImage fluid={RightImage}>
      <HeroContent>
        <h1>Current Students</h1>
        <Link to="/term-dates">Term Dates</Link>
        <Link to="/blog/letters">Latest Letters</Link>
        <a href="https://classroom.google.com/h">Google Classroom</a>
        <a href="https://apps.libresoft.co.uk/8305409-r72gi709iqc4qfwfsqjs-fs/">
          Library Books
        </a>
        <Link to="/blog/covid-19">Covid-19 Documents</Link>
        <a href="https://sites.google.com/frieslandschool.com/performing-arts-hub/home">
          Peforming Arts Hub
        </a>
        {/* <Link to="/newsletter">Newsletter</Link> */}
      </HeroContent>
    </BackgroundImage>
  )
}

const StyledHeroRight = styled(HeroRight)`
  width: 100%;
  height: 500px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`
export default StyledHeroRight
