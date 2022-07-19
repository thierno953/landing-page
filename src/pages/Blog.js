import React from 'react';

const dataLinks = [
    {
        title: 'Online App',
        description:
            'Start with free programming and coding education app. An interactive way to learn & practice programming online. Improve coding skills to advance in your education and career.',
        link: "https://openclassrooms.com/en/"
    },
    {
        title: 'Boot Camps',
        description:
            "Boot camps are a way to go from novice to expert in just a few months. They cost several thousand dollars or more and require full-time attendance, but there's no better way to ramp up quickly.",
        link: "https://becode.org/learn/junior-web-developer/"
    },
    {
        title: 'Podcasts',
        description:
            'Sadly, the space here is pretty sparse, but not enough to write it off completely. Only two podcasts are producing regular content and have been around for a while.',
        link: "https://javascriptjabber.com/"
    },
    {
        title: 'User Groups',
        description:
            'One of the best ways to learn is to associate with others who are just as passionate. Many developers have demonstrated their commitment to learning by spending their free time to improve themselves.',
        link: "https://dev.to/htnguy/top-10-discord-servers-for-developers-559o"
    },
    {
        title: 'People',
        description:
            "There are many personalities in the industry doing a lot of great work. Finding people you admire who are doing work you're interested in and following them is a mark of someone interested in learning.",
        link: "https://twitter.com/paul_irish"
    },
    {
        title: 'Stack Overflow',
        description:
            'Hands down this is the best place to learn things and get issues solved. In combination with one of the aforementioned online coding tools, you can find a solution for just about any problem here.',
        link: "https://stackoverflow.com/"
    },
];

const Blog = () => {
    return (
        <section className='py-12 lg:py-24'>
            <div className='container mx-auto flex flex-col items-start justify-center '>
                {/* title */}
                <h2
                    className='text-3xl font-bold mb-6'
                    data-aos='fade-down'
                    data-aos-offset='300'
                >
                    Skill up everyday
                </h2>
                <p className='font-secondary mb-4'
                    data-aos='fade-left'
                    data-aos-offset='350'
                >
                    Being a developer today just might be one of the coolest jobs in the universe. It's like being a painter during
                    the Renaissance or an astronaut during the Space Race. As web developers we are not only witnessing,
                    but participating in daily revolutions in technology. The landscape is radically changing and inventions
                    and discoveries are happening at an ever increasing pace. Because of this, there's almost no stability,
                    which means that there are more opportunities than there are people to take advantage of them.
                    It's not exactly a bad problem to have, but it also means that we can't afford to stop learning. So,
                    to help you stay on top of your game, I've rounded up some essential learning resources web development.
                </p>
                {/* grid */}
                <div className='grid gap-y-4 lg:grid-cols-3 lg:gap-9'>
                    {
                        dataLinks.map((item, index) => (
                            <div
                                key={index}
                                className='relative'
                                data-aos='zoom-in'
                                data-aos-offset='300'
                                data-aos-delay='1200'
                            >
                                <div className='bg-purple-400/10 backdrop-blur-md p-6'>
                                    <h4 className='font-semibold text-xl mb-2'>{item.title}</h4>
                                    <p>{item.description}</p>
                                    <a href={item.link} target="_blank">
                                        Check it out  <i className="fa-solid fa-arrow-right-long icon"></i>
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;
