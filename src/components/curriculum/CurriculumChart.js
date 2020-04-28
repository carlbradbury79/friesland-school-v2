import React from "react"
import styled from "styled-components"

const StyledCurriculumChart = styled.div`
  ul {
    list-style: none;

    li {
      border: 1px solid #000;
      display: flex;
      flex-direction: row;
      span {
        display: inline-block;
      }
    }
  }
`

const CurriculumChart = props => {
  console.log("cc", props)
  return (
    <StyledCurriculumChart>
      <h1>Y7 Curriculum</h1>
      <ul>
        {props.data.map(sub => {
          return (
            <li key={sub.subject}>
              <span>{sub.subject}</span>
              <span>{sub.number}</span>
            </li>
          )
        })}
      </ul>
    </StyledCurriculumChart>
  )
}

export default CurriculumChart
