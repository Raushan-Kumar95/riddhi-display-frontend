import React from 'react'
import commitment from '../assets/Imageslist/commitment.png'
import excellence from '../assets/Imageslist/excellence.png'
import quality from '../assets/Imageslist/quality.png'
import service from '../assets/Imageslist/service.png'

const Service = () => {
    return (
        <div>
            <div>
                <h1 className='text-4xl font-extrabold text-gray-800 tracking-wide text-center my-20'>Pre & post Sales Service</h1>

                <div className='grid grid-cols-4 gap-5 mx-16'>
                    <div className='box rounded-xl'>
                        <img src={commitment} alt="commitment" />
                        <h3 className='text-lg'>Our Quality</h3>
                        <p>We always try to deliver best so that you can maximize your output on each investment. It will surely add some.</p>
                    </div>
                    <div className='box rounded-xl'>
                        <img src={excellence} alt="excellence" />
                        <h3 className='text-lg'>Our Commitment</h3>
                        <p>We never believe in incomplete end. Thus, we help you until your investment is capitalized into a valuable and</p>
                    </div>
                    <div className='box rounded-xl'>
                        <img src={quality} alt="quality" />
                        <h3 className='text-lg'>Our Excellence</h3>
                        <p>We believe in long-term relations so we never end our relations or services after one sale.</p>
                    </div>
                    <div className='box rounded-xl'>
                        <img src={service} alt="service" />
                        <h3 className='text-lg'>Our Service</h3>
                        <p>We have only one goal to deliver best and earn faith of the customer.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service