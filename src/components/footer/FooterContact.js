import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { FooterLinkStyle } from "./footerStyles"

const FooterContact = () => {
  const footerContactMenu = useStaticQuery(graphql`
    query conactMenuQuery {
      allWordpressWpApiMenusMenusItems(
        filter: { name: { eq: "footerContactMenu" } }
      ) {
        totalCount
        edges {
          node {
            items {
              title
              wordpress_id
              object_slug
              wordpress_children {
                title
                url
                object_slug
              }
            }
            name
          }
        }
      }
    }
  `)
  const footerContactMenuItems =
    footerContactMenu.allWordpressWpApiMenusMenusItems.edges[0].node.items
  // console.log("fcm", footerContactMenuItems)
  return (
    <FooterLinkStyle>
      <h3>Keep In Touch</h3>
      <ul>
        {footerContactMenuItems.map(item => {
          return (
            <li key={item.wordpress_id}>
              <Link to={`/${item.object_slug}`}>{item.title}</Link>
            </li>
          )
        })}
      </ul>
    </FooterLinkStyle>
  )
}

export default FooterContact
