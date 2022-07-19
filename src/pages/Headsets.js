import React from 'react';

const Headsets = () => {

    return (
        <div className='bg-[#534686]/30 py-6'>
            <div className='container mx-auto'>
                <div className='flex flex-col justify-center items-center'>
                    <h3
                        className='text-2xl font-semibold mb-8 lg:mb-0'
                        data-aos='fade-right'
                        data-aos-offset='350'
                    >
                        Primary Objective
                    </h3>
                    <p className='font-secondary mt-3'
                        data-aos='fade-left'
                        data-aos-offset='350'
                    >
                        Our main goal is to become your daily tool to discover new resources and facilitate your professional growth as a developer.
                        We are convinced that everything starts from the dedication and pleasure of doing this job.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Headsets;
