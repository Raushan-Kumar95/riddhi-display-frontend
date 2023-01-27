import React from 'react'
import counter from '../../assets/Imageslist/counter.png'

const SuccessStory = () => {
    return (
        <div>
            <div className='py-20 my-10 grid md:grid-cols-4 grid-cols-1 gap-8 mx-16'>
                <div>
                    <h1 className='text-5xl font-bold text-gray-800 tracking-wide text-start py-16'>Our Success Story</h1>
                </div>
                <div className='bg-red-400 text-center py-3 px-3 text-white'>
                    <div className='border-2 border-white p-10'>
                        <div className='flex justify-center items-center py-2'>
                            <img src={counter} alt="counter" />
                        </div>
                        <h3 className='text-4xl font-extrabold py-2'>20+</h3>
                        <p>More Than Countries</p>
                    </div>
                </div>
                <div className='bg-red-400 text-center py-3 px-3 text-white'>
                    <div className='border-2 border-white p-10'>
                        <div className='flex justify-center items-center py-2'>
                            <img src={counter} alt="counter" />
                        </div>
                        <h3 className='text-4xl font-extrabold py-2'>400+</h3>
                        <p>Projects Completed</p>
                    </div>
                </div>
                <div className='bg-red-400 text-center py-3 px-3 text-white'>
                    <div className='border-2 border-white p-10'>
                        <div className='flex justify-center items-center py-2'>
                            <img src={counter} alt="counter" />
                        </div>
                        <h3 className='text-4xl font-extrabold py-2'>35Yr</h3>
                        <p>Company Span</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SuccessStory