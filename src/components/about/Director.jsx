import director1 from '../../assets/Imageslist/director_1.jpg'
import director2 from '../../assets/Imageslist/director_2.jpg'
import director3 from '../../assets/Imageslist/director_3.jpg'
import director4 from '../../assets/Imageslist/director_4.jpg'

const Director = () => {

    return (
        <div>
            <div className=' py-10 my-10'>
                <h1 className='text-5xl font-bold text-gray-800 tracking-wide text-center my-20'>Our Directors</h1>

                <div className='grid md:grid-cols-4 grid-cols-1 gap-8 mx-16'>
                    <div className='text-center box  rounded-xl bg-white py-3 px-3 transition-all squareLine1'>

                        <div className="border hover:border-red-700 rounded-lg" >
                            
                            <div className=''>
                                <img className='rounded-lg' src={director1} alt="director" />
                            </div>
                            <h3 className='text-lg font-semibold pt-3'>Shailesh Pipaliya</h3>
                            <p>Managing Director</p>
                            <div className=' relative top-7 text-4xl text-gray-400 plusIcon1'><i class="fa-solid fa-circle-plus"></i></div>

                        </div>
                    </div>
                    <div className='text-center box  rounded-xl bg-white py-3 px-3 transition-all squareLine1'>

                        <div className="border hover:border-red-700 rounded-lg" >
                            
                            <div className=''>
                                <img className='rounded-lg' src={director2} alt="director" />
                            </div>
                            <h3 className='text-lg font-semibold pt-3'>Jignesh Pipaliya</h3>
                            <p>Production Director</p>
                            <div className=' relative top-7 text-4xl text-gray-400 plusIcon1'><i class="fa-solid fa-circle-plus"></i></div>

                        </div>
                    </div>
                    <div className='text-center box  rounded-xl bg-white py-3 px-3 transition-all squareLine1'>

                        <div className="border hover:border-red-700 rounded-lg" >
                            
                            <div className=''>
                                <img className='rounded-lg' src={director3} alt="director" />
                            </div>
                            <h3 className='text-lg font-semibold pt-3'>Hanshaben Pipaliya</h3>
                            <p>Finance Director</p>
                            <div className=' relative top-7 text-4xl text-gray-400 plusIcon1'><i class="fa-solid fa-circle-plus"></i></div>

                        </div>
                    </div>
                    <div className='text-center box  rounded-xl bg-white py-3 px-3 transition-all squareLine1'>

                        <div className="border hover:border-red-700 rounded-lg" >
                            
                            <div className=''>
                                <img className='rounded-lg' src={director4} alt="director" />
                            </div>
                            <h3 className='text-lg font-semibold pt-3'>Jyotish Kapuriya</h3>
                            <p>Sales & Marketing Director</p>
                            <div className=' relative top-7 text-4xl text-gray-400 plusIcon1'><i class="fa-solid fa-circle-plus"></i></div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Director