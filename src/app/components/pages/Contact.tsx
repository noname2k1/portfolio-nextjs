import classNames from 'classnames';
import React from 'react';

interface Props {}

const CONTACTS = [
    {
        id: 0,
        title: 'address',
        href: 'none',
        content: '14, 753, Nguyen Khoai, Thanh Tri, Hoang Mai, Hanoi',
        image: '/images/address.png'
    },
    {
        id: 1,
        title: 'phone',
        content: '+84388556705',
        href: 'tel:',
        image: '/images/phone.png'
    },

    {
        id: 2,
        title: 'email address',
        content: 'ninhnamyb2001@gmail.com',
        href: 'mailto:',
        image: '/images/email.png'
    },
    {
        id: 3,
        title: 'website',
        href: '',
        content: 'https://github.com/noname2k1',
        image: '/images/earth.png'
    }
];

const Contact = (props: Props) => {
    return (
        <section className='min-h-screen flex items-center xl:justify-center'>
            <div className=''>
                <div className='relative flex justify-center mt-20'>
                    <h2 className='text-[80px] xl:text-[120px] font-[900] opacity-10 capitalize'>
                        contact
                    </h2>
                    <h3 className='text-[40px] xl:text-[50px] font-[700] absolute top-0 capitalize'>
                        contact me
                    </h3>
                </div>

                <ul className='flex flex-col xl:flex-row max-xl:gap-10'>
                    {CONTACTS.map((contact, index) => (
                        <li
                            key={contact.id}
                            className='flex flex-col items-center py-2 flex-1'
                        >
                            <div className='bg-white/10 w-[100px] h-[100px] flex items-center justify-center rounded-full'>
                                <img
                                    src={contact.image}
                                    className='invert w-8 h-8 object-contain'
                                    alt='icon'
                                />
                            </div>
                            <span className='uppercase font-normal text-lg py-5 xl:py-10'>
                                {contact.title}
                            </span>
                            <a
                                className={classNames(
                                    'font-extralight text-base text-center duration-100 hover:text-white',
                                    {
                                        'text-white/50 cursor-default':
                                            contact.href === 'none'
                                    }
                                )}
                                href={
                                    contact.href !== 'none'
                                        ? contact.href + contact.content
                                        : ''
                                }
                                target={
                                    contact.href !== 'none' && contact.href
                                        ? '_self'
                                        : '_blank'
                                }
                                onClick={(e) => {
                                    if (contact.href === 'none')
                                        e.preventDefault();
                                }}
                            >
                                {contact.content}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Contact;
