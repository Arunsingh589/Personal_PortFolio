import React from 'react'
import { EXPERIENCES } from './Data'
import { motion } from 'framer-motion'
const Experience = () => {
    return (
        <section className='pt-20' id='work'>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }} className='text-center text-4xl font-semibold tracking-tighter'>
                Work Experience

            </motion.h2>
            <div className='space-y-8 p-10'>
                {
                    EXPERIENCES.map((work, index) => (
                        <div key={index}
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                            className='rounded-xl border border-stone-50/30 bg-white/10 p-4 text-center'>
                            <h3 className='text-2xl font-semibold'>{work.title}</h3>
                            <p className='text-xl'>{work.company}</p>
                            <p className='text-sm text-stone-300'>{work.duration}</p>
                            <p className='mt-2 text-base'>{work.description}</p>
                        </div>
                    ))
                }

            </div>

        </section>
    )
}

export default Experience
