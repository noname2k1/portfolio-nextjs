import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { scrollingAtom, tabAtom } from '@/app/store/tabStore';
import { useAtom } from 'jotai';

interface Props {
    children: React.ReactNode;
    tab: string;
}

const IntersectionWrapper = (props: Props) => {
    const [tab, setTab] = useAtom(tabAtom);
    const [scrolling, setScrolling] = useAtom(scrollingAtom);
    // console.log(tab);
    // console.log(scrolling);
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.5
    });
    useEffect(() => {
        let timer: string | number | NodeJS.Timeout | undefined;
        if (tab === props.tab) {
            entry?.target.scrollIntoView({
                behavior: 'smooth'
            });
            timer = setTimeout(() => {
                setScrolling(false);
            }, 1000);
        }
        return () => clearTimeout(timer);
    }, [tab]);
    useEffect(() => {
        if (inView && !scrolling) setTab(props.tab);
    }, [inView]);

    return (
        <div ref={ref} className='w-full max-xl:flex max-xl:justify-center'>
            {props.children}
        </div>
    );
};

export default IntersectionWrapper;
