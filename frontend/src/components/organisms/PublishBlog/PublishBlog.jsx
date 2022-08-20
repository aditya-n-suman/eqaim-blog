import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import ReactMarkdown from 'react-markdown'
import ButtonWithIcon from '../../atoms/ButtonWithIcon'
import HomeButton from '../../atoms/HomeButton'

const MdEditor = dynamic(() => import('react-markdown-editor-lite'), {
  ssr: false
})

const CreateBlog = () => {
  const [blogData, setBlogData] = useState('# [title]\n[body]')

  const renderHtml = (text) => {
    setBlogData(text)
    return <ReactMarkdown>{text}</ReactMarkdown>
  }

  const saveClickHandler = async () => {
    try {
      let hasError = false
      const title = blogData.split('\n')[0]
      const description = blogData.replace(title, '')
      const newPost = { title, description }
      const res = await fetch('http://localhost:5000/blog/create', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!res.ok) {
        hasError = true
      }
      const responseData = await res.json()

      if (hasError) {
        throw new Error(responseData.message)
      } else {
        alert(responseData.message)
        setBlogData('# [title]\n[body]')
      }
    } catch (error) {
      alert(error.message || 'Something went wrong')
    }
  }

  return (
    <>
      <div className="button-action-wrap">
        <HomeButton addClasses="clubbed" />
        <ButtonWithIcon
          addClasses="sidebar-button"
          clickHandler={saveClickHandler}
          iconPath="/save.svg"
        />
      </div>
      <MdEditor
        value={blogData}
        style={{ height: '500px' }}
        renderHTML={renderHtml}
        imageAccept=".jpg,.png"
      />
    </>
  )
}

export default CreateBlog
