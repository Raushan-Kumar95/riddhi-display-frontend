import React from 'react'

const Subscribe = () => {
    return (
        <section className='Subscribe-Section py-12 px-2 bg-grey-300 text-gray-700 flex w-full justify-center items-center'>
            <form className='flex md:gap-32 gap-4 md:flex-row flex-col items-center justify-between' action="">
                <div>
                    <h1 className='font-bold sm:text-3xl'>
                        Get Inspired by the full color Kitchen
                        <br className='sm:block hidden' /> Brochure and Buying Guides.
                    </h1>
                </div>

                <div className='flex px-2 gap-4'>
                    <input className='w-full border border-1 border-black px-2' type="text" placeholder='Enter Your Email Address' />
                    <button className='px-4 py-2 bg-red-700 text-white rounded-md'>Subscribe</button>
                </div>
            </form>

        </section>
    )
}

export default Subscribe