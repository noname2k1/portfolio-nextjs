import React from 'react';
import classNames from 'classnames';
import { useChunk } from '../../hooks';

interface PROJECT {
    id: number;
    title: string;
    description: string;
    image: string;
    href: string;
}

const MY_PROJECTS: PROJECT[] = [
    {
        id: 0,
        title: 'APP CHAT',
        description:
            'ReactJS,Redux Toolkit, SCSS, ExpressJS, Mongodb, Socket.io, Javascript, Cloudinary',
        image: '/images/appchat_avt.png',
        href: 'https://chat-app-client-react-refactor.vercel.app/'
    },
    {
        id: 1,
        title: 'TikTok Clone',
        description: 'Reactjs, Redux Toolkit, SCSS Module, Javascript',
        image: '/images/tiktok.png',
        href: 'https://tiktok-clone-by-ninhnam.vercel.app/'
    },

    {
        id: 2,
        title: 'Azuki Clone',
        description:
            'NextJS (Page router), Zustand, Nestjs, Mongodb, TailwindCSS, Typescript, Cloudinary',
        image: '/images/azuki.jfif',
        href: 'https://next-js-app-green-eta.vercel.app/'
    },
    {
        id: 3,
        title: 'Coffee Style',
        description:
            'ReactJS, Recoil, ExpressJS, MongoDB, TailwindCSS, Typescript, AdminJS, Cloudinary',
        image: '/images/coffee_style.jpg',
        href: 'https://coffee-style-react-typescript.vercel.app/'
    }
];

const Projects = () => {
    const chunks = useChunk<PROJECT>(MY_PROJECTS, 2);
    return (
        <section className='min-h-screen flex items-center xl:justify-center pt-[100px]'>
            <div className='w-full'>
                <div className='relative flex justify-center mb-'>
                    <h2 className='text-[90px] font-[900] opacity-10 capitalize'>
                        projects
                    </h2>
                    <h3 className='text-[50px] font-[700] absolute top-0 capitalize'>
                        our projects
                    </h3>
                </div>

                <ul className='flex flex-col gap-[30px] mt-10 px-4'>
                    {chunks.map((chunk, index) => {
                        return (
                            <div
                                className='flex max-xl:flex-col items-center gap-[30px]'
                                key={index}
                            >
                                {chunk.map((project, pid) => (
                                    <li
                                        key={project.id}
                                        className={classNames(
                                            'h-[285px] border-2 max-xl:w-full border-white xl:flex-1 group',
                                            {
                                                'xl:flex-grow-[2]':
                                                    (index % 2 === 0 &&
                                                        pid % 2 !== 0) ||
                                                    (index % 2 !== 0 &&
                                                        pid % 2 === 0)
                                            }
                                        )}
                                        style={{
                                            backgroundImage:
                                                'url(' + project.image + ')',
                                            backgroundPosition: 'center',
                                            backgroundSize: 'contain',
                                            backgroundRepeat: 'no-repeat'
                                        }}
                                    >
                                        <a
                                            href={project.href}
                                            target='_blank'
                                            className='bg-secondary flex items-center justify-center duration-300 bg-opacity-95 w-full h-full invisible group-hover:visible'
                                        >
                                            <div className='capitalize font-bold text-3xl text-center flex flex-col'>
                                                <span>{project.title}</span>
                                                <span className='text-xl font-medium px-4 mt-2'>
                                                    {project.description}
                                                </span>
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </div>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Projects;
