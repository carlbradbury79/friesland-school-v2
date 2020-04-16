import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
// import { keyframes } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

const OverlayMenu = styled.nav`
  background: var(--primary);
  color: var(--light-shade);
  position: fixed;
  top: 86px;
  left: 0;
  bottom: 0;
  /* height: 80%; */
  width: 100vw;
  z-index: 100;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  padding: 20px;

  @media (max-width: 430px) {
    position: fixed;
    top: 80px;
  }

  @media (max-width: 366px) {
    top: 74px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  div {
    text-align: center;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 0;
    padding: 0;
    position: static;
  }

  ul li {
    padding: 1rem 40px;
    border-top: 1px solid var(--light-shade-alpha);
  }

  ul li:last-child {
    border-bottom: 1px solid var(--light-shade-alpha);
    margin-bottom: 20px;
  }

  ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
  }
  h2 {
    margin-bottom: 1rem;
  }
`
const Overlay = ({ show }) => {
  console.log("overlay", Overlay.classList)

  let overlayClass = "overlayMenu"
  if (show) {
    overlayClass = "overlayMenu open"
    console.log("on")

    return (
      <OverlayMenu className={overlayClass}>
        <div>
          <h2>School Information</h2>
          <ul>
            <li>
              <Link to="/curriculum">Curriculum</Link>
            </li>
            <li>
              <Link to="/policies">Policies</Link>
            </li>
            <li>
              <Link to="/pupil-premium">Pupil Premium</Link>
            </li>
            <li>Prospectus</li>
            <li>
              <Link to="/transition-from-primary-schools-to-friesland">
                Transition
              </Link>
            </li>
            <li>
              <Link to="/sixth-form">Sixth Form</Link>
            </li>
            <li>Results</li>
            <li>
              <Link to="/ofsted">OFSTED and DFE</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Parent Info</h2>
          <ul>
            <li>
              <Link to="/term-dates">Term Dates</Link>
            </li>
            <li>
              <Link to="uniform">Uniform</Link>
            </li>
            <li>
              <Link to="/letters">Letters</Link>
            </li>
            <li>Newsletters</li>
            <li>
              <Link to="/pta">PTA</Link>
            </li>
            <li>
              <Link to="/catering">Weekly Menu</Link>
            </li>
          </ul>
        </div>
        <div>
          <h2>Keeping in Touch</h2>
          <ul>
            <li>
              <Link to="/blog/news">Blog</Link>
            </li>
            <li>
              <a href="https://www.flickr.com/photos/frieslandschool/sets/">
                Gallery
              </a>
            </li>
            <li>Staff Details</li>
            <li>Contact</li>
            <ul>
              <li>
                {" "}
                <a href="https://twitter.com/frieslandschool?lang=en">
                  {" "}
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </OverlayMenu>
    )
  } else {
    return null
  }
}

export default Overlay
