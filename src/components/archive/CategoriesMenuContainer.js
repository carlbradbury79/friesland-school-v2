import React from "react"
import { animated } from "react-spring"
import styled from "styled-components"
import { Link } from "gatsby"

const CategoryMenu = styled(animated.div)`
  position: absolute;
  z-index: 30;
  top: 50px;
  left: 0;
  right: 0;
  margin: auto;
  width: calc(100vw- 20px);
  height: auto;
  background: #fff;
  border: 1px solid var(--primary);
  ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    li {
      margin: 0.5rem;
      a {
        background: var(--primary);
        color: #fff;
        padding: 5px;
        line-height: 1.6;
      }
    }
  }
`

const CategoriesMenuContainer = ({ style, categories }) => {
  return (
    <CategoryMenu style={style}>
      <ul>
        {categories.edges.map(category => {
          return (
            category.node.count !== 0 && (
              <li key={category.node.id}>
                <Link to={`/blog/${category.node.slug}`}>
                  {category.node.name}
                </Link>
              </li>
            )
          )
        })}
      </ul>
    </CategoryMenu>
  )
}

export default CategoriesMenuContainer
