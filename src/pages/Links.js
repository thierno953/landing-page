import React from 'react';

const dataLinks = [
    {
        title: 'GitHub',
        description:
            'Github is supporting a community where more than 40 million people learn, share, and work together to build software. The GitHub Community Forum is a place where you can share ideas and follow discussions on topics that might interest you.',
        link: 'https://github.com/',
    },
    {
        title: 'Stack Overflow',
        description:
            'Stack Overflow is an open community for anyone that codes. They help you get answers to your toughest coding questions, share knowledge with your coworkers in private, and find your next dream job.',
        link: 'https://stackoverflow.com/',
    },
    {
        title: 'Hacker News',
        description:
            'Hacker News is a social news website focusing on computer science and entrepreneurship. As mentioned on their website, you can post anything that gratifies one’s intellectual curiosity. Share your stories and gain insights from other developers.',
        link: 'https://news.ycombinator.com/',
    },
    {
        title: 'Hackernoon',
        description:
            'Hackernoon is an Independent Tech Media Site. It is surfed by Technologists, Software Developers, Bitcoiners, and Blockchain Enthusiasts. There are a ton of stories about Software Engineering, coding languages, and security topics that will grab your attention.',
        link: 'https://hackernoon.com/',
    },
    {
        title: 'Hashnode',
        description:
            'Hashnode is a place to connect with the best developers from across the world. It helps devs solve real-life issues. You can publish stories and share them with the developer community or showcase your recent projects.',
        link: 'https://hashnode.com/',
    },
    {
        title: 'freeCodeCamp',
        description:
            'freeCodeCamp is a nonprofit community that helps you learn to code by building projects. Each month they help millions of people learn about coding and technology. They offer certifications that take around 300 hours of dedicated learning.',
        link: 'https://www.freecodecamp.org/',
    },
    {
        title: 'Women Who Code',
        description:
            'Women Who Code is one of the developer communities that is built to empower women in tech. You can find coding resources, Leadership opportunities, job vacancies, and events that can advance your technical skills through their global devs community.',
        link: 'https://www.womenwhocode.com/',
    },
    {
        title: 'Digital Ocean',
        description:
            'Digital Ocean is a platform where Developers are supporting developers. If you have questions, a big idea, or something to share, their community is designed to help you. They want the open-source community to thrive. There are a lot of tutorials and questions you can browse.',
        link: 'https://www.digitalocean.com/',
    },
    {
        title: 'CodeProject',
        description:
            'CodeProject is a one of the biggest developer communities with 14+ million Software Developers joined together with specific common goals: to learn, to teach, and to have fun. Members from all over the world come together to share code, tutorials and knowledge.',
        link: 'https://www.codeproject.com/',
    },
    {
        title: 'Reddit',
        description:
            'Reddit is home to thousands of communities, endless conversation, and authentic human connection. There are 130,000+ active communities or as Redditors called them “Subreddits” that you can follow. And of course, there are enormous subreddits for Developers.',
        link: 'https://www.reddit.com/',
    },
];

const Links = () => {
    return (
        <section className='py-12 lg:py-24'>
            <div className='container mx-auto'>
                {/* title */}
                <h2
                    className='text-3xl font-bold mb-6'
                    data-aos='fade-down'
                    data-aos-offset='300'
                >
                    Be a part of
                </h2>
                <p className='font-secondary mb-4'
                    data-aos='fade-right'
                    data-aos-offset='350'
                >
                    Communities help developers connect with others who share the same experience, failures,
                    and successes within the industry. Here is a list of some of the best online communities for software developers.
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
                                data-aos-delay='1100'
                            >
                                <div className='bg-purple-400/10 backdrop-blur-md p-6'>
                                    <h4 className='font-semibold text-xl mb-2'>{item.title}</h4>
                                    <p>{item.description}</p>
                                    <a href={item.link} target="_blank">
                                        Check it out <i className="fa-solid fa-arrow-right-long icon"></i>
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

export default Links;
