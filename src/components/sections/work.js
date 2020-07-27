import React from "react"

const Project = ({
  title,
  left = false,
  image,
  technologies,
  description,
  githubLink,
  siteLink,
}) => {
  return (
    <div className={`project ${left ? "left" : ""}`}>
      <div className="image-container">
        <img src={image} alt={title} />
      </div>
      <div className="content-container">
        <h3>{title}</h3>
        <p>{description}</p>
        {technologies.map(t => (
          <span key={t}>{t}</span>
        ))}
        {githubLink && <a href={githubLink}></a>}
        {siteLink && <a href={siteLink}></a>}
      </div>
    </div>
  )
}

const Work = () => {
  return (
    <>
      <div className="section-heading">
        <h2>Work</h2>
        <span></span>
      </div>
    </>
  )
}

export default Work
