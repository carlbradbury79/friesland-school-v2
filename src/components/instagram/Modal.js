import React from "react"
import { animated } from "react-spring"
import styled from "styled-components"
import OutsideClickHandler from "react-outside-click-handler"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import anchorme from "anchorme"

const InstaModal = styled(animated.div)`
  /* height: 500px; */
  color: gray;
  background: #fff;
  padding: 2rem;

  position: fixed;
  z-index: 900;
  top: 100px;
  left: calc(50% - 350px);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  align-items: center;

  @media (max-width: 800px) {
    left: 10px;
    right: 10px;
    top: 100px;
    bottom: 10px;
    padding: 1rem;
    margin: 0 auto;
  }
`

const ModalGrid = styled.div`
  display: grid;
  grid-template-columns: 300px 300px;
  column-gap: 10px;

  div p a {
    text-decoration: none;
  }

  div h5 {
    margin-top: 0;
  }

  @media (max-width: 600px) {
    grid-template-columns: 300px;
  }

  img {
    width: 100%;
  }
`

const InstaButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: space-between;
  width: 100%;

  @media (max-width: 420px) {
    flex-direction: column;
  }

  button {
    margin: 0;
  }
  .modal-close-button {
    font-family: "Open Sans", sans-serif;
    font-size: 1rem;
    margin: 0;
    background: #fff;
    color: var(--primary);
    border: 2px solid var(--primary);
    padding: 10px 20px;
    display: block;
    margin: auto;
    width: 250px;
    text-align: center;
    margin-bottom: 2rem;
    align-self: center;
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.1s linear;
  }

  .modal-close-button:hover,
  .modal-close-button:focus {
    background: var(--primary);
    color: #fff;
    /* border: 2px solid #fff; */
    text-decoration: none;
  }
`

const Modal = ({ style, closeModal, gram }) => {
  console.log("modalGram", gram[0])

  return (
    <>
      <OutsideClickHandler
        onOutsideClick={() => {
          closeModal()
        }}
      >
        <InstaModal style={style} className="modal">
          <ModalGrid>
            <img src={gram[0].thumbnail} alt="" />
            <div>
              <h5>
                <FontAwesomeIcon icon={faInstagram} /> Friesland School
              </h5>
              <p
                dangerouslySetInnerHTML={{
                  __html: anchorme({
                    input: gram[0].caption,
                    // use some options
                    options: {
                      attributes: {
                        target: "_blank",
                        class: "detected",
                      },
                    },
                    // and extensions
                    extensions: [
                      // an extension for hashtag search
                      {
                        test: /#(\w|_)+/gi,
                        transform: string =>
                          `<a href="https://www.instagram.com/explore/tags/${string.substr(
                            1
                          )}">${string}</a>`,
                      },
                      // an extension for mentions
                      {
                        test: /@(\w|_)+/gi,
                        transform: string =>
                          `<a href="https://www.instagram.com/${string.substr(
                            1
                          )}">${string}</a>`,
                      },
                    ],
                  }),
                }}
              />
            </div>
          </ModalGrid>
          <InstaButtons>
            <a className="modal-close-button" href={gram[0].url}>
              <FontAwesomeIcon icon={faInstagram} /> Read on Instagram
            </a>
            <button className="modal-close-button" onClick={closeModal}>
              Close
            </button>
          </InstaButtons>
        </InstaModal>
      </OutsideClickHandler>
    </>
  )
}

export default Modal
