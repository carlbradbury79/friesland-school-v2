import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const MenuItems = () => {
  const { wpMenu } = useStaticQuery(graphql`
    {
      wpMenu(id: { eq: "TWVudToyNw==" }) {
        name
        id
        menuId
        slug
        menuItems {
          nodes {
            url
            label
            childItems {
              nodes {
                label
                url
              }
            }
          }
        }
      }
    }
  `)
  return wpMenu
}

export default MenuItems
