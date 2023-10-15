import React from 'react';

interface Props {}

const MY_SKILLS = [
    {
        id: 0,
        title: 'HTML5'
    },
    {
        id: 1,
        title: 'CSS3'
    },

    {
        id: 2,
        title: 'REACTJS'
    },
    {
        id: 3,
        title: 'EXPRESSJS'
    },
    {
        id: 4,
        title: 'DATABASE (MONGODB/MYSQL)'
    },
    {
        id: 5,
        title: 'JAVASCRIPT/TYPESCRIPT'
    }
];

const Skills = (props: Props) => {
    return (
        <section className='h-screen flex items-center xl:justify-center'>
            <div className=''>
                <div className='relative'>
                    <h2 className='text-[90px] font-[900] opacity-10 capitalize'>
                        skills
                    </h2>
                    <h3 className='text-[50px] font-[700] absolute top-0 capitalize'>
                        My skills
                    </h3>
                </div>

                <ul>
                    {MY_SKILLS.map((skill, index) => (
                        <li key={skill.id} className='flex items-center py-2'>
                            <span className='capitalize font-bold text-2xl'>
                                {index + 1}. {skill.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Skills;
