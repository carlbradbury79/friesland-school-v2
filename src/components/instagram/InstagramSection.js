import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Gram from "./Instagram"
import Modal from "./Modal"
import { useTransition } from "react-spring"
import InstaOverlay from "./InstaOverlay"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

// Location of Serverless function "getInstagramPosts"
const url = ".netlify/functions/getInstagramPosts"

// Instagram Container
const GramContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  z-index: 50;

  @media (max-width: 400px) {
    width: 100%;
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

  console.log(gramz)

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        <FontAwesomeIcon icon={faInstagram} /> Friesland School
      </h1>

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
    </>
  )
}

export default InstagramContainer
