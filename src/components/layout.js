import "./layout.scss"

import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="page">
        <main className="main">{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
