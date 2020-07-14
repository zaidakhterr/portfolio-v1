import React from "react"
import { Link } from "gatsby"

import Logo from "../images/zaidakhterr.svg"
import { useWindowDimensions } from "../hooks/useWindowDimensions"

const HeaderDesktop = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <img src={Logo} alt="zaidakhterr" height="20px" />
        </Link>
        <nav className="nav-desktop">
          <ul>
            <li>
              <Link to="#work">Work</Link>
            </li>
            <li>
              <Link to="#experience">Experience</Link>
            </li>
            <li>
              <Link to="#skills">Skills</Link>
            </li>
            <li>
              <Link to="#blogs">Blogs</Link>
            </li>
            <li>
              <Link to="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

const HeaderMobile = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <img src={Logo} alt="zaidakhterr" height="20px" />
          mobile
        </Link>
      </div>
    </header>
  )
}

const Header = () => {
  const { width } = useWindowDimensions()
  const isMobile = width < 760

  return isMobile ? <HeaderMobile /> : <HeaderDesktop />
}

export default Header
