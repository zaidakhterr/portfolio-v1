import React from "react"
import facebook from "../images/socialIcons/facebook.svg"
import { socialLinks } from "../config"

const SocialLinks = () => {
  return (
    <div className="social">
      {socialLinks.map(social => (
        <a href={social.url} target="_blank" className="icon">
          <img
            alt={social.name}
            src={require(`../images/socialIcons/${social.name.toLowerCase()}.svg`)}
          />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
