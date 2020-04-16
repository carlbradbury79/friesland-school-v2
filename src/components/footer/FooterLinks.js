import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { FooterLinkStyle } from "./footerStyles"

const FooterLinks = () => {
  const footerLinksMenu = useStaticQuery(graphql`
    query footerLinksQuery {
      allWordpressWpApiMenusMenusItems(
        filter: { name: { eq: "footerLinksMenu" } }
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
  // console.log(footerLinksMenu)
  const footerLinksMenuItems =
    footerLinksMenu.allWordpressWpApiMenusMenusItems.edges[0].node.items

  return (
    <FooterLinkStyle>
      <h3>Links</h3>
      <ul>
        {footerLinksMenuItems.map(item => {
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

export default FooterLinks
