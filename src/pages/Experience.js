import React from 'react';

// import images
import Img from '../assets/img/flex-removebg-preview.png';

const Experience = () => {
    return (
        <section className='mb-12 lg:mb-24'>
            <div className='container mx-auto'>
                <div className='flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row'>
                    <div className='flex-1 flex space-x-6 items-center lg:space-x-12'>
                        {/* images */}
                        <div className='self-center' data-aos='fade-up'>
                            <img src={Img} alt='' />
                        </div>
                    </div>
                    {/* text */}
                    <div
                        className='flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0'
                        data-aos='fade-left'
                        data-aos-offset='400'
                    >
                        <h2 className='text-3xl font-bold mb-4'>
                            Knowledge sharing
                        </h2>
                        <p className='font-secondary mb-4'>
                            Knowledge might be power, but it’s much more powerful when it’s shared! If only one person knows how to do something,
                            that prevents others from developing and can hinder your organisation’s progress.
                        </p>
                        <p className='font-secondary mb-4'>
                            Plus, what happens if they hoard knowledge and decide to leave!? But that’s enough doom and gloom because when you manage knowledge
                            properly and give people a platform to share and access it, you’re opening the door to a whole host of benefits! Software development
                            is such a challenging field that it’s almost impossible to succeed in it without having some sort of support system.
                        </p>
                        <p className='font-secondary mb-4'>
                            With the many popular languages, frameworks, tools, and libraries available, having someone who can guide or mentor you will significantly increase your chances of success in this field.
                        </p>

                        <button className='btn'>Get it now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
