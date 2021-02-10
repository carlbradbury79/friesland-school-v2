import styled from "styled-components"
import { animated } from "react-spring"

export const StyledTwitterFeed = styled(animated.div)`
  /* margin: 0 0 5rem 0;
  border-bottom: 0.5rem solid var(--primary); */
`

export const TwitterIcon = styled.div`
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 0rem;
  padding: 1rem;

  a {
    font-family: "Cormorant Garamond", serif;
    /* font-size: 32px; */
    font-size: var(--h3Size);
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
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1 1 150px; */
  height: 100%;
  display: grid;
  grid-gap: 1rem;
  padding: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  @media (max-width: 600px) {
    padding: 1rem;
    margin: 0.5rem;
    flex-direction: column;
    align-items: center;
  }
`

export const TweetBox = styled.div`
  flex: 1;
  height: 100%;
  color: var(--textColor);
  padding: 10px;
  margin: 1rem 0rem;
  line-height: 1.8;
  background: #fff;
  font-family: "Open Sans", sans-serif;
  box-shadow: var(--level-1);

  @media (max-width: 600px) {
    margin: 1rem 0;
    text-align: center;
    /* flex: 1 1 150px; */
  }
  p {
    /* color: var(--primary); */
    color: var(--textColor);
  }

  span {
    /* font-size: 0.8rem; */
    font-size: calc(var(--h5Size) - 5px);
    font-weight: 600;
    color: #000;
    /* font-family: "Cormorant Garamond", serif; */
  }

  a {
    text-decoration: none;
    color: var(--textColor);
    border-bottom: 2px solid var(--primary);
  }
`
export const TwitterImages = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  margin-bottom: 1rem;
`
