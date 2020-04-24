import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

import { OverlayMenu } from "./OverlayStyles"

const Overlay = ({ style }) => {
  return (
    <OverlayMenu style={style}>
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
            <Link to="/uniform">Uniform</Link>
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
}

export default Overlay
