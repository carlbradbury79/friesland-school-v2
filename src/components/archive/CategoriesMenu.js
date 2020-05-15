import React, { useState } from "react"
import { useSpring } from "react-spring"
import CategoriesMenuContainer from "./CategoriesMenuContainer"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown, faMinus } from "@fortawesome/free-solid-svg-icons"

const Categories = styled.div`
  position: relative;
  text-align: center;
`

const CategoryChoice = styled.button`
  max-width: 100px;
  display: inline-block;
  border: none;
  background: none;
  :hover {
    cursor: pointer;
  }

  :active {
    border: none;
  }
`

const CategoriesMenu = ({ categories }) => {
  // console.log("cat", categories)
  const [isCategoryMenuVisible, setCategoryMenuVisible] = useState(false)
  const categoryMenuAnimation = useSpring({
    transform: isCategoryMenuVisible ? `translateX(0)` : `translateX(-150%)`,
    // opacity: isCategoryMenuVisible ? 1 : 0,
  })
  return (
    <Categories>
      <CategoryChoice
        onClick={() => setCategoryMenuVisible(!isCategoryMenuVisible)}
      >
        <span>Category </span>
        {isCategoryMenuVisible ? (
          <FontAwesomeIcon icon={faMinus} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </CategoryChoice>
      <CategoriesMenuContainer
        style={categoryMenuAnimation}
        categories={categories}
      />
    </Categories>
  )
}

export default CategoriesMenu
