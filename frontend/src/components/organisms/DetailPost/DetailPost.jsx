import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import HomeButton from '../../atoms/HomeButton'

const DetailPost = ({ id }) => {
  const [loadedProducts, setLoadedProducts] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      const response = await fetch(`http://localhost:5000/blog/${id}`)
      const responseData = await response.json()
      setLoadedProducts(responseData)
      setIsLoading(false)
    }

    fetchProducts()
  }, [])
  return (
    <>
      <HomeButton />
      {isLoading && <p>Loading...</p>}
      <article className="detail-post">
        {!isLoading && (
          <header>
            <ReactMarkdown className="detail-post-title">
              {loadedProducts?.title}
            </ReactMarkdown>
          </header>
        )}
        {!isLoading && (
          <ReactMarkdown className="detail-post-description">
            {loadedProducts?.description}
          </ReactMarkdown>
        )}
      </article>
    </>
  )
}

export default DetailPost
