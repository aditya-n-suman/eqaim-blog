import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ButtonWithIcon from '../../atoms/ButtonWithIcon'
import PostsCard from '../../molecules/postsCard'

const Home = () => {
  const router = useRouter()
  const [loadedProducts, setLoadedProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const clickHandler = () => {
    router.push('/create')
  }

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true)
      const response = await fetch('http://localhost:5000/blog/all')

      const responseData = await response.json()

      setLoadedProducts(responseData)
      setIsLoading(false)
    }

    fetchProducts()
  }, [])

  return (
    <section className="home">
      {isLoading && <p>Loading...</p>}
      {!isLoading &&
        loadedProducts.map((item) => (
          <PostsCard key={item._id} blogItem={item} />
        ))}
      <ButtonWithIcon
        clickHandler={clickHandler}
        addClasses="add-button"
        iconPath="/create.svg"
      />
    </section>
  )
}
export default Home
