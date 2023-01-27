import React from 'react'

const Project = () => {
    return (
        <div className='flex flex-col gap-4 sm:px-16 px-4 py-8'>
            <h1 className='text-center font-bold text-4xl py-2'> Our Latest Projects </h1>
            <div className="grid grid-rows-3 sm:gap-12 gap-12">
                {/* row 1 */}
                <div className='flex sm:flex-row flex-col-reverse gap-12'>
                    <div className='flex  flex-col h-[371px] py-2 pr-12 gap-8 sm:justify-between'>
                        <h1 className='text-3xl font-bold'> Deloitte Hyderabad </h1>
                        <ul className=''>
                            <li className="before:content-['>'] before:pr-2">Kitchen set up for 1200+ staff</li>
                            <li className="before:content-['>'] before:pr-2">We provided end to end kitchen planning and layout designing before <span className='sm:pl-4'> execution of the project </span></li>
                            <li className="before:content-['>'] before:pr-2">Long lasting product with unique design</li>
                            <li className="before:content-['>'] before:pr-2">Timely supply and installation of products</li>
                            <li className="before:content-['>'] before:pr-2">Low maintenance display equipment products</li>
                            <li className="before:content-['>'] before:pr-2">Quality assurance and Best support services</li>
                        </ul>
                        <div className=''><button className='px-10 rounded-md text-xl py-2 bg-red-600 font-bold text-white'>READ MORE</button></div>
                    </div>
                    <div className="sm:w-[665px] sm:px-12 sm:py-12 sm:h-[371px]">
                        <img className=' rounded-xl ' src="https://www.riddhidisplay.com/wp-content/uploads/2021/06/Untitled-1.png" alt="" srcset="" />
                    </div>
                </div>

                {/* row 2 */}

                <div className='flex sm:flex-row flex-col sm:gap-32 gap-12'>
                    <div className=" sm:py-12 sm:h-[371px]">
                        <img className=' rounded-xl ' src="https://www.riddhidisplay.com/wp-content/uploads/2021/06/Untitled-2.png" alt="" srcset="" />
                    </div>
                    <div className='flex flex-col h-[371px] sm:justify-between gap-10'>
                        <h1 className='text-3xl font-bold'> Hotel Fern – Junagadh
                        </h1>
                        <ul className=''>
                            <li className="before:content-['>'] before:pr-2">Our team worked hard over the layout designing & MEP in order to ensure <span className=''>practical implementation of equipments in the space provided</span></li>
                            <li className="before:content-['>'] before:pr-2">In house bakery set up and morning breakfast buffet counters</li>
                            <li className="before:content-['>'] before:pr-2">Long lasting product with unique design</li>
                            <li className="before:content-['>'] before:pr-2">Timely supply and installation of products</li>
                            <li className="before:content-['>'] before:pr-2">Low maintenance display equipment products</li>
                            <li className="before:content-['>'] before:pr-2">Quality assurance and Best support services</li>
                        </ul>
                        <div className=''><button className='px-10 rounded-md text-xl py-2 bg-red-600 font-bold text-white'>READ MORE</button></div>
                    </div>

                </div>

                {/* row-3 */}          

                <div className='flex sm:flex-row flex-col-reverse gap-12'>
                    <div className='flex  flex-col h-[371px] py-2 pr-12 gap-8 sm:justify-between'>
                        <h1 className='text-3xl font-bold'> Deloitte Hyderabad </h1>
                        <ul className=''>
                        <li className="before:content-['>'] before:pr-2">We provided end to end consulting services</li>
                            <li className="before:content-['>'] before:pr-2">Long lasting product with unique design</li>
                            <li className="before:content-['>'] before:pr-2">Timely supply and installation of products</li>
                            <li className="before:content-['>'] before:pr-2">Planning and designing of equipment for best utilization of space</li>
                            <li className="before:content-['>'] before:pr-2">Low maintenance display equipment products</li>
                            <li className="before:content-['>'] before:pr-2">Quality assurance and Best support services</li>
                        </ul>
                        <div className=''><button className='px-10 rounded-md text-xl py-2 bg-red-600 font-bold text-white'>READ MORE</button></div>
                    </div>
                    <div className="sm:w-[665px] sm:px-24 sm:py-12 sm:h-[371px]">
                        <img className=' rounded-xl ' src="https://www.riddhidisplay.com/wp-content/uploads/2021/06/Untitled-3.png" alt="" srcset="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Project