import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';

const DisplayCounter = () => {

    const [activeTab, setActiveTab] = useState(true);



    function handleActiveTab() {
        return (
            setActiveTab(!activeTab)
        )
    }


    return (
        <div className='py-8'>
            <div className='flex gap-1 justify-center'>
                <div className='px-4 py-4 relative'>


                    <NavLink className='nav-tabs bg-gray-100 flex gap-2' onClick={handleActiveTab}>
                        <button className='text-red-600 font-bold text-2xl px-4 py-2 border-2 border-red-600 
                after:absolute after:bottom-2 after:left-1/2 after:-ml-2 after:rotate-45 after:content-[""] 
                after:px-2 after:border-red-600 after:py-2 after:border-b-2 after:border-r-2
                after:bg-white
                '>ALL</button>
                    </NavLink>


                </div>

                <div className='px-4 py-4 relative ' >


                    <NavLink className='nav-tabs flex bg-gray-100' onClick={handleActiveTab}>
                        <button className='text-red-600 font-bold text-2xl  px-4 py-2 border-2 border-red-600 
                after:absolute after:bottom-2 after:left-1/2 after:-ml-2 after:rotate-45 after:content-[""] 
                after:px-2 after:border-red-600 after:py-2 after:border-b-2 after:border-r-2
                after:bg-white
                '>DISPLAY COUNTER</button>
                    </NavLink>


                </div>
            </div>

            <div>

            </div>

            {
                activeTab ? <AllProducts/> : <DIsplayCountProducts/>
            }
        </div>
    )
}

export default DisplayCounter



const AllProducts = () => {
  return (
    <div>

        <div className='grid grid-cols-3 gap-4 px-16 py-4 place-items-center'>

            
            <div>Product 1</div>
            <div>Product 1</div>
            <div>Product 1</div>
            <div>Product 1</div>
            <div>Product 1</div>
            <div>Product 1</div>
            <div>Product 1</div>
            <div>Product 1</div>

        </div>
    </div>
  )
}

const DIsplayCountProducts = () => {
    return (
      <div>DIsplayCountProducts</div>
    )
  }