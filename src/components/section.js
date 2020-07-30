import "./sections/sections.scss"

import React from "react"
import Hero from "./sections/hero"
import Work from "./sections/work"
import Blog from "./sections/blog"
import Contact from "./sections/contact"
import About from "./sections/about"

const Section = ({ fluid = false, full = false, section, id }) => {
  let renderSection = null

  switch (section) {
    case "hero":
      renderSection = <Hero />
      break
    case "projects":
      renderSection = <Work />
      break
    case "blog":
      renderSection = <Blog />
      break
    case "about":
      renderSection = <About />
      break
    case "contact":
      renderSection = <Contact />
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
