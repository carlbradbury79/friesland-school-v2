import React from "react"
// import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"

import { FooterSocialIcons } from "./footerStyles"

const FooterSocial = () => {
  return (
    <FooterSocialIcons>
      <h3>Social Media</h3>
      <ul>
        <li>
          <a href="http://google.com">
            <FontAwesomeIcon icon={faTwitter} /> <span> @FrieslandSchool</span>
          </a>
        </li>
        <li>
          <a href="http://google.com">
            <FontAwesomeIcon icon={faTwitter} /> <span> @FrieslandDrama</span>
          </a>
        </li>
        <li>
          <a href="http://google.com">
            <FontAwesomeIcon icon={faFacebook} /> <span> Friesland School</span>
          </a>
        </li>
        <li>
          <a href="http://google.com">
            <FontAwesomeIcon icon={faFacebook} />{" "}
            <span> Friesland Sixth Form</span>
          </a>
        </li>
      </ul>
    </FooterSocialIcons>
  )
}

export default FooterSocial
