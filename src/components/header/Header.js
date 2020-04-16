import React, { useState } from "react"
import HeaderTop from "./HeaderTop"
import HeaderBottom from "./HeaderBottom"
import Overlay from "../nav/OverlayHooks"
import { useSpring } from "react-spring"
import styled from "styled-components"

const WholeHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: #fff;
`

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const displayMenuAnimation = useSpring({
    opacity: menuOpen ? 1 : 0,
  })

  const handleOverlayMenu = () => {
    console.log("click")
    setMenuOpen(!menuOpen)
    console.log(menuOpen)
  }
  return (
    <WholeHeader>
      <Overlay style={displayMenuAnimation} />
      <HeaderTop />
      <HeaderBottom handleOverlayMenu={handleOverlayMenu} show={menuOpen} />
    </WholeHeader>
  )
}

export default Header
