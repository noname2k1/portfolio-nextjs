'use client';
import { IntersectionWrapper } from './components/commons';
import { About, Home, Skills, Projects, Contact } from './components/pages';
import { Footer, Header } from './components/partials';
import { Provider } from 'jotai';

export default function MainPage() {
    return (
        <Provider>
            <div className='flex xl:justify-center bg-primary text-white'>
                <div className='xl:w-[1200px] max-xl:flex max-xl:flex-col max-xl:items-center bg-black'>
                    <Header />
                    <main className='sm:px-20 xl:px-6 w-full'>
                        <IntersectionWrapper tab='home'>
                            <Home />
                        </IntersectionWrapper>
                        <IntersectionWrapper tab='about'>
                            <About />
                        </IntersectionWrapper>
                        <IntersectionWrapper tab='skills'>
                            <Skills />
                        </IntersectionWrapper>
                        <IntersectionWrapper tab='projects'>
                            <Projects />
                        </IntersectionWrapper>
                        <IntersectionWrapper tab='contact'>
                            <Contact />
                        </IntersectionWrapper>
                    </main>
                    <Footer />
                </div>
            </div>
        </Provider>
    );
}
