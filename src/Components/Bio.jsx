import React from 'react'
import { BIO } from './Data'
import { motion } from 'framer-motion'
motion

const Bio = () => {
    return (
        <section className='flex max-w-4xl flex-col gap-12 pt-20' id='bio'>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className='text-center text-3xl lg:text-4xl '>Bio</motion.h2>
            <div>
                {
                    BIO.map((bio, index) => (
                        <p
                            data-aos="zoom-in-up"
                            data-aos-duration="1000"
                            key={index} className='mb-4  text-lg lg:text-xl'>
                            {bio}
                        </p>


                    ))
                }
            </div>

        </section>
    )
}

export default Bio
