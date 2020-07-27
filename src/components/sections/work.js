import React from "react"
import GithubIcon from "./../icons/github.js"
import LinkIcon from "./../icons/link.js"

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
        <div className="tag-list">
          {technologies.map(t => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
        <div className="links">
          {githubLink && (
            <a href={githubLink}>
              <GithubIcon />
            </a>
          )}
          {siteLink && (
            <a href={siteLink}>
              <LinkIcon />
            </a>
          )}
        </div>
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
      <div className="projects">
        <Project
          title="E-Commerce Site"
          left
          image="https://via.placeholder.com/150"
          technologies={["react", "redux", "firebase"]}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur animi architecto reprehenderit porro eligendi ipsum voluptas vitae consectetur fugiat excepturi!"
          githubLink="https://via.placeholder.com/150"
          siteLink=""
        />
        <Project
          title="E-Commerce Site"
          image="https://via.placeholder.com/150"
          technologies={["react", "redux", "firebase", "smth"]}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur animi architecto reprehenderit porro eligendi ipsum voluptas vitae consectetur fugiat excepturi!"
          githubLink="https://via.placeholder.com/150"
          siteLink="https://via.placeholder.com/150"
        />
      </div>
    </>
  )
}

export default Work
