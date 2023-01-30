import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import AllProducts from './AllProducts';

// import img1 from '../../assets/Display_Counter/salad-display-counter.png'

const DisplayCounter = () => {

    const [activeTab, setActiveTab] = useState(true);


    let activeClassName = `{" after:absolute after:bottom-2 after:left-1/2 after:-ml-2 after:rotate-45 after:content-[""] after:px-2 after:border-red-600 after:py-2 after:border-b-2 after:border-r-2 after:bg-gray-100 "}`

    return (
        <div className='py-8'>
            <div className='flex gap-1 justify-center'>
                <div className='px-4 py-4 relative'>
                    <NavLink className='nav-tabs bg-gray-100 flex gap-2' onClick={() => setActiveTab(true)}>
                        <button className={`text-red-600 font-bold text-2xl px-4 py-2 border-2 border-red-600 ${(activeTab) ? activeClassName : ""}`}>ALL</button>
                    </NavLink>
                </div>

                <div className='px-4 py-4 relative ' >
                    <NavLink className='nav-tabs flex bg-gray-100' onClick={() => setActiveTab(false)}>
                        <button className={`text-red-600 font-bold text-2xl px-4 py-2 border-2 border-red-600 ${(!activeTab) ? activeClassName : ""}`}>DISPLAY COUNTER</button>
                    </NavLink>
                </div>
            </div>

            <div>

            </div>

            {
                activeTab ? <AllProducts /> : <div className='mx-16 font-bold text-2xl bg-red-200 px-4 py-2 inline-block'>DisplayCountProducts</div>
            }
        </div>
    )
}

export default DisplayCounter





