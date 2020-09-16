import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

const Share = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px auto;
  width: 60%;
  font-size: 1.1rem;

  @media (max-width: 600px) {
    width: 100%;
    padding: 10px;
    /* top: 20px; */
  }

  span {
    border-right: 1px solid #c0c0c0;
    padding: 5px 10px;
    color: #000;
  }
  a {
    color: #c0c0c0;
    padding: 5px 10px;
    margin: 0 10px;

    :hover {
      color: var(--primary);
    }
  }
`

const SocialShare = ({ title, link }) => {
  console.log("link", link)

  const twitterStart = "Check out this article about Friesland School: "
    .split(" ")
    .join("%20")
  const twitterTitle = title.split(" ").join("%20")

  return (
    <Share>
      <span>Share</span>
      <a
        href={`mailto:?subject=Check this article from Friesland School&body=Check out this article at http://frieslandschool.com/${link}`}
        title="Share by Email"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?text=${twitterStart}${twitterTitle}%20http://frieslandschool.com/${link}`}
        title="Share this page on Twitter"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=http://frieslandschool.com/${link}`}
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </Share>
  )
}

export default SocialShare
