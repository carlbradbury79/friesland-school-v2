import React from "react"
import Logo from "./Logo"
import Hamburger from "./Hamburger"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { fab } from "@fortawesome/free-brands-svg-icons"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import NavDropdown from "./NavDropdown"

import {
  WholeHeader,
  HeaderTopContainer,
  StyledHeaderBottom,
  LogoContainer,
} from "./HeaderStyles"

const Header = ({ handleOverlayMenu }) => {
  return (
    <WholeHeader>
      <HeaderTopContainer>
        <div>
          <FontAwesomeIcon icon={faEnvelope} />
          {/* <span>enquires@friesland.derbyshire.sch.uk</span> */}
          <span>
            <a href="mailto:enquiries@friesland.derbyshire.sch.uk">
              enquiries@friesland.derbyshire.sch.uk
            </a>{" "}
          </span>
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} />
          <span>
            <a href="tel:+44-115-9397326">0115 9397326</a>
          </span>
        </div>
      </HeaderTopContainer>
      <StyledHeaderBottom>
        <LogoContainer to="/">
          <Logo /> <h1>FRIESLAND SCHOOL</h1>
        </LogoContainer>

        <ul>
          <li>
            <NavDropdown />
          </li>
          <li>
            <Hamburger handleOverlayMenu={handleOverlayMenu} />
          </li>
        </ul>
      </StyledHeaderBottom>
    </WholeHeader>
  )
}

export default Header
