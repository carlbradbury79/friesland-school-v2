import React from "react"
import styled from "styled-components"

const HamburgerToggle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;

  .hamburger-line {
    width: 30px;
    height: 3px;
    background: var(--dark-shade);
  }

  @media (min-width: 991px) {
    display: none;
  }
`

const Hamburger = ({ handleOverlayMenu }) => {
  return (
    <HamburgerToggle onClick={handleOverlayMenu}>
      <div className="hamburger-line" />
      <div className="hamburger-line" />
      <div className="hamburger-line" />
    </HamburgerToggle>
  )
}

export default Hamburger
