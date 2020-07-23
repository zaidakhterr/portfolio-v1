import React, { useState } from "react"
import { Link } from "gatsby"
import Logo from "../images/zaidakhterr.svg"
import { useMediaQuery } from "react-responsive"
import { navLinks } from "../config"

const scrollToTop = () => {
  if (typeof window !== undefined) {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
}

const HeaderDesktop = () => {
  return (
    <header className="header header-desktop">
      <div className="container-fluid">
        <button onClick={scrollToTop}>
          <img src={Logo} alt="zaidakhterr" height="20px" />
        </button>
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
    <header className="header header-mobile">
      <div className="container-fluid">
        <button onClick={scrollToTop}>
          <img src={Logo} alt="zaidakhterr" height="20px" />
        </button>
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
  return (
    <>
      <HeaderMobile />
      <HeaderDesktop />
    </>
  )
}

export default Header
