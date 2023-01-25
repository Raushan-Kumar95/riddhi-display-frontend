import React from 'react'
import HeaderData from './HeaderData.json'

const Navbar = () => {
    return (
        <div>
            {/* Header Top */}
            <div className='bg-black text-white py-4 px-10 flex flex-row justify-between'>

                <div className='hidden md:block'>
                    <ul className='flex flex-row text-2xl'>
                        <li className='mx-3'><a href="https://www.facebook.com/riddhidisplaypvtltd"><i class="fa-brands fa-facebook"></i></a></li>
                        <li className='mx-3'><a href="https://twitter.com/riddhidisplay"><i class="fa-brands fa-twitter"></i></a></li>
                        <li className='mx-3'><a href="https://www.instagram.com/riddhidisplay/"><i class="fa-brands fa-instagram"></i></a></li>
                        <li className='mx-3'><a href="https://www.linkedin.com/in/riddhidisplay/"><i class="fa-brands fa-linkedin"></i></a></li>
                    </ul>
                </div>

                <div>
                    <ul className='flex md:flex-row flex-col md:mx-5 mx-auto '>
                        <li className='mx-3'><a href="tel:+91 9825072799"><i class="fa-solid fa-phone"></i> +91 9825072799</a></li>
                        <li className='mx-3'><a href="mailto:info@riddhidisplay.com"><i class="fa-regular fa-envelope"></i> info@riddhidisplay.com</a></li>

                    </ul>

                </div>
            </div>


            {/* Header Bottom */}
            <nav className="flex shadow-xl justify-between">
                <div className='py-7 px-14'>
                    <img src="https://www.riddhidisplay.com/wp-content/uploads/2021/04/logo.png" alt="Logo" />
                </div>

                <ul className='md:flex md:flex-row flex-col md:text-center py-9 px-14 font-semibold text-lg'>
                    {HeaderData.map(nav => {
                        return (
                            <li className='px-5'>
                                <a href={nav.link}>{nav.name}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar