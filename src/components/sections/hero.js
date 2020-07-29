import React from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"

const Hero = () => {
  return (
    <>
      <Fade top>
        <h1>Hi, my name is</h1>
      </Fade>
      <Fade left duration={1200} distance="128px">
        <h2>Zaid Akhter.</h2>
        <h3>I create things for the web.</h3>
      </Fade>
      <Fade distance="128px">
        <p>
          I'm a Fullstack Developer from Karachi, PK who builds eye-catching and
          blazing-fast websites using modern web technologies.
        </p>
      </Fade>
      <Fade bottom>
        <div className="btn-group">
          <Link to="/#projects">
            <button className="btn btn-primary">View My Work</button>
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <button className="btn">View My Resume</button>
          </a>
        </div>
      </Fade>
    </>
  )
}

export default Hero
