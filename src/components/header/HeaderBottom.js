import React from "react"
import styled from "styled-components"
import Logo from "./Logo"
// import Img from "gatsby-image"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import Hamburger from "../nav/Hamburger"

const Header = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
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
  }

  h1 {
    @media (max-width: 400px) {
      font-size: 1.6rem;
    }
  }
`

const HeaderBottom = ({ handleOverlayMenu, show }) => {
  return (
    <Header>
      <LogoContainer to="/">
        <Logo /> <h1>FRIESLAND SCHOOL</h1>
      </LogoContainer>

      <ul>
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Curriculum</Link>
        </li>
        <li>
          <Link to="/">Information</Link>
        </li>
        <li>
          <Link to="/">Vacancies</Link>
        </li>
        <li>
          <Link to="/">Lettings</Link>
        </li>
        <li>
          <Link to="/">PTA</Link>
        </li>
        <li>
          <Link to="/">Tickets</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li> */}
        {/* <li className="twitterIcon">
          <Link to="/">
            {" "}
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </li> */}
        <li>
          <Hamburger handleOverlayMenu={handleOverlayMenu} show={show} />
        </li>
      </ul>
    </Header>
  )
}

export default HeaderBottom
