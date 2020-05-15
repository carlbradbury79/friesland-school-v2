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

// TODO sort child pages

const SectionSelector = ({ data }) => {
  console.log("selection", data.children)

  if (
    data.currentPage.title === "Curriculum" ||
    data.currentPage.title === "Sixth Form" ||
    data.currentPage.title === "Parent Information"
  ) {
    return (
      <Subjects>
        <ul>
          {data.children.edges.map(subject => {
            return (
              <li key={subject.node.id}>
                <Link to={`/${subject.node.slug}`}>{subject.node.title}</Link>
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
