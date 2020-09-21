import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { FooterLinkStyle } from "./footerStyles"
import { getSlug } from "../utils/get-slug"

const FooterLinks = () => {
  const footerLinksMenu = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "footerlinksmenu" }) {
        id
        name
        slug
        menuItems {
          nodes {
            label
            url
          }
        }
      }
    }
  `)
  const footerLinksMenuItems = footerLinksMenu.wpMenu.menuItems.nodes
  return (
    <FooterLinkStyle>
      <h3>Links</h3>
      <ul>
        {footerLinksMenuItems.map(item => {
          const url = getSlug(item.url)
          return (
            <li key={item.url}>
              <Link to={`/${url}`}>
                <span dangerouslySetInnerHTML={{ __html: item.label }} />
              </Link>
            </li>
          )
        })}
      </ul>
    </FooterLinkStyle>
  )
}

export default FooterLinks
