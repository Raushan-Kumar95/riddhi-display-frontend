import director1 from '../../assets/Imageslist/director_1.jpg'
import director2 from '../../assets/Imageslist/director_2.jpg'
import director3 from '../../assets/Imageslist/director_3.jpg'
import director4 from '../../assets/Imageslist/director_4.jpg'

const Director = () => {

    return (
        <div>
            <div className=' py-5 my-5'>
                <h1 className='text-5xl font-bold text-gray-800 tracking-wide text-center my-20'>Our Directors</h1>

                <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mx-16'>
                    <div className=' text-center box  rounded-xl bg-white py-3 px-3 transition-all squareLine1'>

                        <div className="border hover:border-red-700 rounded-lg" >
                            
                            <div className=''>
                                <img className='rounded-lg w-full' src={director1} alt="director" />
                            </div>
                            <h3 className='md:text-2xl text-lg font-semibold pt-3 text-gray-800'>Shailesh Pipaliya</h3>
                            <p className='md:text-xl'>Managing Director</p>
                            <div className=' relative top-7 text-4xl text-gray-400 plusIcon1'><i class="fa-solid fa-circle-plus"></i></div>

                        </div>
                    </div>
                    <div className='text-center box  rounded-xl bg-white py-3 px-3 transition-all squareLine1'>

                        <div className="border hover:border-red-700 rounded-lg" >
                            
                            <div className=''>
                                <img className='rounded-lg w-full' src={director2} alt="director" />
                            </div>
                            <h3 className='md:text-2xl text-lg font-semibold pt-3 text-gray-800'>Jignesh Pipaliya</h3>
                            <p className='md:text-xl text-base'>Production Director</p>
                            <div className=' relative top-7 text-4xl text-gray-400 plusIcon1'><i class="fa-solid fa-circle-plus"></i></div>

                        </div>
                    </div>
                    <div className='text-center box  rounded-xl bg-white py-3 px-3 transition-all squareLine1'>

                        <div className="border hover:border-red-700 rounded-lg" >
                            
                            <div className=''>
                                <img className='rounded-lg w-full' src={director3} alt="director" />
                            </div>
                            <h3 className='md:text-2xl text-lg font-semibold pt-3 text-gray-800'>Hanshaben Pipaliya</h3>
                            <p className='md:text-xl text-base'>Finance Director</p>
                            <div className=' relative top-7 text-4xl text-gray-400 plusIcon1'><i class="fa-solid fa-circle-plus"></i></div>

                        </div>
                    </div>
                    <div className='text-center box  rounded-xl bg-white py-3 px-3 transition-all squareLine1'>

                        <div className="border hover:border-red-700 rounded-lg" >
                            
                            <div className=''>
                                <img className='rounded-lg' src={director4} alt="director" />
                            </div>
                            <h3 className='md:text-2xl text-lg font-semibold pt-3 text-gray-800'>Jyotish Kapuriya</h3>
                            <p className='md:text-xl text-base'>Sales & Marketing Director</p>
                            <div className=' relative top-7 text-4xl text-gray-400 plusIcon1'><i class="fa-solid fa-circle-plus"></i></div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Director