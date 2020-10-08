import React from "react"
// import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons"

import { FooterSocialIcons } from "./footerStyles"

const FooterSocial = () => {
  return (
    <FooterSocialIcons>
      <h3>Social Media</h3>
      <ul>
        <li>
          <a href="https://twitter.com/FrieslandSchool">
            <FontAwesomeIcon icon={faTwitter} /> <span> @FrieslandSchool</span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/FrieslandDrama">
            <FontAwesomeIcon icon={faTwitter} /> <span> @FrieslandDrama</span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/FrieslandHire">
            <FontAwesomeIcon icon={faTwitter} /> <span> @FrieslandHire</span>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/FrieslandPta">
            <FontAwesomeIcon icon={faTwitter} /> <span> @FrieslandPta</span>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/user/frieslandschool/videos">
            <FontAwesomeIcon icon={faYoutube} /> <span> Friesland School</span>
          </a>
        </li>
        {/* <li>
          <a href="http://google.com">
            <FontAwesomeIcon icon={faFacebook} /> <span> Friesland School</span>
          </a>
        </li> */}
        {/* <li>
          <a href="https://www.facebook.com/pages/category/School/Friesland-Sixth-Form-218985671467360/">
            <FontAwesomeIcon icon={faFacebook} />{" "}
            <span> Friesland Sixth Form</span>
          </a>
        </li> */}
      </ul>
    </FooterSocialIcons>
  )
}

export default FooterSocial
