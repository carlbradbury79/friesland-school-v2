import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { getSlug } from "../utils/get-slug"
import { FooterLinkStyle } from "./footerStyles"

const FooterContact = () => {
  const footerContactMenu = useStaticQuery(graphql`
    {
      wpMenu(slug: { eq: "footercontactmenu" }) {
        id
        name
        menuItems {
          nodes {
            id
            label
            url
          }
        }
      }
    }
  `)
  const footerContactMenuItems = footerContactMenu.wpMenu.menuItems.nodes
  // console.log("fcm", footerContactMenuItems)
  return (
    <FooterLinkStyle>
      <h3>Keep In Touch</h3>
      <ul>
        {footerContactMenuItems.map(item => {
          const url = getSlug(item.url)
          return (
            <li key={item.id}>
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

export default FooterContact
