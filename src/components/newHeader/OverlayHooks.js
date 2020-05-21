import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import MenuItems from "../nav/MenuItems"
import { OverlayMenu } from "./OverlayStyles"
import { getSlug } from "../utils/get-slug"

const Overlay = ({ style }) => {
  const wpMenu = MenuItems()

  return (
    <OverlayMenu style={style}>
      <ul>
        {wpMenu.menuItems.nodes.map((item, i) => {
          const url = getSlug(item.url)
          return (
            <li key={i}>
              <Link to={`/${url}`}>{item.label}</Link>

              {item.childItems.nodes.length > 0 ? (
                <>
                  <ul>
                    {item.childItems.nodes.map((child, iChild) => {
                      const url = getSlug(child.url)
                      return (
                        <li key={iChild}>
                          <Link to={`/${url}`}>{child.label}</Link>
                        </li>
                      )
                    })}
                  </ul>
                </>
              ) : null}
            </li>
          )
        })}
      </ul>
    </OverlayMenu>
  )
}

export default Overlay
