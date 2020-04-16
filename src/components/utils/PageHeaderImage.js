import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

const HeroContent = styled.div`
  height: 400px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 3rem;
  margin-bottom: 2rem;

  h1 {
    padding: 20px;
    margin: 0;

    color: #fff;
    text-shadow: 2px 2px 4px #000000;

    @media (max-width: 700px) {
      font-size: 3rem;
    }
  }
`

const PageHeaderImage = ({ children, image }) => {
  console.log("PHI", image)
  console.log("children", children)
  return (
    <BackgroundImage fluid={image}>
      <HeroContent>
        <h1>{children}</h1>
      </HeroContent>
    </BackgroundImage>
  )
}

const StyledPageHeaderImage = styled(PageHeaderImage)`
  /* width: 100%;
  height: 500px; */
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`
export default StyledPageHeaderImage
