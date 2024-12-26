import React from 'react'
import { SKILLS } from './Data'
import { motion } from 'framer-motion'

const Skills = () => {
    return (
        <div className='container mx-auto' id='skills'>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='mb-12 mt-20 text-center text-4xl font-bold'>Skills</motion.h2>
            <div className='mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20
            border border-stone-50/30'>
                {
                    SKILLS.map((skill, index) => (
                        <div
                            data-aos="zoom-in-right"
                            data-aos-duration="1000"
                            key={index} className={`py-6 flex items-center justify-between 
                            ${index !== SKILLS.length - 1 ? "border-b border-stone-50/30" : ""}`}>
                            <div className='flex items-center'>
                                {skill.icon}
                                <h3 className='px-6 text-lg lg:text-2xl'>{skill.name}</h3>


                            </div>
                            <div className='text-md font-semibold lg:text-xl'>
                                <span>{skill.experience}</span>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Skills