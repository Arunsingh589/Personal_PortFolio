import React from 'react'
import logo from '../../public/logo4.png'
import { SOCIAL_MEDIA_LINKS } from './Data'

const Footer = () => {
    return (
        <div className='mb-8 mt-20' id='footer'>
            <div className='flex items-center justify-center'
                data-aos="zoom-in"
                data-aos-duration="1000"
            >
                <img src={logo} width={200} className="my-20" />

            </div>

            <div
                // data-aos="zoom-in-up"
                // data-aos-duration="1000"
                className='flex items-center justify-center gap-4 md:gap-8 '

            >
                {
                    SOCIAL_MEDIA_LINKS.map((link, index) => (

                        <a
                            data-aos="zoom-in-left"
                            data-aos-duration="1000"
                            key={index} href={link.href} target='_blank' rel='noopener noreferrer'
                            className='border-2 border-yellow-500 bg-black px-2 py-2 md:px-4 md:py-3 rounded-full items'>{link.icon}</a>
                    ))}
            </div>
            <p className='mt-8 text-center text-sm tracking-wide text-gray-400'>
                &@Thakur589. All rights reserved
            </p>

        </div>
    )
}

export default Footer
