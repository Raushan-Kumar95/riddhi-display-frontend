import React from 'react'
import ColdDisplayProduct from './ColdDisplayProduct'
import CookingEquipmentProduct from './CookingEquipmentProduct'
import CustomizedSolutionProduct from './CustomizedSolutionProduct'


const AllProducts = () => {
  return (
    <div>
         <h1 className='flex items-center justify-center font-bold text-2xl bg-red-200 px-4 py-2 my-4 inline-block'>
                ALL PRODUCTS
        </h1>
        <ColdDisplayProduct/>
        <CookingEquipmentProduct/>
        <CustomizedSolutionProduct/>
    </div>
  )
}

export default AllProducts