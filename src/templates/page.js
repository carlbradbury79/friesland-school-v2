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
import { Helmet } from "react-helmet"
// import Img from "gatsby-image"
// import { SpareImage } from "../components/utils/SpareFeaturedImage"
// import TicketSource from "../components/utils/TicketSource"

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
    font-size: 2em;
    font-weight: bold;
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
  // console.log("page", data)
  let allParents = []

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

  console.log("AP", allParents)

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
    })()`}
          </script>
        )}
      </Helmet>
      {data.currentPage.featuredImage &&
      data.currentPage.featuredImage.node.remoteFile ? (
        <div style={{ height: "400px", marginBottom: "2rem" }}>
          <StyledPageHeaderImage
            image={
              data.currentPage.featuredImage.node.remoteFile.childImageSharp
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
      )}
      {console.log("child?", data.currentPage)}
      <SectionSelector currentPage={data.currentPage} />
      {/* <img fluid={spareImage} /> */}
      {/* {console.log("spare", SpareImage)} */}
      <PageContent>
        {/* TOTO FIX PAGE BREADCRUMB QUERY */}
        {/* {console.log("BC", data.currentPage.parent)} */}

        {/* <BreadCrumb parent={data.currentPage.ancestors ? allParents : null} /> */}

        <div dangerouslySetInnerHTML={{ __html: data.currentPage.content }} />
        {/* {data.currentPage.title === "Tickets" && <TicketSource />} */}
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
      children {
        ... on WpPage {
          id
          title
          slug
        }
      }
      parent {
        ... on WpPage {
          id
          slug
          title
        }
      }
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
