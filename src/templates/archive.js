/* eslint-disable react/no-danger */
import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import ArchiveSidebar from '../components/archive/ArchiveSidebar';
// import BreadCrumb from '../components/BreadCrumb';
// import Pagination from '../components/archive/Pagination';
// import PageHero from '../components/PageHero';

import styled from "styled-components"

const PageContent = styled.article`
  margin: 20px 0 0 0;
`

const StyledH2 = styled.h2`
  font-weight: 500;
  font-size: 1.8rem;
  :hover {
    color: #d22e26;
  }
`

const StyledDate = styled.div`
  font-family: "Teko";
  font-size: 1.1rem;
  font-weight: 600;
`

const StyledReadMore = styled(Link)`
  font-family: "Teko", Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 800;
  color: #fff;
  position: relative;
  width: 70px;
  height: 30px;
  display: block;
  background: #000;
  padding: 3px 0 0 10px;
  margin-bottom: 30px;

  :after {
    left: 100%;
    top: 50%;
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-left-color: #000;
    border-width: 15px;
    margin-top: -15px;
  }

  :hover {
    background: #d22e26;
  }

  :hover:after {
    border-left-color: #d22e26;
  }
`

const archiveTemplate = ({
  data: { file, allWordpressPost },
  pageContext: {
    catId,
    catName,
    catSlug,
    categories,
    humanPageNumber,
    numberOfPages,
  },
}) => (
  <Layout>
    {/* <PageHero img={file.childImageSharp.fluid} /> */}
    {/* <BreadCrumb
      parent={{
        link: "/trends/alla-trendspaningar",
        title: "trends",
      }}
    /> */}

    <div className="container">
      <div className="row" style={{ marginBottom: "40px" }}>
        {/* <ArchiveSidebar catId={catId} categories={categories} /> */}
        <PageContent className="col-lg-9">
          {/* <Pagination
            catSlug={catSlug}
            page={humanPageNumber}
            totalPages={numberOfPages}
          /> */}
          <h1 dangerouslySetInnerHTML={{ __html: catName }} />
          {allWordpressPost.edges.map(post => (
            <article key={post.node.id} className="entry-content">
              <Link to={`/${post.node.path}/`}>
                <StyledH2
                  dangerouslySetInnerHTML={{ __html: post.node.title }}
                />
              </Link>
              <StyledDate
                dangerouslySetInnerHTML={{
                  __html: post.node.date.replace(/\W+/g, " "),
                }}
              />
              <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
              <StyledReadMore to={`/${post.node.path}`}>
                Read More
              </StyledReadMore>
              <div className="dot_divider">
                <hr />
              </div>
            </article>
          ))}
          {/* <Pagination
            catSlug={catSlug}
            page={humanPageNumber}
            totalPages={numberOfPages}
          /> */}
        </PageContent>
      </div>
    </div>
  </Layout>
)

export default archiveTemplate

export const pageQuery = graphql`
  query($catId: String!, $skip: Int!, $limit: Int!) {
    allWordpressPost(
      filter: { categories: { elemMatch: { id: { eq: $catId } } } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          excerpt
          slug
          date(formatString: "DD, MMM, YYYY")
          path
        }
      }
    }
    file(relativePath: { eq: "archive_headerImage.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 4000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
