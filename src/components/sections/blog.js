import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Fade from "react-reveal/Fade"
import LinkIcon from "../icons/link"

const Article = ({ article }) => {
  return (
    <a href={article.url} target="_blank" rel="nofollow noopener noreferrer">
      <div className="article">
        <LinkIcon />

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
      allDevArticles(
        sort: { fields: article___positive_reactions_count, order: DESC }
      ) {
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
      <div className="section-heading">
        <Fade left>
          <h2>Blog</h2>
        </Fade>
        <span></span>
      </div>
      <Fade>
        <p className="section-description">
          I love to write and share with others what I have learnt.
        </p>
      </Fade>
      <div className="article-list">
        {data.allDevArticles.nodes.map((node, i) => (
          <Fade bottom>
            <Article article={node.article} />
          </Fade>
        ))}
      </div>
    </>
  )
}

export default Blog
