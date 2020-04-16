import React from "react"
import styled from "styled-components"
import Logo from "./Logo"
// import Img from "gatsby-image"
import { Link } from "gatsby"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import Hamburger from "../nav/Hamburger"
import NavDropdown from "../nav/NavDropdown"

// import { useSpring, animated } from "react-spring"

const StyledHeaderBottom = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  border-bottom: 1px solid #c6d1db;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul li {
    margin-left: 10px;
  }
  ul li a {
    font-family: "Lato";
    text-decoration: none;
    font-size: 22px;
  }

  .twitterIcon {
    @media (max-width: 600px) {
      display: none;
    }
  }
`

const LogoContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  text-decoration: none;

  h1 {
    margin: 0;
    padding: 0;
    font-family: "Cormarant Garamond", serif;
    font-weight: 600;
  }

  h1 {
    @media (max-width: 430px) {
      font-size: 1.6rem;
    }

    @media (max-width: 366px) {
      font-size: 1.2rem;
    }
  }
`

const HeaderBottom = ({ handleOverlayMenu, show }) => {
  // const fadeIn = useSpring({
  //   opacity: 1,
  //   from: { opacity: 0 },
  //   config: { duration: 1000 },
  // })

  return (
    <StyledHeaderBottom>
      <LogoContainer to="/">
        <Logo /> <h1>FRIESLAND SCHOOL</h1>
      </LogoContainer>

      <ul>
        <li>
          <NavDropdown menuId="81" />
        </li>
        <li>
          <Hamburger handleOverlayMenu={handleOverlayMenu} show={show} />
        </li>
      </ul>
    </StyledHeaderBottom>
  )
}

export default HeaderBottom
