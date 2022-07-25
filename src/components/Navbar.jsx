import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='hidden lg:flex'>
            <ul className='flex items-center space-x-12 font-secondary'>
                <li className='nav-link'>
                    <Link to="/">Home</Link>
                </li>
                <li className='nav-link'>
                    <Link to="/resources ">Resources</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar