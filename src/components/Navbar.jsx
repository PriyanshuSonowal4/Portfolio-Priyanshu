import React from 'react'

const Navbar = () => {
    return (
        <div className='h-24 fixed top-0 left-0 flex items-center justify-end px-4 bg-black/90 w-full text-white'>
            
            <ul className='w-fit flex flex-wrap space-x-7 font-bold mr-20 '>
                <li>Home</li>
                <li>Skills</li>
                <li>Education</li>
                <li>Contact</li>
            </ul>


        </div>
    )
}

export default Navbar