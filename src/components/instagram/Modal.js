import React from "react"
import { animated } from "react-spring"
import styled from "styled-components"
import OutsideClickHandler from "react-outside-click-handler"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import anchorme from "anchorme"

const InstaModal = styled(animated.div)`
  /* height: 100%; */
  color: gray;
  background: #fff;
  padding: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  position: fixed;
  z-index: 90;
  top: calc(10%);
  left: calc(50% - 350px);
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  align-items: center;

  @media (max-width: 800px) {
    left: 10px;
    right: 10px;
    top: 10px;
    bottom: 10px;
    padding: 1rem;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    grid-template-columns: 300px 300px;
    column-gap: 10px;

    .insta-text p a {
      text-decoration: none;
    }

    @media (max-width: 600px) {
      grid-template-columns: 300px;
    }
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
  .modal-close-button {
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
    border: 2px solid #fff;
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
          <div className="grid">
            <img src={gram[0].thumbnail} />
            <div className="insta-text">
              <h5 className="modal-title">
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
          </div>
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
