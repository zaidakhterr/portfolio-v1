import { Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO />
    <div
      className="container"
      style={{
        height: "calc(100vh - 56px - 120px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        style={{
          fontSize: "min(4rem, calc(2.5rem + 1vw))",
          marginBottom: "1rem",
        }}
      >
        <span style={{ color: "#323330" }}>404</span> NOT FOUND
      </h1>
      <p
        style={{
          marginBottom: "2rem",
        }}
      >
        You just hit a route that doesn&#39;t exist... the sadness.
      </p>
      <Link to="/">
        <button className="btn">Go home</button>
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
