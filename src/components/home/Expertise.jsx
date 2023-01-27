import React from 'react'
import attractive from '../../assets/Imageslist/attractive.png'
import exceQuality from '../../assets/Imageslist/exce-quality.png'
import sustainable from '../../assets/Imageslist/sustainable.png'

const Expertise = () => {
  return (
    <div>
        <div className='bg-gray-100 py-28'>
                <h1 className='text-5xl font-bold text-gray-800 tracking-wide text-center mb-20'>Some of Our Expertise</h1>

                <div className='grid md:grid-cols-3 grid-cols-1 gap-8 mx-16'>
                    <div className='text-center py-7 px-7 box rounded-lg bg-white'>
                        <div className='flex justify-center items-center py-2'>
                            <img src={attractive} alt="commitment" />
                        </div>
                        <h3 className='text-2xl text-gray-800 font-extrabold py-2'>Excellent Quality</h3>
                        <p>Excellent quality material offering high weather resistance to keep your food fresh and fungus free.</p>
                    </div>
                    <div className='text-center py-7 px-7 box rounded-lg bg-white'>
                        <div className='flex justify-center items-center py-2'>
                            <img src={exceQuality} alt="excellence" />
                        </div>
                        <h3 className='text-2xl text-gray-800 font-extrabold py-2'>Attractive Designs</h3>
                        <p>Glass encased attractive designs with superior finish. Effective at preventing stains and also easy to clean</p>
                    </div>
                    <div className='text-center py-7 px-7 box rounded-lg bg-white'>
                        <div className='flex justify-center items-center py-2'>
                            <img src={sustainable} alt="quality" />
                        </div>
                        <h3 className='text-2xl text-gray-800 font-extrabold py-2'>Sustainable Products</h3>
                        <p>Can sustain heavy usage, thus lasts longer. Firmly assembled body to prevent loosening of parts.</p>
                    </div>
                </div>
                
            </div>
    </div>
  )
}

export default Expertise