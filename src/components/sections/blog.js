import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const Blog = () => {
  const data = useStaticQuery(graphql`
    {
      allDevArticles {
        nodes {
          article {
            title
            tags
            url
            description
            cover_image
          }
        }
      }
    }
  `)

  return (
    <>
      <h1>Blog</h1>
    </>
  )
}

export default Blog
