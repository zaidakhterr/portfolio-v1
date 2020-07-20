import "./sections/sections.scss"

import React from "react"
import Hero from "./sections/hero"
import Work from "./sections/work"
import Blog from "./sections/blog"

const Section = ({ fluid = false, full = false, section, id }) => {
  let renderSection = null

  switch (section) {
    case "hero":
      renderSection = <Hero />
      break
    case "work":
      renderSection = <Work />
      break
    case "blog":
      renderSection = <Blog />
      break

    default:
      break
  }

  return (
    <div
      id={id}
      className={`section ${full ? "full" : ""} ${
        fluid ? "container-fluid" : "container"
      }`}
    >
      {renderSection}
    </div>
  )
}

export default Section
