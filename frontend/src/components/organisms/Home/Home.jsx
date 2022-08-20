import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import ButtonWithIcon from '../../atoms/ButtonWithIcon'
import PostsCard from '../../molecules/postsCard'
import Image from 'next/image'

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
    <>
      {' '}
      {loadedProducts.length > 0 ? (
        <section className="home">
          {isLoading && <p>Loading...</p>}
          {!isLoading &&
            loadedProducts.map((item) => (
              <PostsCard key={item._id} blogItem={item} />
            ))}
        </section>
      ) : (
        <div className="no-data-wrapper">
          <div className="no-data-image">
            <Image src="/noData.svg" layout="fill" />
          </div>
          <h2>No Any blogs Added yet. Click + button to add</h2>
        </div>
      )}
      <ButtonWithIcon
        clickHandler={clickHandler}
        addClasses="add-button"
        iconPath="/create.svg"
      />
    </>
  )
}
export default Home
