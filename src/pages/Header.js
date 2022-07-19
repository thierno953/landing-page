import React from 'react';
import { Link } from 'react-router-dom';

// import components
import Logo from '../assets/img/thierno.jpg';
import Navbar from '../components/Navbar';

// import icons
import { HiMenu } from 'react-icons/hi';

const Header = ({ setNavMobile }) => {
    return (
        <header className='py-6'>
            <div className='container mx-auto'>
                <div className='flex items-center justify-between'>
                    <Link to="/">
                        <img className='h-[30px]' src={Logo} alt='' />
                    </Link>
                    {/* navbar */}
                    <Navbar />

                    {/* nav mobile btn */}
                    <HiMenu onClick={() => setNavMobile(true)} className="lg:hidden text-3xl text-white cursor-pointer" />
                </div>
            </div>
        </header>
    )
}

export default Header
