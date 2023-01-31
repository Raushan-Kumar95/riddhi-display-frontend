import React from 'react'
import { ColdDisplayData } from './ProductData'
import Title from './Title'



const ColdDisplayProduct = () => {
  return (
    <div className='px-16 py-4'>
        <Title title="Cold Display" />
        <div className='grid lg:grid-cols-3 sm:grid-cols-2  gap-8  place-items-center'>
                {
                    ColdDisplayData.map(item => {
                            
                        return (
                            <div className='flex flex-col gap-4 justify-center items-center'>
                                {/* <img src={item.img} alt={item.name} srcset="" /> */}
                                <img src={item.img}  alt={item.img} />
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

export default ColdDisplayProduct