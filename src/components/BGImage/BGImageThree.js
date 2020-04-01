import React from "react"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const CbyBackgroundSection = ({ className, fluid, children }) => {
  const Content = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  `

  const CbyBackgroundImage = styled(BackgroundImage)`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
  `
  return (
    <CbyBackgroundImage
      Tag="section"
      className={className}
      fluid={fluid}
      backgroundColor={`#040e18`}
    >
      <Content className={className}>{children}</Content>
    </CbyBackgroundImage>
  )
}

const CbyStyledBackgroundSection = styled(CbyBackgroundSection)`
  width: 100%;
  background-position: center -60px;
  background-repeat: repeat-y;
  background-size: cover;
`

export default CbyStyledBackgroundSection
