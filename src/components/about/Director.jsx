import React from 'react'
import director from '../../assets/Imageslist/director_1.jpg'

const Director = () => {
    return (
        <div>
            <div className='bg-gray-100 py-10 my-10'>
                <h1 className='text-5xl font-bold text-gray-800 tracking-wide text-center my-20'>Pre & post Sales Service</h1>

                <div className='grid md:grid-cols-4 grid-cols-1 gap-8 mx-16'>
                    <div className='text-center box  rounded-xl bg-white py-3 px-3'>
                        <div className='border-2 border-red-700 p-10'>
                            <div className=''>
                                <img src={director} alt="director" />
                            </div>

                            <h3 className='text-lg font-semibold'>Shailesh Pipaliya</h3>
                            <p>Managing Director</p>

                            <div className='relative top-14'><i class="fa-solid fa-circle-plus"></i></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Director