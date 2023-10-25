"use client"
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const page = () => {

    const [count, setCount] = useState(0);
    const handleIncrease = () => {
        setCount(count + 1)
    };
    const handleDecrease = () => {
        setCount(count - 1)
    };

  return (
        <>
            <Header />
           <h2 className='text-center text-4xl text-gray-700 font-bold mt-5'>Counter App</h2>
            <div className='mx-auto my-2 bg-gray-400 py-10 h-[300px] w-[600px]' >
                <h3 className=' text-4xl text-center text-indigo-600'>{count}</h3>
                <div className='my-10 mx-auto container flex justify-center items-center'>
                    <button onClick={handleIncrease} className='bg-green-800 mx-10 p-3 text-white rounded-md '>Increment</button>
                    <button onClick={handleDecrease} className='bg-red-800 mx-10 p-3 text-white rounded-md '>Decrement</button>
                </div>
            </div>
            {/* <Footer /> */}
        </>
  )
}

export default page