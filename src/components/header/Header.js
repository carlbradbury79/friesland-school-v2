import React, { useState } from "react"
import HeaderTop from "./HeaderTop"
import HeaderBottom from "./HeaderBottom"
import Overlay from "../nav/Overlay"

import styled from "styled-components"

const WholeHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: #fff;
`

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const handleOverlayMenu = () => {
    console.log("click")
    setMenuOpen(!menuOpen)
    console.log(menuOpen)
  }
  return (
    <WholeHeader>
      <Overlay show={menuOpen} />
      <HeaderTop />
      <HeaderBottom handleOverlayMenu={handleOverlayMenu} show={menuOpen} />
    </WholeHeader>
  )
}

export default Header
