import React from 'react';
import { Link } from 'react-router-dom';

// import icons
import { IoClose } from 'react-icons/io5';

const NavMobile = ({ setNavMobile }) => {

  return (
    <nav className='lg:hidden bg-[#251f3f] w-full h-full'>

      <IoClose onClick={() => setNavMobile(false)} className="text-3xl absolute left-4 top-6 cursor-pointer" />

      <ul className='flex flex-col items-center justify-center space-y-8 h-full font-secondary'>
        <li className='text-lg'>
          <Link to="/" onClick={() => setNavMobile(false)}>Home</Link>
        </li>
        <li className='text-lg'>
          <Link to="/blog" onClick={() => setNavMobile(false)}>Blog</Link>
        </li>
      </ul>

    </nav>
  )
}

export default NavMobile
