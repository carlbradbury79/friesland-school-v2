import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const Arrow = styled.div`
  position: fixed;
  bottom: 50px;
  /* left: 100px; */
  height: 40px;
  width: 50px;
  left: 50%;
  margin-left: -25px;
  text-align: center;
  font-size: 50px;
`

const MoreArrow = () => {
  return (
    <Arrow>
      <FontAwesomeIcon icon={faAngleDown} />
    </Arrow>
  )
}

export default MoreArrow
