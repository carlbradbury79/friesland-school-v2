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
import "./layout.css"
import Footer from "./footer/Footer"
import { useSpring } from "react-spring"
import OverlayHooks from "./newHeader/OverlayHooks"
// Stop font awesome size issues
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
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
  const [curriculumMenuOpen, setCurriculumMenuOpen] = useState(false)

  const displayMenuAnimation = useSpring({
    // opacity: menuOpen ? 1 : 0,
    transform: menuOpen ? `translateY(0)` : `translateY(-200%)`,
  })

  // const displayCurriculumMenuAnimation = useSpring({
  //   // opacity: menuOpen ? 1 : 0,
  //   transform: curriculumMenuOpen ? `translateY(0)` : `translateY(-200%)`,
  // })

  const handleOverlayMenu = () => {
    setMenuOpen(!menuOpen)
  }

  // const handleCurriculumMenu = () => {
  //   setCurriculumMenuOpen(!curriculumMenuOpen)
  // }

  return (
    <>
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
