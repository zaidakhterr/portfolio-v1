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
          technologies={["React", "Redux", "Firebase", "Stripe"]}
          description="An e-commerce site with clean responsive design where you can Sign In using your Google Account, Add items to cart and checkout using Stripe."
          githubLink="https://github.com/zaidakhterr/crown-clothing"
          siteLink="https://crown-clothing-app.herokuapp.com"
        />
        <Project
          title="Face Detector App"
          image={images.files.nodes[1].childImageSharp.fluid}
          technologies={[
            "React",
            "Redux",
            "Clarifai API",
            "Express",
            "JWT",
            "MongoDB",
          ]}
          description="An App that allows you to detect multiple faces in a picture. An express server handles user sign in and Clarifai's Face Detection API detects faces in the images."
          githubLink="https://github.com/zaidakhterr/face-detection-app"
        />
      </div>
    </>
  )
}

export default Work
