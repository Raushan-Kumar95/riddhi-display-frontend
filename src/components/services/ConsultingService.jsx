import React from 'react'
import Installation from '../../assets/Imageslist/Installation.jpg'

const ConsultingService = () => {
  return (
    <div className='py-10'>
                <h1 className='md:text-5xl text-3xl font-extrabold md:pl-16 pl-5 md:w-[800px]' > <span className='text-red-500'>Commercial Kitchen</span> <span className='text-gray-800'>Consulting Service</span>  </h1>
        <div className='flex md:flex-row flex-col gap-5 md:my-16 md:mx-16 my-8 mx-8'>
            <div className='flex flex-col gap-6 text-base md:w-[1150px]'>
                <p>Commercial kitchen installation calls for considerable investment of time and money. It doesn’t end there. You also need supremely reliable experts by your side to translate your vision into reality. At Riddhi Display, we provide you with exceptional installation services, so that your commercial kitchen requirements are met above and beyond your expectations.</p>
                <p>Take a look at our multi-step process –</p>
                <p><span className="font-bold before:content-['>'] before:pr-2">Installation of New Equipment:</span><span>This is the first step in any kitchen renovation or remodel. It involves removing old equipment and installing new equipment.
</span></p>
                <p><span className="font-bold before:content-['>'] before:pr-2">Installation of New Equipment:</span><span>This is the first step in any kitchen renovation or remodel. It involves removing old equipment and installing new equipment.
</span></p>
                <p><span className="font-bold before:content-['>'] before:pr-2">Designing a New Space for your Kitchen:</span><span>This can happen before or after installation. We work with you to create a space that meets your needs and fits within your budget.
</span></p>
                <p><span className="font-bold before:content-['>'] before:pr-2">Creating a Design Plan for your New Space:</span><span>We will create a floor plan for your new space based on our consultation with you, considering any existing fixtures and appliances and other elements like cabinets and countertops.
</span></p>
                <p><span className="font-bold before:content-['>'] before:pr-2">Installing the Equipment and Ensuring it’s Working Properly:</span><span>Once installation is complete, we’ll check everything over to ensure everything is working properly before handing over the keys!
</span></p>
                <p><span className="font-bold before:content-['>'] before:pr-2">Ensuring that the Design Plans are Followed:</span><span>Once installation is complete, we’ll check everything over to ensure everything is working properly before handing over the keys! We’ll work with contractors, plumbers, electricians, etc., throughout the process to ensure that they follow our plans, so you get exactly what you want out of this experience!
</span></p>
<p>Throughout the process, we also ensure you have all the information you need to make an informed decision about your project</p>
            </div>

            <div className=''>
                <img src={Installation} alt="KitchenLayoutDesign" />
            </div>
        </div>
    </div>
  )
}

export default ConsultingService