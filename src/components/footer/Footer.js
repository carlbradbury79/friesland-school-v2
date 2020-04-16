import React from "react"
import FooterAddress from "./FooterAddress"
import FooterContact from "./FooterContact"
import FooterLinks from "./FooterLinks"
import FooterSocial from "./FooterSocial"

import { FooterContainer } from "./footerStyles"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterAddress />
      <FooterContact />
      <FooterLinks />
      <FooterSocial />
    </FooterContainer>
  )
}

export default Footer
