import React from "react"
import { Link } from "gatsby"

import Logo from "../images/zaidakhterr.svg"

const Header = () => (
  <header className="header">
    <div className="container">
      <Link to="/">
        <img src={Logo} alt="zaidakhterr" height="24px" />
      </Link>
    </div>
  </header>
)

export default Header
