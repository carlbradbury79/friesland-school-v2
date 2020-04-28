/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./newHeader/Header"
// import "./layout.css"
import Footer from "./footer/Footer"
import { useSpring } from "react-spring"
import OverlayHooks from "./newHeader/OverlayHooks"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import { GlobalStyle } from "./styles/GlobalStyle"
config.autoAddCss = false

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [menuOpen, setMenuOpen] = useState(false)

  const displayMenuAnimation = useSpring({
    transform: menuOpen ? `translateY(0)` : `translateY(-200%)`,
  })

  const handleOverlayMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <GlobalStyle />
      <Header
        siteTitle={data.site.siteMetadata.title}
        handleOverlayMenu={handleOverlayMenu}
      />
      <OverlayHooks style={displayMenuAnimation} />
      <div>
        <main>{children}</main>

        <Footer />
        {/* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
