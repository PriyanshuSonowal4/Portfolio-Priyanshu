import React from 'react'
import { motion } from 'framer-motion'

const Navbar = () => {
    return (
        <motion.div
            className='h-24 fixed z-20 top-0 left-0 flex items-center justify-end px-4 bg-black/90 w-full text-white'
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <ul className='w-fit flex flex-wrap space-x-7 font-bold mr-20 '>
                <li>Home</li>
                <li>Skills</li>
                <li>Education</li>
                <li>Contact</li>
            </ul>
        </motion.div>
    )
}

export default Navbar