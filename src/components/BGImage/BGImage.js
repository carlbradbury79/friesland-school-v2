import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const BGWrapper = styled.div`
  position: relative;
`

const FakeBGImg = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ mobileHeight, height }) =>
    mobileHeight ? mobileHeight : height};
  z-index: 0;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    height: ${({ height }) => height || "auto"};
  }
`

const Content = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
`

const BGImage = ({
  fluid,
  title,
  height,
  mobileHeight,
  className,
  children,
}) => {
  return (
    <BGWrapper>
      <FakeBGImg
        fluid={fluid}
        title={title}
        height={height}
        mobileHeight={mobileHeight}
      />
      <Content className={className}>{children}</Content>
    </BGWrapper>
  )
}
export default BGImage
