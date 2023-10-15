import React from 'react';

const FOOTER_ITEMS = [
    {
        id: 0,
        title: 'About',
        content: (
            <p className='text-white/50'>
                Aspiring web developer passionate about creating visually
                appealing and user-friendly websites. Limited professional
                experience but dedicated to learning and mastering necessary
                skills. Portfolio showcases training projects including
                responsive designs and basic web applications. Strong foundation
                in HTML, CSS, and JavaScript. Seeking opportunities to
                collaborate and contribute to impactful online experiences.
                Contact for web development projects or collaborations.'
            </p>
        )
    },
    {
        id: 1,
        title: 'Have a question?',
        content: (
            <ul>
                <li className='flex items-center gap-4 py-2 justify-center'>
                    <img
                        className='invert w-6 h-6'
                        src='/images/address.png'
                        alt='icon'
                    />
                    <span>
                        14, 753, Nguyen Khoai, Thanh Tri, Hoang Mai, Ha Noi
                    </span>
                </li>
                <li className='flex items-center gap-4 py-2 justify-center'>
                    <img
                        className='invert w-6 h-6'
                        src='/images/phone.png'
                        alt='icon'
                    />
                    <span>+84388556705</span>
                </li>
                <li className='flex items-center gap-4 py-2 justify-center'>
                    <img
                        className='invert w-6 h-6'
                        src='/images/email.png'
                        alt='icon'
                    />
                    <span>ninhnamyb2001@gmail.com</span>
                </li>
            </ul>
        )
    }
];
const Footer = () => {
    return (
        <footer className='flex items-center justify-center py-10 px-4 xl:px-0'>
            <ul className='flex flex-col xl:flex-row justify-around flex-1 gap-10'>
                {FOOTER_ITEMS.map((item) => {
                    return (
                        <li key={item.id} className='max-xl:text-center'>
                            <h3 className='text-2xl font-semibold mb-2'>
                                {item.title}
                            </h3>
                            {item.content}
                        </li>
                    );
                })}
            </ul>
        </footer>
    );
};

export default Footer;
