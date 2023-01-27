import React from 'react'
import commitment from '../../assets/Imageslist/commitment-1.png'
import relationship from '../../assets/Imageslist/relationship.png'
import solution from '../../assets/Imageslist/solution.png'
import work from '../../assets/Imageslist/t-work.png'

const Ideology = () => {
  return (
    <div>
        <div className='py-10 w-full bg-[url("src/assets/Imageslist-1/ideology-left.png")]'>
                <h1 className='text-5xl font-bold text-gray-800 tracking-wide text-center mt-20'>Our Core Ideology</h1>
                <p className='text-gray-800 tracking-wide text-center mb-20'>To enable the customer's growth with Innovative Solution for success maximization</p>

                <div className='grid md:grid-cols-4 grid-cols-1 gap-8 mx-16'>
                    <div className='text-center py-4 px-7 box rounded-md bg-white'>
                        <div className='flex justify-center items-center py-4'>
                            <img src={commitment} alt="commitment" />
                        </div>
                        <h3 className='text-2xl font-bold pb-4'>Relationship for Life</h3>
                        <p>We will focused for our customer’s success. We will constantly be in touch with our stake holders and give them out of the box solution. We will invest to build the caliber of leadership and value adding.</p>
                    </div>
                    <div className='text-center py-4 px-7 box rounded-md bg-white'>
                        <div className='flex justify-center items-center py-4'>
                            <img src={relationship} alt="relationship" />
                        </div>
                        <h3 className='text-2xl font-bold pb-4'>Commitment</h3>
                        <p>We will be dedicated and determined to deliver, whatever we promise in-time. We will not over commit and under deliver. We will complete what we have started and bring it to a logical end.</p>
                    </div>
                    <div className='text-center py-4 px-7 box rounded-md bg-white'>
                        <div className='flex justify-center items-center py-4'>
                            <img src={solution} alt="solution" />
                        </div>
                        <h3 className='text-2xl font-bold pb-4'>Innovative Solution</h3>
                        <p>We will defy the conventional processes and explore the possibilities. We will constantly break our paradigms by entering into the unknown. We will constantly research, formulate and deliver innovative solutions</p>
                    </div>
                    <div className='text-center py-4 px-7 box rounded-md bg-white'>
                        <div className='flex justify-center items-center py-4'>
                            <img src={work} alt="work" />
                        </div>
                        <h3 className='text-2xl font-bold pb-4'>Team Work</h3>
                        <p>We will work as a TEAM (Together Efficiently Achieve More). We will work with utmost Brotherhood & Team Spirit to achieve greater organization as well as personal goal. We will play role of mentor for upliftment</p>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Ideology