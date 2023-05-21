import React from 'react'
import ahmedabad from '../../assets/Imageslist/ahmedabad.jpg'
import chennai from '../../assets/Imageslist/chennai.jpg'
import dubai from '../../assets/Imageslist/dubai.jpg'
import jaipur from '../../assets/Imageslist/jaipur.jpg'
import kolkata from '../../assets/Imageslist/kolkata.jpg'
import mumbai from '../../assets/Imageslist/mumbai.jpg'

const Present = () => {
    return (
        <div>
            <div className='py-20 my-10 w-full bg-[url("/src/assets/Imageslist-1/present-bg.jpg")]'>
                <h1 className='text-5xl font-bold text-gray-800 tracking-wide text-center mb-20'>We Are Present In</h1>

                <div className='grid md:grid-cols-6 sm:grid-cols-2 grid-cols-1 gap-8 mx-16'>
                    <div className=''>
                        <div className='flex justify-center items-center py-4'>
                            <img src={ahmedabad} alt="ahmedabad" />
                        </div>
                        <h3 className='text-2xl font-semibold py-2 text-center'>Ahmedabad</h3>
                    </div>
                    <div className=''>
                        <div className='flex justify-center items-center py-4'>
                            <img src={chennai} alt="chennai" />
                        </div>
                        <h3 className='text-2xl font-semibold py-2 text-center'>Chennai</h3>
                    </div>
                    <div className=''>
                        <div className='flex justify-center items-center py-4'>
                            <img src={dubai} alt="dubai" />
                        </div>
                        <h3 className='text-2xl font-semibold py-2 text-center'>Dubai</h3>
                    </div>
                    <div className=''>
                        <div className='flex justify-center items-center py-4'>
                            <img src={jaipur} alt="jaipur" />
                        </div>
                        <h3 className='text-2xl font-semibold py-2 text-center'>Jaipur</h3>
                    </div>
                    <div className=''>
                        <div className='flex justify-center items-center py-4'>
                            <img src={kolkata} alt="kolkata" />
                        </div>
                        <h3 className='text-2xl font-semibold py-2 text-center'>Kolkata</h3>
                    </div>
                    <div className=''>
                        <div className='flex justify-center items-center py-4'>
                            <img className='max-w-full w-56' src={mumbai} alt="mumbai" />
                        </div>
                        <h3 className='text-2xl font-semibold py-2 text-center'>Mumbai</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Present