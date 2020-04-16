import React, { useState } from "react"
import styled from "styled-components"
import FeaturedNewsCard from "./FeaturedNewsCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

const NewsSlider = styled.div`
  display: none;
  @media (max-width: 480px) {
    display: block;
    position: relative;
  }
`

const Button = styled.button`
  position: absolute;
  top: calc(100% / 2);
  border: none;
  background: var(--light-shade-alpha);
  color: var(--dark-shade);
  height: 50px;
  width: 50px;
  font-size: 40px;
  padding: 0;
`

const Prev = styled(Button)`
  left: 0;
`

const Next = styled(Button)`
  right: 0;
`

const FeaturedNewsSlider = ({ post }) => {
  const [index, setIndex] = useState(0)

  const length = post.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const { node } = post[index]

  console.log("fns", post)
  console.log("node", node)

  return (
    <NewsSlider>
      <FeaturedNewsCard key={node.id} post={node} />
      <Prev onClick={() => handlePrevious()}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </Prev>
      <Next onClick={() => handleNext()}>
        <FontAwesomeIcon icon={faArrowRight} />
      </Next>
    </NewsSlider>
  )
}

export default FeaturedNewsSlider
