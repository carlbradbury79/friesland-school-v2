import styled from "styled-components"
// import { animated } from "react-spring"

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
