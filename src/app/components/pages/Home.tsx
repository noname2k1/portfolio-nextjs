import React, { useEffect, useState } from 'react';
import { CustomButton } from '../commons';

const Home = () => {
    const [slide, setSlide] = useState<number>(0);
    // console.log(slide);
    useEffect(() => {
        const slideCount = 2;
        const timer = setInterval(() => {
            if (slide <= 0 && slide < slideCount - 1) {
                setSlide((prev) => prev + 1);
            } else {
                setSlide(0);
            }
        }, 3000);
        return () => clearInterval(timer);
    }, [slide]);

    return (
        <section className='h-screen flex items-center'>
            <div className='flex flex-col px-10'>
                <span className='text-secondary uppercase tracking-widest font-bold'>
                    Hello!
                </span>
                <div className='max-w-[50vw] flex flex-col'>
                    {slide === 0 ? (
                        <>
                            <span className='font-black text-6xl my-5'>
                                I'm{' '}
                                <span className='text-secondary'>Ninh Nam</span>
                            </span>
                            <span className='capitalize text-3xl'>
                                A web developer
                            </span>
                        </>
                    ) : (
                        <>
                            <span className='font-black text-6xl my-5'>
                                I'm{' '}
                                <span className='text-secondary'>
                                    a web developer
                                </span>{' '}
                                based in Hanoi
                            </span>
                        </>
                    )}
                </div>
                <div className='flex items-center mt-5'>
                    <CustomButton variant='secondary'>Hire me</CustomButton>
                    <CustomButton>My works</CustomButton>
                </div>
            </div>
        </section>
    );
};

export default Home;

function setTab(arg0: string) {
    throw new Error('Function not implemented.');
}
