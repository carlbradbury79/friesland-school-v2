import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
// import PageSidebar from "../components/page/PageSidebar"
// import BreadCrumb from "../components/BreadCrumb"
// import PageHero from "../components/PageHero"

const PageContent = styled.article`
  margin: 20px 0 0 0;
`

const pageTemplate = ({ data }) => (
  <Layout>
    {/* {data.currentPage.featured_media ? (
      <PageHero
        img={data.currentPage.featured_media.localFile.childImageSharp.fluid}
      />
    ) : null} */}

    {/* <BreadCrumb parent={data.parent} /> */}

    <div className="container">
      <div className="row">
        {/* <PageSidebar
          parentChildren={data.parentChildren}
          currentPage={data.currentPage}
          parent={data.parent}
          className="col-lg-3"
        >
          {data.children}
        </PageSidebar> */}
        <PageContent className="col-lg-9">
          <h1 dangerouslySetInnerHTML={{ __html: data.currentPage.title }} />
          <div dangerouslySetInnerHTML={{ __html: data.currentPage.content }} />
        </PageContent>
      </div>
    </div>
  </Layout>
)

export default pageTemplate

export const pageQuery = graphql`
  query($id: String!) {
    currentPage: wordpressPage(id: { eq: $id }) {
      id
      title
      content
      wordpress_parent
    }
  }
`
