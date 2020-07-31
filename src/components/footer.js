import React from "react"
import SocialLinks from "./socialLinks"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <SocialLinks />
        <p>
          Built with{" "}
          <span role="img" aria-label="Heart">
            💖
          </span>{" "}
          by Zaid Akhter.
        </p>
      </div>
    </footer>
  )
}

export default Footer
