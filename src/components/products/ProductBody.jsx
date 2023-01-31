import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import AllProducts from './AllProducts';
import ColdDisplayProduct from './ColdDisplayProduct';
import CookingEquipmentProduct from './CookingEquipmentProduct';
import CustomizedSolutionProduct from './CustomizedSolutionProduct';
// import {ProductsData} from './ProductData';


// import img1 from '../../assets/Display_Counter/salad-display-counter.png'

const ProductBody = () => {

    const [activeTab, setActiveTab] = useState("all");


    let activeClassName = `{" after:absolute after:bottom-2 after:left-1/2 after:-ml-2 after:rotate-45 after:content-[""] after:px-2 after:border-red-600 after:py-2 after:border-b-2 after:border-r-2 after:bg-gray-100 "}`

    return (
        <div className='py-8'>
            <div className='flex gap-1 flex-wrap justify-center'>
                <div className='scale-75 sm:scale-100 px-4 py-4 relative'>
                    <NavLink className='nav-tabs bg-gray-100 flex gap-2' onClick={() => setActiveTab("all")}>
                        <button className={`text-red-600 font-bold text-2xl px-4 py-2 border-2 border-red-600 ${(activeTab)==="all" ? activeClassName : ""}`}>ALL</button>
                    </NavLink>
                </div>

                <div className='scale-75 sm:scale-100 px-4 py-4 relative ' >
                    <NavLink className='nav-tabs flex bg-gray-100' onClick={() => setActiveTab("tab1")}>
                        <button className={`text-red-600 font-bold text-2xl px-4 py-2 border-2 border-red-600 ${(activeTab)==="tab1" ? activeClassName : ""}`}>Cold Display</button>
                    </NavLink>
                </div>
                <div className='scale-75 sm:scale-100 px-4 py-4 relative ' >
                    <NavLink className='nav-tabs flex bg-gray-100' onClick={() => setActiveTab("tab2")}>
                        <button className={`text-red-600 font-bold text-2xl px-4 py-2 border-2 border-red-600 ${(activeTab)==="tab2" ? activeClassName : ""}`}>Cooking Equipment</button>
                    </NavLink>
                </div>
                <div className='scale-75 sm:scale-100 px-4 py-4 relative ' >
                    <NavLink className='nav-tabs flex bg-gray-100' onClick={() => setActiveTab("tab3")}>
                        <button className={`text-red-600 font-bold text-2xl px-4 py-2 border-2 border-red-600 ${(activeTab==="tab3") ? activeClassName : ""}`}>Customized Product</button>
                    </NavLink>
                </div>
            </div>

            <div>

            </div>

            {
                activeTab === "all" ?  <AllProducts/> : ""
            }

            {activeTab === "tab1" ? <ColdDisplayProduct/> : ""}
            {activeTab === "tab2" ? <CookingEquipmentProduct/> : ""}
            {activeTab === "tab3" ? <CustomizedSolutionProduct/> : ""}

        </div>
    )
}

export default ProductBody;





