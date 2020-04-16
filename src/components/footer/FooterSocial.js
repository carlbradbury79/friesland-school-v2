import React from "react"
// import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"

import { FooterSocialIcons } from "./footerStyles"

const FooterSocial = () => {
  return (
    <FooterSocialIcons>
      <ul>
        <li>
          <a href="http://google.com">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="http://google.com">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
      </ul>
    </FooterSocialIcons>
  )
}

export default FooterSocial
