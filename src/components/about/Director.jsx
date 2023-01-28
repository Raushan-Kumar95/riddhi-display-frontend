import React, { useState } from 'react'
import director from '../../assets/Imageslist/director_1.jpg'

const Director = () => {

    // function MouseOver(){
    //     document.getElementById('squareLine').classList.add('border-red-700')
    //     document.getElementById('squareLine').classList.add('border-2')
    //     document.getElementById('plus').classList.add('text-red-800')
    // }
    // function MouseOut(){
    //     document.getElementById('squareLine').classList.remove('border-red-700')
    //     document.getElementById('squareLine').classList.remove('border-2')
    //     document.getElementById('plus').classList.remove('text-red-800')
    // }

    // function MouseOver(e){
    //    console.log(e.target.getElementsByClassName('plus')); 
    //    e.target.getElementById('squareLine').classList.add('border-red-700')
    // } 

    const [hover , setHover] = useState(false);

    const handlemousehover = () =>{
        const test=true
        setHover(test);
    } 
    const handlemouseout = () =>{
        const test=false
        setHover(test);
    } 


    return (
        <div>
            <div className='bg-gray-100 py-10 my-10'>
                <h1 className='text-5xl font-bold text-gray-800 tracking-wide text-center my-20'>Pre & post Sales Service</h1>

                <div className='grid md:grid-cols-4 grid-cols-1 gap-8 mx-16'>
                    <div className='text-center box  rounded-xl bg-white py-3 px-3 transition-all' onMouseOver={handlemousehover} onMouseOut={handlemouseout}>
                        <div className={hover ? "border border-red-700": ""} id='squareLine'>
                            <div className=''>
                                <img src={director} alt="director" />
                            </div>
                            <h3 className='text-lg font-semibold pt-3'>Shailesh Pipaliya</h3>
                            <p>Managing Director</p>
                            <div className=' relative top-7 text-4xl text-gray-400 plus'><i class="fa-solid fa-circle-plus"></i></div>
                        </div>
                    </div>
                    <div className='text-center box  rounded-xl bg-white py-3 px-3 transition-all' onMouseOver={handlemousehover} onMouseOut={handlemouseout}>
                        <div className={hover ? "border border-red-700": ""} id='squareLine'>
                            <div className=''>
                                <img src={director} alt="director" />
                            </div>
                            <h3 className='text-lg font-semibold pt-3'>Shailesh Pipaliya</h3>
                            <p>Managing Director</p>
                            <div className=' relative top-7 text-4xl text-gray-400 plus'><i class="fa-solid fa-circle-plus"></i></div>
                        </div>
                    </div>
                    <div className='text-center box  rounded-xl bg-white py-3 px-3 transition-all' onMouseOver={handlemousehover} onMouseOut={handlemouseout}>
                        <div className={hover ? "border border-red-700": ""} id='squareLine'>
                            <div className=''>
                                <img src={director} alt="director" />
                            </div>
                            <h3 className='text-lg font-semibold pt-3'>Shailesh Pipaliya</h3>
                            <p>Managing Director</p>
                            <div className=' relative top-7 text-4xl text-gray-400 plus'><i class="fa-solid fa-circle-plus"></i></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Director