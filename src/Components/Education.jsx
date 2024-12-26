import React from 'react'
import { EDUCATION } from './Data'
import { motion } from 'framer-motion'

const Education = () => {
    return (
        <section className='py-8' id='education'>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='mb-4 text-center text-3xl font-bold'>Education</motion.h2>
            {EDUCATION.map((edu, index) => (
                <div
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    key={index} className='mb-6 p-10'>
                    <h3 className='text-xl font-semibold'>{edu.degree}</h3>
                    <p className='text-lg'>{edu.institution}</p>
                    <p className='text-sm text-stone-300'>{edu.duration}</p>
                    <p className='mt-2'>{edu.description}</p>
                </div>
            ))}

        </section>
    )
}

export default Education
