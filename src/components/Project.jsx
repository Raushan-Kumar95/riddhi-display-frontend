import React from 'react'

const Project = () => {
    return (
        <div className='flex flex-col gap-4 px-8'>
            <h1 className='text-center font-bold text-4xl'> Our Latest Projects </h1>
            <div className="grid grid-rows-3">
                <div className='grid grid-cols-2 gap-4'>
                    <div className='flex flex-col h-[371px] justify-between'>
                        <h1 className='text-5xl font-bold'> Deloitte Hyderabad </h1>
                        <ul>
                            <li>Kitchen set up for 1200+ staff</li>
                            <li>We provided end to end kitchen planning and layout designing before execution of the project</li>
                            <li>Long lasting product with unique design</li>
                            <li>Timely supply and installation of products</li>
                            <li>Low maintenance display equipment products</li>
                            <li>Quality assurance and Best support services</li>
                        </ul>
                        <div className=''><button className='px-10 rounded-md text-xl py-2 bg-red-600 font-bold text-white'>READ MORE</button></div>
                    </div>
                    <img className='w-[665px] h-[371px]' src="https://www.riddhidisplay.com/wp-content/uploads/2021/06/Untitled-1.png" alt="" srcset="" />
                </div>

            </div>
        </div>
    )
}

export default Project