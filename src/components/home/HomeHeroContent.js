import React from "react"
import styled from "styled-components"
import HomeArticles from "./HomeArticles"
import HomeLinks from "./HomeLinks"

const HeroContent = styled.div`
  /* padding: 10px; */
  color: var(--light-shade);

  h1 {
    margin: 0;
    font-size: 3rem;
    margin-bottom: 1rem;

    @media (max-width: 600px) {
      font-size: 2rem;
      text-align: center;
      margin: auto;
    }

    @media (max-width: 350px) {
      font-size: 1.2rem;
    }
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: space-between;
  }
`

// const HomeHeroBtn = styled.button`
//   color: #fff;
//   border: 1px solid var(--light-shade);
//   background: transparent;
//   cursor: pointer;
//   border-radius: 5px;
//   font-size: 1.2rem;
//   padding: 0.5rem 1rem;
//   margin-right: 1rem;

//   :hover {
//     transition: opacity 0.2s linear;
//     opacity: 0.5;
//   }

//   :focus {
//     outline: 0;
//   }
// `

const HomeHeroContent = () => {
  return (
    <HeroContent>
      <h1>Welcome to Friesland School</h1>
      <ContentWrapper>
        <HomeLinks />
        <HomeArticles />
      </ContentWrapper>
    </HeroContent>
  )
}

export default HomeHeroContent
