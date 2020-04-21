import styled from "styled-components"
import { Link } from "gatsby"

export const WholeHeader = styled.header`
  position: sticky;
  top: 0px;
  z-index: 150;
  background: #fff;
`

export const HeaderTopContainer = styled.div`
  background: #004c97;
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
    @media (max-width: 360px) {
      font-size: 0.7rem;
    }
  }
  div span a {
    color: var(--light-shade);
  }
`

export const StyledHeaderBottom = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  border-bottom: 1px solid #c6d1db;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul li {
    margin-left: 10px;
  }
  ul li a {
    font-family: "Lato";
    text-decoration: none;
    font-size: 22px;
  }

  .twitterIcon {
    @media (max-width: 600px) {
      display: none;
    }
  }
`

export const LogoContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  text-decoration: none;
  :hover {
    text-decoration: none;
  }

  h1 {
    margin: 0;
    padding: 0;
    font-family: "Cormarant Garamond", serif;
    font-weight: 600;
  }

  h1 {
    @media (max-width: 430px) {
      font-size: 1.6rem;
    }

    @media (max-width: 366px) {
      font-size: 1.2rem;
    }
  }
`
