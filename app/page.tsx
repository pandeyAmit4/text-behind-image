'use client';

import React from 'react';
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { HeroImages } from '@/components/hero-images';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { HeroParallaxImages } from '@/components/hero-parallax-images';
import { AdditionalInfo } from '@/components/additional-info';
import { FAQSection } from '@/components/ui/faq-section';
import Link from 'next/link';

const page = () => {
    return ( 
        <div className='flex flex-col min-h-screen items-center w-full mt-20'>
            <HeroHighlight>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: [20, -5, 0] }} 
                    transition={{ duration: 0.5, ease: [0.4, 0.0, 0.2, 1] }}
                    className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-bold text-black dark:text-white"
                >
                    Create {" "}
                    <Highlight className='text-white'>
                        text-behind-image
                    </Highlight>
                    {" "} designs easily
                </motion.h1>
            </HeroHighlight>
            <Link href={'/app'} className='mb-10'>
                <HoverBorderGradient containerClassName="rounded-full" as="button" className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2">
                    Open the app
                </HoverBorderGradient>
            </Link>
            <div className='w-full h-full mt-2'>
                <HeroImages />
                <HeroParallaxImages />
            </div>
            <div className="lg:w-[800px]  h-full mt-1">
                <AdditionalInfo />
            </div>
            <div className='w-full h-full md:p-10 pt-10 max-w-7xl mx-auto gap-4 relative'>
                <FAQSection/>
            </div>
        </div>
    );
}

export default page;