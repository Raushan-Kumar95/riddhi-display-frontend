import React from 'react'
import KitchenLayoutDesign from '../../assets/Imageslist/Kitchen-Layout-Design.jpg'

const CommercialKitchen = () => {
  return (
    <div>
        <div className='flex md:flex-row flex-col-reverse gap-5 md:my-16 md:mx-16 my-8 mx-8'>
            <div className='flex flex-col gap-6 md:text-lg text-base'>
                <h1 className='md:text-5xl text-3xl font-extrabold' > <span className='text-red-600'>Commercial Kitchen</span> <span>Layout Design</span>  </h1>
                <p className="before:content-['>'] before:pr-2">RDEPL design team makes proper Kitchen Planning & Layout Designing is major concern before the execution of the kitchen starts.</p>
                <p className="before:content-['>'] before:pr-2">Kitchen’s layout must ensure the best space utilization along with easy movement of moveable types of equipment in the kitchen corridors.</p>
                <p className="before:content-['>'] before:pr-2" >RDEPL design team works hard over the layout designing & MEP of every project in order to ensure practical implementation of equipment in the space provided.</p>
                <p className="before:content-['>'] before:pr-2">RDEPL Design Team has the main aim to make proper utilization of Space so that every section of kitchen avails enough space to perform an operation with ease.</p>
                <p className="before:content-['>'] before:pr-2">We can design custom kitchen environments based on operational needs and the unique needs of the chef’s menu. The result is more eﬃcient, more uid kitchens where inspiration thrives.</p>
            </div>

            <div>
                <img src={KitchenLayoutDesign} alt="KitchenLayoutDesign" />
            </div>
        </div>
    </div>
  )
}

export default CommercialKitchen