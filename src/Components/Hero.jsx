import React, { useEffect, useRef } from 'react'
import { HERO } from './Data'
import arunImg from '../../public/assets/arun.jpg'
import Typed from 'typed.js';
import { motion } from 'framer-motion';


const Hero = () => {
    const typedRef = useRef(null)
    useEffect(() => {
        const options = {
            strings: [
                "Welcome To My Profile",
                "My Name is Arun Singh",
                "I'm a Frontend Developer",
                "Web Development (ReactJS)",
            ],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            showCursor: false,
        };
        const typed = new Typed(typedRef.current, options);
        return () => {
            typed.destroy();
        };
    }, []);
    return (
        <section className='flex min-h-screen flex-wrap items-center'>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className='w-full mt-10 md:w-1/2'>
                <h2 className='my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]'>
                    {HERO.name}
                </h2>
                <p className='p-2 text-3xl tracking-tighter lg:text-4xl'>
                    {HERO.greet}
                </p>
                <h1 ref={typedRef} className='p-2 text-3xl tracking-tighter lg:text-4xl'></h1>

                {/* <a href={resume}
                    download="Arun_Singh_Resume.pdf"
                    className='flex  px-2 py-2  bg-yellow-400 w-44 text-center justify-center rounded-lg'>Download Resume</a> */}

                <p className='mb-8 p-2 text-xl'>
                    {HERO.description}
                </p>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className='w-full md:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        src={arunImg} width={450} height={450} alt="Arun Singh" className='rounded-3xl' />

                </div>

            </motion.div>

        </section>
    )
}

export default Hero
