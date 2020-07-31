import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const About = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "me" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <div className="section-heading">
        <h2>About Me</h2>
        <span></span>
      </div>
      <div className="content">
        <div className="text-container">
          <p>
            Hi, My name is Zaid Akhter and I am a Web developer from Karachi,
            PK.
          </p>
          <p>
            I enjoy creating things with code and my goal with any project is to
            create a responsive and performant user experience.
          </p>
          <p>
            I am currently enrolled in{" "}
            <span>
              <a href="https://www.neduet.edu.pk/">NED University</a>
            </span>
            . I am also working as a developer at{" "}
            <span>
              <a href="http://www.zenveus.com/">Zenveus</a>
            </span>{" "}
            where I work on a wide range of real-world projects on a daily
            basis.
          </p>
          <p>Here are a few technologies I have worked with recently:</p>
          <ul>
            <li>HTML & (S)CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Redux</li>
            <li>Gatsby</li>
            <li>Next.js</li>
            <li>Node.js</li>
            <li>AWS</li>
          </ul>
        </div>
        <div className="image-container">
          <Img fluid={data.file.childImageSharp.fluid} alt="Zaid Akhter" />
        </div>
      </div>
    </>
  )
}

export default About
