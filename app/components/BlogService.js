import React from 'react'

const BlogService = (blogEl) => {
    const {id, title, body} = blogEl
  return (
    <div className=' bg-gray-500 border border-5 rounded-md'>
        <h5 className='text-lg font-bold text-green-500'>{title}</h5>
        <p className='text-sm font-normal text-indigo-800 '>{body}</p>
    </div>
  )
}

export default BlogService