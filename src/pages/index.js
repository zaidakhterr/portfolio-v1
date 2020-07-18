import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section id="hero" section="hero" fluid full />
    <Section id="work" section="hero" fluid full />
    <Section id="experience" section="hero" fluid full />
    <Section id="skills" section="hero" fluid full />
    <Section id="blogs" section="hero" fluid full />
    <Section id="contact" section="hero" fluid />
  </Layout>
)

export default IndexPage
