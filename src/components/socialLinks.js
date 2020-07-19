import React from "react"
import { socialLinks } from "../config"

const SocialLinks = () => {
  return (
    <div className="social">
      {socialLinks.map(social => (
        <a
          href={social.url}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="icon"
        >
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
