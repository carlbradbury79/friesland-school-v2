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
import { Helmet } from "react-helmet"

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
      <Helmet>
        <script
          // Stop the fontawesome icons starting big
          src="https://use.fontawesome.com/releases/v5.13.0/js/all.js"
          data-auto-replace-svg
        ></script>
      </Helmet>
      <Header
        siteTitle={data.site.siteMetadata.title}
        handleOverlayMenu={handleOverlayMenu}
      />
      <OverlayHooks style={displayMenuAnimation} />
      <div>
        <main>{children}</main>

        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
