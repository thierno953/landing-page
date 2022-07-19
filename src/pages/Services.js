import React from 'react';

// import components
import ServicesSlider from '../components/ServicesSlider';


const Services = () => {
    return (
        <section className='mb-36 lg:mb-28'>
            <div className='container mx-auto'>
                <div className='bg-purple-400/10 max-h-[100%] p-3 rounded-lg'>
                    <div>
                        <h2
                            className='text-3xl font-bold mb-6'
                            data-aos='fade-up'
                            data-aos-offset='300'
                            data-aos-delay='1100'
                        >
                            Start where you are, use what you have, and do what you can.
                        </h2>
                        <p
                            className='mb-5 lg:mb-10'
                            data-aos='fade-up'
                            data-aos-offset='300'
                            data-aos-delay='1200'
                        >
                            One of the important skills you need to learn as a Self-taught developer is to be resourceful,
                            my father taught me this skill when I was still very young, and I didn’t know it would take me far in life,
                            and I want you to do the same
                        </p>
                        <h3 className='text-xl font-bold mb-6'
                            data-aos='fade-up'
                            data-aos-offset='300'
                            data-aos-delay='1100'>
                            Having the ability to find clever ways to overcome difficulties.
                        </h3>
                        <p
                            className='mb-5 lg:mb-10'
                            data-aos='fade-up'
                            data-aos-offset='300'
                            data-aos-delay='1200'
                        >
                            Here are some important resources that every developer needs to know. I am not affiliated with any of it, I am just using
                            them personally and would want to share it with you, especially to all Self-taught developer
                        </p>
                        <p
                            className='mb-5 lg:mb-10'
                            data-aos='fade-up'
                            data-aos-offset='300'
                            data-aos-delay='1200'
                        >
                            It is important for us developers to always be learning, to always be updated, and to continue to grow to become the best developer that we can be.
                            Junior developers nowadays are lucky to have a lot of resources available online, you just have to be patient enough to find them.
                            When I started four years ago, I didn’t even know any self-taught developer at that time, I didn’t know how to do it.
                            I didn’t even know if it was possible until I made myself one. So be resourceful and take advantage to all of it, you don’t have to spend so much just to learn,
                            to be honest, you just have to be smart and be resourceful.
                        </p>
                    </div>
                    {/* slider */}
                    <div data-aos='fade-up' data-aos-offset='300' data-aos-delay='1100'>
                        <ServicesSlider />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
