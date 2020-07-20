import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Fade from "react-reveal/Fade"

const LinkIcon = () => (
  <svg
    className="link"
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="external-link-alt"
    class="svg-inline--fa fa-external-link-alt fa-w-16"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path
      fill="currentColor"
      d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
    ></path>
  </svg>
)

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
      <Fade left>
        <>
          <div className="section-heading">
            <h2>Blog</h2>
            <span></span>
          </div>
          <p className="section-description">
            I love to write and share with others what I have learnt.
          </p>
        </>
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
