import React from "react"
import { FooterLinkStyle } from "./footerStyles"

const FooterAddress = () => {
  return (
    <FooterLinkStyle>
      <h3>Friesland School</h3>
      <ul>
        <li>Nursery Avenue</li>
        <li>Sandiacre</li>
        <li>Nottingham</li>
        <li>NG10 5AF</li>
        <li>
          <a href="tel:+44-155-9397326">0115 9397326</a>
        </li>
      </ul>
    </FooterLinkStyle>
  )
}

export default FooterAddress
