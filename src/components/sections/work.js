import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"
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
    <Fade left={left} right={!left} distance="128px">
      <div className={`project ${left ? "left" : ""}`}>
        <div className="image-container">
          <Img fluid={image} alt={title} />
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
    </Fade>
  )
}

const Work = () => {
  const images = useStaticQuery(graphql`
    {
      files: allFile(
        filter: { relativeDirectory: { eq: "projects" } }
        sort: { fields: relativePath }
      ) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="section-heading">
        <Fade left>
          <h2>Projects</h2>
        </Fade>
        <span></span>
      </div>
      <Fade>
        <p style={{ marginBottom: 0 }} className="section-description">
          Here are some things I've built.
        </p>
      </Fade>
      <div className="projects">
        <Project
          title="E-Commerce Site"
          left
          image={images.files.nodes[0].childImageSharp.fluid}
          technologies={["react", "redux", "firebase"]}
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur animi architecto reprehenderit porro eligendi ipsum voluptas vitae consectetur fugiat excepturi!"
          githubLink="https://via.placeholder.com/150"
          siteLink=""
        />
        <Project
          title="E-Commerce Site"
          image={images.files.nodes[1].childImageSharp.fluid}
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
