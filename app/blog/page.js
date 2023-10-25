import React from 'react'
import Header from '../components/Header';

const page = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json()

  return (
   <>
      <Header />
      <div>Blog Page</div>
      {
        data.map( (item) =>{
          <h1>{item.title}</h1>
          // <p>{item.body}</p>
        } )
      }
   </>
  )
}

export default page