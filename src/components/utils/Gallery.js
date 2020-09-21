import React, { useState } from "react"
import { Helmet } from "react-helmet"

// import styled from "styled-components"

// const GalleryContainer = styled.div`
//   max-width: 750px;
//   margin: auto;
// `
// const CurrentImage = styled.div`
//   img {
//     width: 100%;
//   }
// `

// const ImageGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   grid-gap: 5px;
// `

const Gallery = () => {
  const [curIm, setIm] = useState({
    src:
      "https://res.cloudinary.com/frieslandschool/image/upload/v1600720184/Lettings/football-pitch_2_b14eqn.jpg",
    alt: "5G Football Field",
  })

  function imgClick(e) {
    console.log(e)
    e.preventDefault()
    setIm({ src: e.target.src, alt: e.target.alt })
  }

  return (
    <div className="galleryContainer">
      <div id="current">
        <img src={curIm.src} alt={curIm.alt} />
      </div>
      <div className="imgs">
        <img
          onClick={imgClick}
          src="https://res.cloudinary.com/frieslandschool/image/upload/v1600720184/Lettings/football-pitch_2_b14eqn.jpg"
          alt="5G Football Field"
        />
        <img
          onClick={imgClick}
          onKeyDown={imgClick}
          src="https://res.cloudinary.com/frieslandschool/image/upload/v1588601667/Lettings/Performing-Arts-Lettings-Mar2017-2_1_ep0eds.jpg"
          alt="Performing Arts Classroom"
        />
        <img
          onClick={imgClick}
          onKeyDown={imgClick}
          src="https://res.cloudinary.com/frieslandschool/image/upload/v1588601666/Lettings/letting-11_aez0gn.jpg"
          alt="The Gym"
        />
        <img
          onClick={imgClick}
          onKeyDown={imgClick}
          src="https://res.cloudinary.com/frieslandschool/image/upload/v1588601666/Lettings/letting-10_jrilmi.jpg"
          alt="Sports Centre Gym"
        />
        <img
          onClick={imgClick}
          onKeyDown={imgClick}
          src="https://res.cloudinary.com/frieslandschool/image/upload/v1588601666/Lettings/letting-8_tcavzc.jpg"
          alt="School Hall"
        />
        <img
          onClick={imgClick}
          onKeyDown={imgClick}
          src="https://res.cloudinary.com/frieslandschool/image/upload/v1588601666/Lettings/letting-6_tltbns.jpg"
          alt="Theatre with chairs set out"
        />

        <img
          onClick={imgClick}
          onKeyDown={imgClick}
          src="https://res.cloudinary.com/frieslandschool/image/upload/v1588601665/Lettings/letting-4_jy0zxc.jpg"
          alt="Theatre with chairs put away"
        />
        <img
          onClick={imgClick}
          onKeyDown={imgClick}
          src="https://res.cloudinary.com/frieslandschool/image/upload/v1588601666/Lettings/letting-5_ovzl8j.jpg"
          alt="Theatre with chairs put away"
        />
      </div>
    </div>
  )
}

export default Gallery
