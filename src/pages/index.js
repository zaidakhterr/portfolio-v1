import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"

const IndexPage = () => (
  <Layout>
    <SEO />
    <Section id="hero" section="hero" full />
    <Section id="work" section="work" full />
    <Section id="blog" section="blog" />
    <Section id="contact" section="contact" />
  </Layout>
)

export default IndexPage
