import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const Article = ({ article }) => {
  console.log(article)
  return (
    <a href={article.url} target="_blank" rel="nofollow noopener noreferrer">
      <div className="article">
        <img src={article.cover_image} alt={article.title} />
        <h3>{article.title}</h3>
        {article.tags.map(tag => (
          <span className="tag">{tag}</span>
        ))}
        <p>{article.description}</p>
      </div>
    </a>
  )
}

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
      {data.allDevArticles.nodes.map(node => (
        <Article article={node.article} />
      ))}
    </>
  )
}

export default Blog
