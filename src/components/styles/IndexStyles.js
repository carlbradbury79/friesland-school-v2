import styled from "styled-components"
import { animated } from "react-spring"

export const StyledHomeHeading = styled.h2`
  /* Todo needs syncing with Events, News, Twitter and Insta */
  margin-top: 4rem;
  margin-bottom: 4rem;
  font-family: "Cormorant Garamond", serif;
  font-size: var(--h2Size);
  font-weight: 600;
  text-align: center;

  /* Don't forget links for Twitter and Insta */
`

export const StyledHomeCard = styled.div`
  box-shadow: var(--level-1);
  text-decoration: none;

  p {
    padding: 10px;
    font-size: 0.8rem;
    margin: 0;
    font-weight: 600;
  }
  h3 {
    margin: 0;
    padding: 10px;
    font-size: 1.2rem;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    :hover {
      color: #000;
    }
  }
`
export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
  }
  div {
    height: 400px;
    flex: 1;
  }
`

export const Welcome = styled(animated.h1)`
  text-align: center;
  user-select: true;
  font-size: 2rem;
  font-weight: bold;
  margin: 1.3rem 0;
  line-height: 1.5;
`

export const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "100%",
    maxWidth: "600px",
  },
  overlay: { zIndex: "1000" },
}

export const ModalCloseDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ModalButton = styled.button`
  border: none;
  color: black;
  margin: 0;
  :hover {
    background-color: #fff;
  }
`
