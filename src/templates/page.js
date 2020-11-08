import React from "react"
import { graphql } from "gatsby"
import styled, { keyframes } from "styled-components"

import SectionSelector from "../components/utils/SectionSelector"
import Layout from "../components/layout"
// import Img from "gatsby-image"
import BreadCrumb from "../components/utils/BreadCrumb"
// import FeaturedImage from "../components/utils/FeaturedImage"
import StyledPageHeaderImage from "../components/utils/PageHeaderImage"
// import PageHero from "../components/PageHero"
import { Helmet } from "react-helmet"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

import Gallery from "../components/utils/Gallery"

const PageTitle = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  padding: 0 30px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  @media (max-width: 700px) {
    font-size: 2rem;
    height: 100%;
  }
  h1 {
    margin: 0;
    font-size: 2em;
    font-weight: bold;
    text-align: center;
  }
`

const PageHeaderWrapper = styled.div`
  height: 400px;
  margin-bottom: 2rem;

  @media (min-width: 800px) {
    height: 500px;
  }
`

const float = keyframes`
0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(-10px);
	}
	100% {
		transform: translatey(0px);
	}
`

const GoToStart = styled.a`
  display: block;
  text-align: center;
  font-size: 2rem;
  animation-name: ${float};
  animation-duration: 5s;
  animation-iteration-count: infinite;
`

const PageContent = styled.div`
  max-width: 800px;
  margin: auto;
  background: #fff;
  padding: 20px;

  img {
    margin: 0;
    max-width: 100%;
    /* border-radius: 10px; */
  }
`

const pageTemplate = ({ data }) => {
  let allParents = []
  // console.log(data)

  if (data.currentPage.ancestors) {
    allParents = data.currentPage.ancestors.nodes.map(ancestor => {
      return {
        slug: ancestor.slug,
        title: ancestor.slug
          .split("-")
          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" "),
      }
    })
  }

  return (
    <Layout>
      <Helmet>
        <title>Friesland School | {data.currentPage.title}</title>
        <meta property="og:title" content={data.currentPage.title} />
        <meta
          property="og:description"
          content={
            data.currentPage.meta.description &&
            data.currentPage.meta.description.length > 0
              ? data.currentPage.meta.description
              : "Frieslandschool.com"
          }
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/frieslandschool/image/upload/v1599168252/Logo/friesland-logo_uadh71.jpg"
        />
        <meta
          property="og:url"
          content={`http://frieslandschool.com/${data.currentPage.slug}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <script
          src="https://use.fontawesome.com/releases/v5.13.0/js/all.js"
          data-auto-replace-svg
        ></script> */}
        {data.currentPage.title === "Tickets" && (
          <script>
            {`(function() {
      var el = document.createElement("script")
      el.src = "https://www.ticketsource.co.uk/ticketshop/GMJJH"
      var s = document.getElementsByTagName("script")[0]
      s.parentNode.insertBefore(el, s)
    })()
    
    const current = document.querySelector("#current")
  const imgs = document.querySelectorAll(".imgs img")  
    
    `}
          </script>
        )}
      </Helmet>
      {data.currentPage.featuredImage &&
      data.currentPage.featuredImage.node.remoteFile ? (
        <PageHeaderWrapper>
          <StyledPageHeaderImage
            image={
              data.currentPage.featuredImage.node.remoteFile.childImageSharp
                .fluid
            }
          >
            {data.currentPage.title}
          </StyledPageHeaderImage>
        </PageHeaderWrapper>
      ) : (
        <PageTitle>
          <h1 dangerouslySetInnerHTML={{ __html: data.currentPage.title }} />
        </PageTitle>
      )}
      <GoToStart href="#start">
        <FontAwesomeIcon icon={faChevronDown} />
      </GoToStart>
      <SectionSelector currentPage={data.currentPage} />
      <a className="anchor" id="start"></a>

      {data.currentPage.title === "Lettings" && <Gallery />}
      
      
      <PageContent>
      {data.currentPage.wpParent && <BreadCrumb
          parent={[
            {
              slug: `/${data.currentPage.wpParent.node.slug}`,
              title: data.currentPage.wpParent.node.slug.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" "),
            },
          ]}
        />}
        <div dangerouslySetInnerHTML={{ __html: data.currentPage.content }} />
      </PageContent>
    </Layout>
  )
}

export default pageTemplate

// TODO Get child pages
export const pageQuery = graphql`
  query($id: String!) {
    currentPage: wpPage(id: { eq: $id }) {
      id
      title
      content
      slug
      parentId
      meta {
        description
      }
      featuredImage {
        node {
          remoteFile {
            childImageSharp {
              fluid(quality: 100, maxWidth: 4000) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
      ancestors {
        nodes {
          slug
        }
      }
      wpChildren {
        nodes {
          id
          slug
        }
      }
      wpParent {
        node {
          id
          slug
        }
      }
    }
  }
`
