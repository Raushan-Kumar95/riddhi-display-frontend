import React from 'react'

const Experience = () => {
    return (
        <div className='flex sm:flex-row flex-col-reverse sm:px-16 px-4 gap-12  py-12 '>
            <div className='sm:w-1/2'>
                <ul className='flex flex-col justify-between gap-y-4 sm:h-[523px]'>
                    <li className='text-5xl font-bold text-red-500'>15 Years of <span className='text-black'>Experience</span>  </li>
                    <li>"Darsh Manufacturing" Company is an ISO 9001:2008 certified company in the field of innovative modern solution for commercial kitchen.
Darsh Manufacturing is a company by specialized professionals with over 5 years experience in the field. The company offers a brand base of knowledge and the support highly technical staff in the following areas:
Darsh Manufacturing has been Serving Hospitality Industry as one of the leading suppliers and promotoers of the Food Service equipment in India. Our focus is on delivering highest level of customer service while supplying commercial kitchen equipment & Spare parts with an optimized lead time & budget.
Darsh Manufacturing has ben pioneer in introducing some of the latest cutting edge international technologies as its contribution towards India's food service industry. We have completed many turnkey contracts using a bouquet of International Branded Standard Equipment & custom fabricated kitchen equipment of the good quality.
We believe in offering an economical & time saving solution through the products and service we cater. We are delighted to assist all our valuable customers who want to renovate their kitchen or replace their kitchen equipment, they can consult our professionally trained sales team of kitchen layout, kitchen equipment, kitchen exhaust system & Refrigeration equipment.
Customers can experience a hassle free kitchen facelift by entrusting the co-ordination in our efficient and trustworthy hands. As after sale service, we have a team of trained engineers to troubleshoot and provide repair & maintance services under our Darsh Manufacturing.</li>
                    <li className=''><button className='px-10 rounded-md text-xl py-2 bg-red-600 font-bold text-white'>READ MORE</button></li>
                </ul>
            </div>
            <div>
                <img className='object-cover sm:w-[664px] sm:h-[523px]' src="https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="expimg" />
            </div>
        </div>
    )
}

export default Experience;