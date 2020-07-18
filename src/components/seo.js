import React from "react"
import { Helmet } from "react-helmet"
import config from "../config"
import ogImage from "../images/og.png"

function SEO() {
  return (
    <Helmet
      htmlAttributes={{
        lang: `en`,
      }}
      title={config.siteTitle}
      meta={[
        {
          name: `description`,
          content: config.siteDescription,
        },
        {
          name: `keywords`,
          content: config.siteKeywords,
        },
        {
          property: `og:title`,
          content: config.siteTitle,
        },
        {
          property: `og:description`,
          content: config.siteDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:url`,
          content: config.siteUrl,
        },
        {
          property: `og:site_name`,
          content: config.siteTitle,
        },
        {
          property: `og:image`,
          content: `${config.siteUrl}${ogImage}`,
        },
        {
          property: "og:image:width",
          content: "1200",
        },
        {
          property: "og:image:height",
          content: "630",
        },
        {
          property: "og:image:type",
          content: "image/png",
        },
        {
          property: "og:locale",
          content: config.siteLanguage,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          property: `twitter:url`,
          content: config.siteUrl,
        },
        {
          name: `twitter:site`,
          content: config.twitterHandle,
        },
        {
          name: `twitter:creator`,
          content: config.twitterHandle,
        },
        {
          name: `twitter:title`,
          content: config.siteTitle,
        },
        {
          name: `twitter:description`,
          content: config.siteDescription,
        },
        {
          property: `twitter:image`,
          content: `${config.siteUrl}${ogImage}`,
        },
        {
          property: `twitter:image:alt`,
          content: config.siteTitle,
        },
      ]}
    />
  )
}

export default SEO
