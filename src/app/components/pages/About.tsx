import React from 'react';
import { CustomButton } from '../commons';

interface Props {}

const MY_INFOR = [
    {
        id: 0,
        title: 'name',
        content: 'Ninh Ngọc Nam'
    },
    {
        id: 1,
        title: 'date of birth',
        content: 'November 30, 2001'
    },
    {
        id: 2,
        title: 'address',
        content: '14, 753, Nguyen Khoai, Thanh Tri, Hoang Mai, Hanoi'
    },
    {
        id: 3,
        title: 'email',
        content: 'ninhnamyb2001@gmail.com'
    },
    {
        id: 4,
        title: 'phone',
        content: '0388556705'
    }
];

const About = (props: Props) => {
    return (
        <section className='h-screen flex items-center xl:justify-center'>
            <div className=''>
                <div className='relative max-xl:flex justify-center'>
                    <h2 className='text-[90px] font-[900] opacity-10'>About</h2>
                    <h3 className='text-[50px] font-[700] absolute top-0'>
                        About Me
                    </h3>
                </div>

                <ul className='mb-4 px-10'>
                    {MY_INFOR.map((item) => (
                        <li key={item.id} className='flex items-center py-1'>
                            <span className='capitalize font-bold text-lg'>
                                {item.title}:
                            </span>
                            <p className='opacity-70 text-xl'>
                                &ensp;
                                {item.content}
                            </p>
                        </li>
                    ))}
                </ul>

                <a
                    download
                    href='/pdf/NinhNgocNam_WebDeveloper_CV.pdf'
                    className='max-xl:flex justify-center'
                >
                    <CustomButton variant='secondary'>Download CV</CustomButton>
                </a>
            </div>
        </section>
    );
};

export default About;
