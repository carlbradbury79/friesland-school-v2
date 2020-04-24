import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledLink = styled(Link)`
  padding: 5px;
  color: #fff;
  background-color: var(--primary-alpha);
  margin-bottom: 10px;

  :hover {
    color: #fff;
    text-decoration: underline;
  }
`

const HeroLink = ({ to, text }) => {
  return <StyledLink to={to}>{text}</StyledLink>
}

export default HeroLink
