import React from "react"
import Hero from "./sections/hero"

const Section = ({ fluid = false, full = false, section, id }) => {
  let renderSection = null

  switch (section) {
    case "hero":
      renderSection = <Hero />
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
