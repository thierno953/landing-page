import React from 'react';
import { Link } from 'react-router-dom';

// import image
import Img from '../assets/img/undraw_programming_re_kg9v.svg';

const Banner = () => {
    return (
        <section className='min-h-[600px] pt-24 pb-12 text-center relative lg:pt-40 lg:pb-0 lg:text-left'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row'>
                    {/* text */}
                    <div>
                        <h1
                            className='text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug'
                            data-aos='fade-down'
                            data-aos-delay='400'
                        >
                            List of useful resources <br /> made for all web developers.
                        </h1>
                        <p
                            className='font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0'
                            data-aos='fade-down'
                            data-aos-delay='500'
                        >
                            Let's share.
                            A place for programmers to share ideas and help each other grow. All developers are welcome to submit stories, tutorials, question.
                        </p>
                        {/* btns */}
                        <div
                            className='flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start'
                            data-aos='fade-down'
                            data-aos-delay='600'
                        >
                            <button className='btn'>Get it now</button>
                            <Link to='/' className='border-b-2 border-transparent hover:border-white transition ease-out'>
                                Explore Device
                            </Link>
                        </div>

                    </div>
                    {/* image */}
                    <div data-aos='fade-up' data-aos-delay='800'>
                        <img src={Img} alt='' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
