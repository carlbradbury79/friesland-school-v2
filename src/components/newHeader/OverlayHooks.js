import React from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import MenuItems from "../nav/MenuItems"
import { OverlayMenu } from "./OverlayStyles"
import { getSlug } from "../utils/get-slug"

const Overlay = ({ style }) => {
  const wpMenu = MenuItems()
  // console.log("menu", wpMenu)
  return (
    <OverlayMenu style={style}>
      <ul>
        {wpMenu.map((item, i) => {
          const url = getSlug(item.url)
          return (
            <li key={i}>
              <Link to={`/${url}`}>{item.title}</Link>

              {item.children.length > 0 ? (
                <>
                  <ul>
                    {item.children.map((child, iChild) => {
                      const url = getSlug(child.url)
                      return (
                        <li key={iChild}>
                          <Link to={`/${url}`}>{child.title}</Link>
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
