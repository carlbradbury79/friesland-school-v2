import React from "react"
import styled from "styled-components"

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 60;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.8);
`

const InstaOverlay = () => {
  return <Overlay></Overlay>
}

export default InstaOverlay
