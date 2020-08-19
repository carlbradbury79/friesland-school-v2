import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Subjects = styled.div`
  padding: 10px;
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
    padding: 1rem;
    li {
      margin: 7px 3px;
      a {
        padding: 5px;
        background-color: var(--primary);
        color: #fff;
      }
    }
  }
`

const SectionSelector = ({ currentPage }) => {
  console.log("selection", currentPage)

  if (
    currentPage.title === "Curriculum" ||
    currentPage.title === "Sixth Form" ||
    currentPage.title === "Parent Information" ||
    currentPage.title === "Curriculum: Subjects"
  ) {
    return (
      <Subjects>
        <ul>
          {currentPage.childPages.nodes.map(subject => {
            return (
              <li key={subject.id}>
                <Link to={`/${subject.slug}`}>{subject.title}</Link>
              </li>
            )
          })}
        </ul>
      </Subjects>
    )
  } else {
    return null
  }
}

export default SectionSelector
