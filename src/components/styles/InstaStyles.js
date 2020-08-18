import styled from "styled-components"
import { animated } from "react-spring"

export const StyledInstaSection = styled(animated.div)`
  margin: 0 0 5rem 0;
`

// Instagram Container
export const GramContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: 50;
  margin-bottom: 2rem;
  padding: 10px;

  @media (max-width: 400px) {
    width: 100%;
  }
`
export const InstaIcon = styled.div`
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
