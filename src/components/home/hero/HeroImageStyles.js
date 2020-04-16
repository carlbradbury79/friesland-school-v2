import styled from "styled-components"

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 20px;
  align-items: center;

  h1 {
    background-color: var(--primary);
    color: #fff;
    padding: 10px;
  }

  a {
    padding: 5px;
    background-color: #fff;
    border: var(--primary) 2px solid;
    margin-bottom: 10px;

    :hover {
      background-color: var(--primary);
      color: #fff;
    }
  }
`
