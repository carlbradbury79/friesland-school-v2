import styled from "styled-components"
import { animated } from "react-spring"

export const StyledTwitterFeed = styled(animated.div)`
  margin: 0 0 5rem 0;
`

export const TwitterIcon = styled.div`
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 0rem;
  padding: 1rem;

  a {
    font-family: "Cormorant Garamond", serif;
    font-size: 32px;
    font-weight: 600;
  }
  h2 {
    margin: 0;

    a {
      color: var(--primary);
      font-size: 4rem;
    }
  }
`

export const TweetRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  background: #fff;

  @media (max-width: 600px) {
    flex-direction: column;
  }
  /* border: 1px solid var(--primary); */
`

export const TweetBox = styled.div`
  flex: 1;
  height: 100%;
  color: var(--primary);
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* text-align: center; */
  margin: 2rem 0px;
  line-height: 1.8;
  background: #fff;
  font-family: "Open Sans", sans-serif;

  @media (max-width: 600px) {
    margin: 1rem 0;
    text-align: center;
  }
  p {
    color: var(--primary);
  }

  span {
    font-size: 0.8rem;
    font-weight: 600;
    color: #000;
  }

  a {
    color: purple;
  }
`
