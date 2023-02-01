import React from 'react'
// import ColdDisplayProduct from './ColdDisplayProduct'
// import CookingEquipmentProduct from './CookingEquipmentProduct'
// import CustomizedSolutionProduct from './CustomizedSolutionProduct'

import images from '../products/images.json'





const AllProducts = () => {
  return (
    <div>
         <h1 className='flex items-center justify-center font-bold text-2xl bg-red-200 px-4 py-2 my-4 inline-block'>
                ALL PRODUCTS
        </h1>
         {/* <ColdDisplayProduct/>
        <CookingEquipmentProduct/>
        <CustomizedSolutionProduct/> */}
        <div className='grid lg:grid-cols-3 sm:grid-cols-2  gap-8  place-items-center'>
                {
                    ColdDisplayData.map(item => {
                            
                        return (
                            <div className='flex flex-col gap-4 justify-center items-center'>
                                {/* <img src={item.img} alt={item.name} srcset="" /> */}
                                <img src={item.img}  alt={item.alt} />
                                <h1 className='text-center'> {item.name} </h1>
                                <div>
                                    <h1>Size: {item.size}</h1>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

    </div>
  )
}

export default AllProducts