import React from "react"

const TwitterPic = ({ src, getTwitterPic }) => {
  return (
    <img
      src={src}
      style={{ maxWidth: "100%", cursor: "pointer" }}
      onClick={getTwitterPic}
      alt=""
    />
  )
}

export default TwitterPic
