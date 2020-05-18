import React from "react"
import styled, { keyframes } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

const fadeIn = keyframes`
from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

const StyledGram = styled.div`
  background: url(${props => props.bg});
  background-size: cover;
  position: relative;
  height: calc(100vw / 5);
  flex-basis: 20%;

  @media (max-width: 800px) {
    flex-basis: 50%;
    height: calc(100vw / 2);
  }

  div {
    position: absolute;
    padding: 1rem;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 50px;
    background: rgba(33, 79, 149, 0.8);
    opacity: 0;
    overflow: hidden;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    p {
      color: #fff;
    }
  }
  :hover div {
    opacity: 1;
    animation: ${fadeIn} 0.3s linear;
    cursor: pointer;
  }
`

const Gram = ({ gram, getGram }) => {
  return (
    <StyledGram onClick={() => getGram(gram.id)} bg={gram.thumbnail}>
      <div>
        <FontAwesomeIcon icon={faInstagram} />
        <p
          dangerouslySetInnerHTML={{
            __html:
              gram.caption.length > 150
                ? gram.caption.slice(0, 100) + "..."
                : gram.caption,
          }}
        ></p>
      </div>
    </StyledGram>
  )
}

export default Gram
