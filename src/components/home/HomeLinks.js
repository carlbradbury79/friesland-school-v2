import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"

const HomeLinksContainer = styled.div`
  h3 {
    text-align: center;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  ul li {
    list-style: none;
    padding: 1rem 40px;
    border-top: 1px solid var(--light-shade);
  }

  ul li:last-child {
    border-bottom: 1px solid var(--light-shade);
    margin-bottom: 3rem;
  }

  ul li a {
    text-decoration: none;
    color: var(--light-shade);
  }
`

const HomeLinks = () => {
  return (
    <HomeLinksContainer>
      <h3>About Us</h3>
      <ul>
        <li>
          <Link to="/vision-ethos">
            <FontAwesomeIcon icon={faLink} /> Headteachers Welcome
          </Link>
        </li>
        <li>
          <Link to="/curriculum">
            <FontAwesomeIcon icon={faLink} /> Curriculum
          </Link>
        </li>
        <li>
          <Link to="SEND">
            <FontAwesomeIcon icon={faLink} /> SEND
          </Link>
        </li>
        <li>
          <Link to="/safeguarding">
            <FontAwesomeIcon icon={faLink} /> Safeguarding
          </Link>
        </li>
      </ul>
    </HomeLinksContainer>
  )
}

export default HomeLinks
