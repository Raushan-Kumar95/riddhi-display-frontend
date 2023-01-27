import React from 'react'

const Experience = () => {
    return (
        <div className='flex sm:flex-row flex-col-reverse sm:px-16 px-4 gap-12  py-12 '>
            <div className='sm:w-1/2'>
                <ul className='flex flex-col justify-between gap-y-4 sm:h-[523px]'>
                    <li className='text-5xl font-bold text-red-500'>35 Years of <span className='text-black'>Experience</span>  </li>
                    <li>Riddhi Display Equipments Pvt. Ltd. Was incepted in the year 1985 by a visionary industrialist Mr.Shailesh Patel. Though the beginning was humble, dreams and actions made it possible to rise to a leadership level. With a clear focus to bring innovation to food & beverages industry, Riddhi brand crafted display and kitchen equipments on the parameters of elegance, practicality and sustainability. Today, Riddhi brand enjoys highest market shares in display and kitchen equipments industry of India and products are manufactured as per the strict guidelines of ISO 9001:2015. With latest technology and modern machineries a state of the art manufacturing facility at Rajkot, spread in whooping area span of 1, 10,000 sq.ft. Each aspect of manufacturing process is handled and monitored by skilled and experienced manpower. All these together have helped brand Riddhi to serve varied needs of more than 3500 plus customers
                        satisfactorily.</li>
                    <li className=''><button className='px-10 rounded-md text-xl py-2 bg-red-600 font-bold text-white'>READ MORE</button></li>
                </ul>
            </div>
            <div>
                <img className='object-cover sm:w-[664px] sm:h-[523px]' src="https://www.riddhidisplay.com/wp-content/uploads/2021/04/experience-35.jpg" alt="expimg" />
            </div>
        </div>
    )
}

export default Experience;