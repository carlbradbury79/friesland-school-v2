import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import SectionSelector from "../components/utils/SectionSelector"
import Layout from "../components/layout"
// import Img from "gatsby-image"
// import PageSidebar from "../components/page/PageSidebar"
import BreadCrumb from "../components/utils/BreadCrumb"
// import FeaturedImage from "../components/utils/FeaturedImage"
import StyledPageHeaderImage from "../components/utils/PageHeaderImage"
// import PageHero from "../components/PageHero"
// import { Helmet } from "react-helmet"

const PageTitle = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  padding: 0 30px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  @media (max-width: 700px) {
    font-size: 2rem;
    height: 100%;
  }
  h1 {
    margin: 0;
  }
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
  console.log("page", data)

  return (
    <Layout>
      {/* <Helmet>
        <title>{data.currentPage.title}</title>
        <script
          src="https://use.fontawesome.com/releases/v5.13.0/js/all.js"
          data-auto-replace-svg
        ></script>
      </Helmet> */}
      {/* {data.currentPage.acf && data.currentPage.acf.image_for_page ? (
        <div style={{ height: "400px", marginBottom: "2rem" }}>
          <StyledPageHeaderImage
            image={
              data.currentPage.acf.image_for_page.localFile.childImageSharp
                .fluid
            }
          >
            {data.currentPage.title}
          </StyledPageHeaderImage>
        </div>
      ) : (
        <PageTitle>
          <h1 dangerouslySetInnerHTML={{ __html: data.currentPage.title }} />
        </PageTitle>
      )} */}

      {/* <SectionSelector data={data} /> */}
      <PageContent>
        {/* <BreadCrumb parent={data.parent} /> */}
        <div dangerouslySetInnerHTML={{ __html: data.currentPage.content }} />
      </PageContent>
    </Layout>
  )
}

export default pageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    currentPage: wpPage(id: { eq: $id }) {
      id
      title
      content
    }
  }
`

// export const pageQuery = graphql`
//   query($id: String!) {
//     currentPage: wpPage(id: { eq: $id }) {
//       id
//       title
//       content
//       wordpress_parent
//       parent_element {
//         title
//       }
//       acf {
//         image_for_page {
//           localFile {
//             childImageSharp {
//               fluid(quality: 100, maxWidth: 4000) {
//                 ...GatsbyImageSharpFluid_withWebp
//               }
//             }
//           }
//         }
//       }
//     }
//     parentChildren: pages(filter: { wordpress_parent: { eq: $parent } }) {
//       edges {
//         node {
//           id
//           title
//           link
//         }
//       }
//     }
//     children: pages(
//       filter: { wordpress_parent: { eq: $wpId } }
//       sort: { order: ASC, fields: title }
//     ) {
//       edges {
//         node {
//           id
//           title
//           link
//           slug
//         }
//       }
//     }
//     parent: page(wordpress_id: { eq: $parent }) {
//       title
//       link
//       slug
//     }
//   }
// `
