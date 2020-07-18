import React, { useState } from "react"
import { Link } from "gatsby"

import Logo from "../images/zaidakhterr.svg"
import { useWindowDimensions } from "../hooks/useWindowDimensions"

const HeaderDesktop = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/#hero">
          <img src={Logo} alt="zaidakhterr" height="20px" />
        </Link>
        <nav className="nav nav-desktop">
          <ul>
            <li>
              <Link to="/#work">Work</Link>
            </li>
            <li>
              <Link to="/#experience">Experience</Link>
            </li>
            <li>
              <Link to="/#skills">Skills</Link>
            </li>
            <li>
              <Link to="/#blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

const HeaderMobile = () => {
  const [isOpen, setIsOpened] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <Link to="/#hero">
          <img src={Logo} alt="zaidakhterr" height="20px" />
        </Link>
        <nav className={`nav nav-mobile ${isOpen ? "open" : ""}`}>
          <ul>
            <li onClick={() => setIsOpened(isOpen => !isOpen)}>
              <Link to="/#work">Work</Link>
            </li>
            <li onClick={() => setIsOpened(isOpen => !isOpen)}>
              <Link to="/#experience">Experience</Link>
            </li>
            <li onClick={() => setIsOpened(isOpen => !isOpen)}>
              <Link to="/#skills">Skills</Link>
            </li>
            <li onClick={() => setIsOpened(isOpen => !isOpen)}>
              <Link to="/#blogs">Blogs</Link>
            </li>
            <li onClick={() => setIsOpened(isOpen => !isOpen)}>
              <Link to="/#contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <button
          className="dropdown"
          onClick={() => setIsOpened(isOpen => !isOpen)}
        >
          <span className={`icon ${isOpen ? "open" : ""}`}></span>
        </button>
      </div>

      {isOpen && (
        <div
          className="nav-overlay"
          onClick={() => setIsOpened(isOpen => !isOpen)}
        />
      )}
    </header>
  )
}

const Header = () => {
  const { width } = useWindowDimensions()
  const isMobile = width < 760

  return isMobile ? <HeaderMobile /> : <HeaderDesktop />
}

export default Header
