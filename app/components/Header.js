import React from 'react';
import Link from 'next/link';
import styles from '@/app/styles/header.modules.css';

const Header = () => {
  return (
    <div className='mx-auto flex justify-center items-center gap-10 bg-indigo-700 py-5'> 
        <Link className='text-white text-center font-bold text-lg ' href="/">Home</Link>
        <Link className='text-white text-center font-bold text-lg' href="/contact">Contact</Link>
        <Link className='text-white text-center font-bold text-lg' href="/book">Book</Link>
        <Link className='text-white text-center font-bold text-lg' href="/counter">Counter</Link>
        <Link className='text-white text-center font-bold text-lg' href="/faq">FAQ</Link>
    </div>
  )
}

export default Header