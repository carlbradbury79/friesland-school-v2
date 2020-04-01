import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const ArticlesList = styled.div`
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  ul li {
    margin-bottom: 1rem;
  }

  ul li a {
    text-decoration: none;
    color: var(--light-shade);
  }

  @media (max-width: 400px) {
    text-align: center;
  }
`

const HomeArticles = () => {
  const Articles = useStaticQuery(graphql`
    query MyQuery {
      allWordpressPost(limit: 5) {
        edges {
          node {
            title
            content
            date(formatString: "DD/MM/YYYY")
            link
            path
            slug
            excerpt
            id
            wordpress_id
          }
        }
      }
    }
  `)
  console.log("articles", Articles.allWordpressPost.edges)
  return (
    <ArticlesList>
      <h3>Latest</h3>
      <ul>
        {Articles.allWordpressPost.edges.map(article => {
          console.log(article.node.title)
          return (
            <li key={article.node.id}>
              <Link to={article.node.path}>{article.node.title}</Link>
            </li>
          )
        })}
      </ul>
    </ArticlesList>
  )
}

export default HomeArticles
