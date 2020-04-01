import React from "react"
import styled from "styled-components"
import HomeArticles from "./HomeArticles"

const HeroContent = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
  color: var(--light-shade);
  align-items: center;
  justify-content: space-around;
  height: 100%;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  .ethos {
    display: flex;
    flex-direction: column;
    padding-top: 2rem;
    height: 100%;
  }

  .usefulLinks ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  .usefulLinks ul li {
    list-style: none;
    padding: 1rem 40px;
    border-top: 1px solid var(--light-shade);
  }

  .usefulLinks ul li:last-child {
    border-bottom: 1px solid var(--light-shade);
  }

  .btn {
    color: #fff;
    border: 1px solid var(--light-shade);
    background: transparent;
    cursor: pointer;
    border-radius: 5px;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    margin-right: 1rem;
  }

  .btn:hover {
    transition: opacity 0.2s linear;
    opacity: 0.5;
  }

  button:focus {
    outline: 0;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;

    @media (max-width: 600px) {
      font-size: 2rem;
      text-align: center;
      margin: auto;
    }
  }

  p {
    margin-bottom: 1rem;
  }

  .homeButtons {
    display: flex;
    flex-direction: row;
  }
`

const HomeHeroContent = () => {
  return (
    <HeroContent>
      <div className="ethos">
        <h1>Welcome to Friesland School</h1>
        <HomeArticles />
        {/* <p>Hard work, community, pastoral care</p> */}
        {/* <div className="homeButtons">
          <button className="btn">Ethos</button>
          <button className="btn">Curriculum</button>
          <button className="btn">Contact</button>
        </div> */}
      </div>
      <div className="usefulLinks">
        <ul>
          <li>Headteachers Welcome</li>
          <li>Curriculum</li>
          <li>SEND</li>
          <li>Safeguarding</li>
        </ul>
      </div>
    </HeroContent>
  )
}

export default HomeHeroContent
