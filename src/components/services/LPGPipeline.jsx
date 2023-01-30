import React from 'react'
import LPGpipeline from '../../assets/Imageslist/LPG-pipe-line.jpg'
const LPGPipeline = () => {
    return (
        <div className='bg-gray-100'>
            <div className=' py-10'>
                <h1 className='md:text-5xl text-3xl font-extrabold text-center'><span className='text-red-600'>LPG Pipeline</span><span>Design Installation</span></h1>

                <div className='flex md:flex-row flex-col gap-10 md:my-16 md:mx-16 my-8 mx-8'>
                    <div>
                        <img className='rounded-3xl' src={LPGpipeline} alt="LPGpipeline" />
                    </div>
                    <div className='flex flex-col gap-6 md:text-lg text-base md:w-[1150px]'>
                        <p>Ensuring a standardized L.P.G pipeline in Kitchen is the main objective of the RDEPL Installation team. L.P.G Pipeline Installation needs an experienced workforce in order to maintain the Safety of the Kitchen & its equipment.</p>
                        <p>RDEPL guarantees the safety of your kitchen and uses only the best quality in C- class branded pipelines and supporting xtures to maintain all the safety regulations.</p>
                        <h1 className='text-2xl font-bold'>SHOW IN PROCESS</h1>
                        <p className="before:content-['>'] before:pr-2">Estimating the gas consumption of the <a href="/Services" className='text-cyan-800 font-semibold'>commercial kitchen equipment</a> at peak load.</p>
                        <p className="before:content-['>'] before:pr-2">Visiting the site to determine technical & practical implementation of L.P. G Pipelines.</p>
                        <p className="before:content-['>'] before:pr-2">Creating the detailed CAD layout of the pipeline showing all required stations where the L.P.G pipeline will be available in the kitchen.</p>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default LPGPipeline