import React from 'react'
import commitment from '../../assets/Imageslist/commitment.png'
import excellence from '../../assets/Imageslist/excellence.png'
import quality from '../../assets/Imageslist/quality.png'
import service from '../../assets/Imageslist/service.png'

const Service = () => {
    return (
        <div>
            <div className='bg-gray-100 py-2'>
                <h1 className='text-4xl font-extrabold text-gray-800 tracking-wide text-center my-20'>Pre & post Sales Service</h1>

                <div className='grid md:grid-cols-4 grid-cols-1 gap-8 mx-16'>
                    <div className='text-center py-10 px-10 box rounded-xl bg-white'>
                        <div className='flex justify-center items-center py-4'>
                            <img src={commitment} alt="commitment" />
                        </div>
                        <h3 className='text-lg font-semibold'>Our Quality</h3>
                        <p>We always try to deliver best so that you can maximize your output on each investment. It will surely add some.</p>
                    </div>
                    <div className='text-center py-10 px-10 box rounded-xl bg-white'>
                        <div className='flex justify-center items-center py-4'>
                            <img src={excellence} alt="excellence" />
                        </div>
                        <h3 className='text-lg font-semibold'>Our Commitment</h3>
                        <p>We never believe in incomplete end. Thus, we help you until your investment is capitalized into a valuable and</p>
                    </div>
                    <div className='text-center py-10 px-10 box rounded-xl bg-white'>
                        <div className='flex justify-center items-center py-4'>
                            <img src={quality} alt="quality" />
                        </div>
                        <h3 className='text-lg font-semibold'>Our Excellence</h3>
                        <p>We believe in long-term relations so we never end our relations or services after one sale.</p>
                    </div>
                    <div className='text-center py-10 px-10 box rounded-xl bg-white'>
                        <div className='flex justify-center items-center py-4'>
                            <img src={service} alt="service" />
                        </div>
                        <h3 className='text-lg font-semibold'>Our Service</h3>
                        <p>We have only one goal to deliver best and earn faith of the customer.</p>
                    </div>
                </div>
                <div className='flex justify-center items-center my-16'>
                <button className=' bg-red-600 text-xl px-16 py-3 font-bold rounded-lg text-white'>VIEW ALL SERVICES</button>
                </div>
                
            </div>
        </div>
    )
}

export default Service