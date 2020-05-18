import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Gram from "./Instagram"
import Modal from "./Modal"
import { useTransition } from "react-spring"
import InstaOverlay from "./InstaOverlay"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { Waypoint } from "react-waypoint"
import { useSpring, config, animated } from "react-spring"

// Location of Serverless function "getInstagramPosts"
const url = ".netlify/functions/getInstagramPosts"

const StyledInstaSection = styled(animated.div)`
  margin: 0 0 5rem 0;
`

// Instagram Container
const GramContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: 50;
  margin-bottom: 2rem;
  padding: 10px;

  @media (max-width: 400px) {
    width: 100%;
  }
`
const InstaIcon = styled.div`
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 0rem;
  padding: 1rem;

  a {
    font-family: "Cormorant Garamond", serif;
    font-size: 32px;
    font-weight: 600;
  }
  h2 {
    margin: 0;

    a {
      color: var(--primary);
      font-size: 4rem;
    }
  }
`

// Get Instagram Posts
function useInstagram() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPosts(data)
      })
  }, [])
  console.log(posts)
  return posts
}

const InstagramContainer = () => {
  const gramz = useInstagram()

  // The currently selected instagram photo object
  const [gramForModal, setGramForModel] = useState(false)

  // Is the modal visible
  const [modalVisible, setModalVisible] = useState(false)

  // Animation
  const transitions = useTransition(modalVisible, null, {
    from: { opacity: 0, transform: "translateY(-40px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(-40px)" },
  })

  // Get the clicked instagram photo and set gramForModal
  function getGram(id) {
    const newGram = gramz.filter(g => {
      console.log("getGram", id, g.id)
      return g.id === id
    })
    console.log("newGram", newGram)
    setGramForModel(newGram)
    console.log("state", gramForModal)
    setModalVisible(true)
  }

  const [isInstaVisible, toggleInstaVisible] = useState(false)
  const visibleInstaAnimation = useSpring({
    opacity: isInstaVisible ? 1 : 0,
    transform: isInstaVisible
      ? "translate3d(0,0px,0)"
      : "translate3d(0,150px,0)",
    config: config.molasses,
  })

  console.log(gramz)

  return (
    <StyledInstaSection style={visibleInstaAnimation}>
      <Waypoint
        bottomOffset="20%"
        onEnter={() => (isInstaVisible ? null : toggleInstaVisible(true))}
      />
      <InstaIcon>
        <h2>
          <a href="https://twitter.com/frieslandschool">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </h2>
        <a href="https://google.com">FrieslandSchool</a>
      </InstaIcon>
      <GramContainer>
        {gramz.map(gram => (
          <Gram
            key={gram.id}
            bg={gram.thumbnail}
            // onClick={() => setModalVisible(true)}
            // onClick={() => getGram(gram.id)}
            getGram={getGram}
            gram={gram}
          />
        ))}
      </GramContainer>

      {/* Display Modal */}
      {transitions.map(
        ({ item, key, props: style }) =>
          item && (
            <Modal
              style={style}
              closeModal={() => setModalVisible(false)}
              key={key}
              gram={gramForModal}
            />
          )
      )}

      {/* Modal visibility controls the overlay */}
      {modalVisible && <InstaOverlay />}
    </StyledInstaSection>
  )
}

export default InstagramContainer
