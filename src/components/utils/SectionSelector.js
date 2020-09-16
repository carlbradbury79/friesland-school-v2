import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
// import AllPages from "./AllPages"
import { useStaticQuery, graphql } from "gatsby"

const Subjects = styled.div`
  padding: 10px;
  h4 {
    text-align: center;
  }
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
        font-size: 0.8rem;
      }
    }
  }
`

const SectionSelector = ({ currentPage }) => {
  const AllPages = useStaticQuery(graphql`
    query {
      allWpPage {
        nodes {
          id
          parentId
          title
          slug
        }
      }
    }
  `)

  const siblings = AllPages.allWpPage.nodes
    .filter(item => item.parentId === currentPage.parentId)
    .sort((a, b) => {
      if (a.title < b.title) {
        return -1
      } else if (a.title > b.title) {
        return 1
      } else {
        return 0
      }
    })

  const childPages = AllPages.allWpPage.nodes
    .filter(item => item.parentId === currentPage.id)
    .sort((a, b) => {
      if (a.title < b.title) {
        return -1
      } else if (a.title > b.title) {
        return 1
      } else {
        return 0
      }
    })

  return (
    <Subjects>
      {currentPage.title === "Curriculum" ||
      currentPage.title === "Sixth Form" ||
      currentPage.title === "Parent Information" ||
      currentPage.title === "Curriculum: Subjects" ||
      currentPage.title === "About Friesland" ||
      currentPage.title === "Contact" ? (
        <>
          <h4>{currentPage.title} Links</h4>
          <ul>
            {childPages.map(subject => {
              return (
                <li key={subject.id}>
                  <Link to={`/${subject.slug}`}>{subject.title}</Link>
                </li>
              )
            })}
          </ul>
        </>
      ) : null}

      {siblings.length > 0 && currentPage.ancestors ? (
        <>
          <h4>Related Pages</h4>
          <ul>
            {siblings.map(subject => {
              return (
                <li key={subject.id}>
                  <Link to={`/${subject.slug}`}>{subject.title}</Link>
                </li>
              )
            })}
          </ul>
        </>
      ) : null}
    </Subjects>
  )
  // } else {
  //   return null
  // }
}

export default SectionSelector
