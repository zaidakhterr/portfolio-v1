import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section section="hero" fluid full />
    <Section section="hero" fluid />
  </Layout>
)

export default IndexPage
