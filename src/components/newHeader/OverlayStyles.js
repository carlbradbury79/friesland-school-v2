import styled from "styled-components"
import { animated } from "react-spring"

export const OverlayMenu = styled(animated.nav)`
  background: var(--primary);
  color: var(--light-shade);
  position: fixed;
  top: 86px;
  left: 0;
  bottom: 0;
  /* height: 80%; */
  width: 100vw;
  z-index: 100;
  overflow-y: scroll;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  padding: 20px;

  @media (max-width: 430px) {
    position: fixed;
    top: 80px;
  }

  @media (max-width: 366px) {
    top: 74px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  ul {
    text-align: center;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 0;
    padding: 0;
    position: static;
  }

  ul li {
    padding: 1rem 40px;
    border-top: 1px solid var(--light-shade-alpha);
  }

  ul li:last-child {
    border-bottom: 1px solid var(--light-shade-alpha);
    margin-bottom: 20px;
  }

  ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
  }
  h2 {
    margin-bottom: 1rem;
    color: #fff;
    font-family: "Open Sans", sans-serif;
  }
`
