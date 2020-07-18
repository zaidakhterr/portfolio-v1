import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container-fluid">
      <h1>Home</h1>
    </div>
  </Layout>
)

export default IndexPage
