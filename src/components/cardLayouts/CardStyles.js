import styled from "styled-components"
import { animated } from "react-spring"
import { Link } from "gatsby"

export const LayoutSection = styled(animated.section)`
  /* margin: 2rem 0; */
  /* border-bottom: 0.5rem solid var(--primary); */

  h2 {
    margin-top: 4rem;
    margin-bottom: 4rem;
    font-family: "Cormorant Garamond", serif;
    /* font-size: 32px; */
    font-size: var(--h3Size);
    font-weight: 600;
    text-align: center;
  }
`

export const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.displayNumber}, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  padding: 0 40px;
  margin-bottom: 5rem;

  a {
    color: #004c97;
    :hover {
      text-decoration: underline;
    }
  }

  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    /* grid-template-columns: repeat(1, 1fr); */
    padding: 0 10px;
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
    /* display: none; */
  }
`
// Note extending the previous style didn't work
export const EventLayoutContainer = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  padding: 0 40px;
  margin-bottom: 5rem;
  /* grid-template-columns: repeat(4, 1fr); */
  /* grid-template-columns: repeat(auto-fill, 1fr); */
  grid-template-columns: repeat(${props => props.displayNumber}, 1fr);

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const SectionTitle = styled.h2`
  margin-top: 4rem;
  margin-bottom: 4rem;
  font-family: "Cormorant Garamond", serif;
  font-size: var(--h3Size);
  font-weight: 600;
  text-align: center;
`

export const SectionLink = styled(Link)`
  background: #fff;
  color: var(--primary);
  border: 2px solid var(--primary);
  padding: 10px 20px;
  display: block;
  margin: auto;
  width: 200px;
  text-align: center;
  margin-bottom: 4rem;
  :hover {
    background: var(--primary);
    color: #fff;
    border: 2px solid #fff;
    text-decoration: none;
  }
`
