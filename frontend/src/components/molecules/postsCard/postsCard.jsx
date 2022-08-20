import Link from 'next/link'
import React from 'react'
import ReactMarkdown from 'react-markdown'

const PostsCard = ({ blogItem }) => {
  const { _id, title, description } = blogItem

  return (
    <Link href={`/details/${_id}`}>
      <article className="posts-card">
        <ReactMarkdown>{title}</ReactMarkdown>
        <ReactMarkdown>{description.replace(/\n\n+/g, '\n')}</ReactMarkdown>
      </article>
    </Link>
  )
}

export default PostsCard
