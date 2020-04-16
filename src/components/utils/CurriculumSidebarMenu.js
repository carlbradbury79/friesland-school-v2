import React from "react"
import { animated } from "react-spring"
import "./CurriculumSidebarStyle.css"

export const MenuRight = ({ style }) => (
  <animated.div className="menu menu--right" style={style}>
    <nav>
      <ul className="menu-list menu-list--right">
        <li className="menu-list-item menu-list-item--right">
          <a href="/">Home</a>
        </li>
        <li className="menu-list-item menu-list-item--right">
          <a href="/">About</a>
        </li>
        <li className="menu-list-item menu-list-item--right">
          <a href="/">Work</a>
        </li>
        <li className="menu-list-item menu-list-item--right">
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  </animated.div>
)
