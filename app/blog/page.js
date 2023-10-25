import Header from '../components/Header';
import BlogService from '../components/blogService';

const page = async(blogEl) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json()

  return (
   <div >
      <Header />
      <div className='container rounded-md my-5 mx-auto'>
       
      {
        data.map( (item) =>{
          return <BlogService key = {item.id} {...item} />
        } )
      }
      </div>
   </div>
  )
}

export default page