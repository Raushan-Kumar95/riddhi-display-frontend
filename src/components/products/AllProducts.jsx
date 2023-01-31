import React from 'react'
import ColdDisplayProduct from './ColdDisplayProduct'
import CookingEquipmentProduct from './CookingEquipmentProduct'
import CustomizedSolutionProduct from './CustomizedSolutionProduct'

const AllProducts = () => {
  return (
    <div>
        <ColdDisplayProduct/>
        <CookingEquipmentProduct/>
        <CustomizedSolutionProduct/>
    </div>
  )
}

export default AllProducts