import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { fab } from "@fortawesome/free-brands-svg-icons"
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"

const HeaderTopContainer = styled.div`
  background: var(--dark-shade);
  color: var(--light-shade);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  font-family: "Lato";
  font-size: 0.8rem;

  div {
    display: flex;
    height: 100%;
    align-items: center;
  }

  div span {
    margin-left: 5px;
  }
  div span a {
    color: var(--light-shade);
  }
`

const HeaderTop = () => {
  return (
    <HeaderTopContainer>
      <div>
        <FontAwesomeIcon icon={faEnvelope} />
        <span>enquires@friesland.derbyshire.sch.uk</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faPhone} />
        <span>0115 9397326</span>
      </div>
    </HeaderTopContainer>
  )
}

export default HeaderTop
