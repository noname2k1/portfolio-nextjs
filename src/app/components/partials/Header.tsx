'use client';
import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import routes from '@/app/config/routes';
import { v4 as uuid } from 'uuid';
import { useAtom } from 'jotai';
import { tabAtom, scrollingAtom } from '@/app/store/tabStore';
import classNames from 'classnames';
// import { usePathname } from 'next/navigation';

const Header = () => {
    const [tab, setTab] = useAtom(tabAtom);
    const [scrolling, setScrolling] = useAtom(scrollingAtom);
    // console.log(tab);
    const [mobileHeader, setMobileHeader] = useState(false);
    const handleTabChange = (tab: string) => {
        setTab(tab);
        setScrolling(true);
        setTimeout(() => setMobileHeader(false), 1000);
    };

    const handleToggleMobileHeader = () => {
        setMobileHeader((prev) => !prev);
    };

    const NAV_ITEMS = useMemo(() => {
        return [
            {
                id: uuid(),
                title: 'home',
                onclick: () => {}
            },
            {
                id: uuid(),
                title: 'about',
                onclick: () => {}
            },
            {
                id: uuid(),
                title: 'skills',
                onclick: () => {}
            },
            {
                id: uuid(),
                title: 'projects',
                onclick: () => {}
            },
            {
                id: uuid(),
                title: 'contact',
                onclick: () => {}
            }
        ];
    }, []);
    return (
        <header
            className={classNames(
                'fixed text-white max-xl:bg-black z-10 py-5 xl:pl-10 px-4 sm:px-20 xl:px-6 w-full xl:w-[1200px] max-xl:flex-col flex xl:items-center justify-between',
                {
                    'bg-black': tab === 'projects'
                }
            )}
        >
            <div className='flex items-center justify-between w-full'>
                <Link href={routes.home} className='text-2xl font-black'>
                    NinhNam
                </Link>
                {/* hamburger button */}
                <button
                    onClick={handleToggleMobileHeader}
                    className='xl:hidden flex flex-col gap-1.5'
                >
                    <div
                        className={classNames('h-1 w-8 bg-white duration-150', {
                            'rotate-45 translate-y-2.5': mobileHeader
                        })}
                    ></div>
                    <div
                        className={classNames('h-1 w-8 bg-white duration-150', {
                            hidden: mobileHeader
                        })}
                    ></div>
                    <div
                        className={classNames('h-1 w-8 bg-white duration-150', {
                            '-rotate-45': mobileHeader
                        })}
                    ></div>
                </button>
            </div>

            <nav
                className={classNames(
                    'flex max-xl:flex-col max-xl:gap-4 duration-150',
                    {
                        'max-xl:invisible max-xl:opacity-0': !mobileHeader,
                        'max-xl:py-4': mobileHeader
                    }
                )}
            >
                {NAV_ITEMS.map((item, index) => (
                    <div
                        key={index}
                        className={classNames(
                            'text-lg xl:text-base xl:px-5 cursor-pointer',
                            { 'max-xl:hidden': !mobileHeader }
                        )}
                        onClick={() => handleTabChange(item.title)}
                    >
                        <span
                            className={classNames(
                                'border-b-2 hover:border-white duration-200 pb-1 capitalize',
                                {
                                    'text-secondary border-secondary hover:border-secondary':
                                        (!tab && item.title === 'home') ||
                                        item.title === tab,
                                    'border-transparent': item.title !== tab
                                }
                            )}
                        >
                            {item.title}
                        </span>
                    </div>
                ))}
            </nav>
        </header>
    );
};

export default Header;
