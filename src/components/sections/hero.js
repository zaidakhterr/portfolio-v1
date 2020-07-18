import { Link } from "gatsby"
import React from "react"

const Hero = () => {
  return (
    <>
      <h1>Hi, my name is</h1>
      <h2>Zaid Akhter.</h2>
      <h3>I create things for the web.</h3>
      <p>
        I am a Fullstack Developer based in Karachi, K building eye-catching and
        blazing-fast websites using modern web technologies.
      </p>
      <div className="btn-group">
        <Link to="/#work">
          <button className="btn btn-primary">View My Work</button>
        </Link>
        <a href="">
          <button className="btn">View My Resume</button>
        </a>
      </div>
    </>
  )
}

export default Hero
