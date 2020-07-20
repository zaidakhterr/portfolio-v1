import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const Article = ({ article }) => {
  console.log(article)
  return (
    <a href={article.url} target="_blank" rel="nofollow noopener noreferrer">
      <div className="article">
        <h3>{article.title}</h3>
        <div className="tag-list">
          {article.tags.map(tag => (
            <span className="tag">{tag}</span>
          ))}
        </div>
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
          }
        }
      }
    }
  `)

  return (
    <>
      <h2>Blog</h2>
      <p>I love to write and share with others what I have learnt.</p>
      <div className="article-list">
        {data.allDevArticles.nodes.map(node => (
          <Article article={node.article} />
        ))}
      </div>
    </>
  )
}

export default Blog
