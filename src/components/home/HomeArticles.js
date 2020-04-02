import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment } from "@fortawesome/free-solid-svg-icons"

const ArticlesList = styled.div`
  text-align: center;

  h3 {
    text-align: center;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  ul li {
    /* margin-bottom: 1rem; */
    padding: 1rem 40px;
  }

  ul li:last-child {
    /* border-bottom: 1px solid var(--light-shade); */
    margin-bottom: 3rem;
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
      allWordpressPost(limit: 4) {
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
      <h3>Latest News</h3>
      <ul>
        {Articles.allWordpressPost.edges.map(article => {
          console.log(article.node.title)
          return (
            <li key={article.node.id}>
              <Link to={article.node.path}>
                {/* {article.node.date} */}
                <FontAwesomeIcon icon={faComment} />
                <span> </span>
                {article.node.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </ArticlesList>
  )
}

export default HomeArticles
