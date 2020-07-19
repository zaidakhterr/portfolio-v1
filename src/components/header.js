import React, { useState } from "react"
import { Link } from "gatsby"

import Logo from "../images/zaidakhterr.svg"
import { useWindowDimensions } from "../hooks/useWindowDimensions"
import { navLinks } from "../config"

const HeaderDesktop = () => {
  return (
    <header className="header">
      <div className="container-fluid">
        <Link to="/#">
          <img src={Logo} alt="zaidakhterr" height="20px" />
        </Link>
        <nav className="nav nav-desktop">
          <ul>
            {navLinks.map(link => (
              <li>
                <Link to={link.to}>{link.name}</Link>
              </li>
            ))}
            <li className="nav-btn">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Resume
              </a>
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
      <div className="container-fluid">
        <Link to="/#">
          <img src={Logo} alt="zaidakhterr" height="20px" />
        </Link>
        <nav className={`nav nav-mobile ${isOpen ? "open" : ""}`}>
          <ul>
            {navLinks.map(link => (
              <li>
                <Link
                  onClick={() => setIsOpened(isOpen => !isOpen)}
                  to={link.to}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="nav-btn">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                Resume
              </a>
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
