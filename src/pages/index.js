import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section id="hero" section="hero" fluid full />
    <Section id="contact" section="hero" fluid full />
  </Layout>
)

export default IndexPage
