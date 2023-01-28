import React from 'react'

const GetInTouch = () => {
    return (

        <div className='flex py-12 gap-12 px-16'>
            <div className='GetInTouch flex flex-col gap-4'>
                <h1 className='uppercase text-red-400 font-bold text-5xl'>get in <span className='text-black'> touch</span></h1>
                <p>If you have any questions, please feel free to contact us.</p>

                <div className='flex gap-4'>
                    <ul>
                        <i className="fa fa-map-marker text-red-400 text-3xl" aria-hidden="true"></i>
                    </ul>
                    <ul>
                        <h1 className='font-bold'>RAJKOT ADDRESS</h1>
                        <p>Rajkot-Gondal National Highway 27, Gondal, Rajkot, Bhojapara - 360311 (Gujarat)</p>
                    </ul>
                </div>
                <div className='flex gap-4'>
                    <ul>
                        <i className="fa fa-map-marker text-red-400 text-3xl" aria-hidden="true"></i>
                    </ul>
                    <ul>
                        <h1 className='font-bold'>RAJKOT ADDRESS</h1>
                        <p>Rajkot-Gondal National Highway 27, Gondal, Rajkot, Bhojapara - 360311 (Gujarat)</p>
                    </ul>
                </div>
                <div className='flex gap-4'>
                    <ul>
                        <i className="fa fa-map-marker text-red-400 text-3xl" aria-hidden="true"></i>
                    </ul>
                    <ul>
                        <h1 className='font-bold'>RAJKOT ADDRESS</h1>
                        <p>Rajkot-Gondal National Highway 27, Gondal, Rajkot, Bhojapara - 360311 (Gujarat)</p>
                    </ul>
                </div>
            </div>

{/* col-2 */}
            <div className="requestAQuote flex flex-col gap-2 w-full">
                <h1 className='uppercase text-black font-bold text-5xl'>REQUEST <span className='text-red-400'> A QUOTE</span></h1>

                <div className='bg-gray-100 py-4'>
                    <form action="" className='flex flex-col flex-wrap gap-4'>
                        <ul className='gap-4 flex px-4'>
                            <input  className='px-3 py-2'  type="text" name="fname" placeholder='First Name' id="" />
                            <input  className='px-3 py-2'  type="text" name="lname" placeholder='Last Name' id="" />
                        </ul>
                        <ul className='gap-4 flex px-4'>
                            <input className='px-3 py-2' type="email" name="email" placeholder='Email Address' id="" />
                            <input  className='px-3 py-2'  type="text" name="pnum" placeholder='Phone Number' id="" />
                        </ul>
                        <label className='px-4 bg-white py-4 mx-4' htmlFor="">
                            <select className='w-full py-2 px-2' name="selectedFruit" defaultValue="--Selected Inquiry Type--">
                                <option value="apple">Buying Products</option>
                                <option value="banana">Services</option>
                                <option value="orange">Vendor and Supplier</option>
                                <option value="orange">Customer Services</option>
                                <option value="orange">Career Related</option>


                            </select>
                        </label>
                        
                        <textarea placeholder='Message' className='mx-4 px-4' name="message" id="message" cols="30" rows="10"></textarea>
                        <div className='mx-4'>
                        <button className='px-10 rounded-md text-md py-2 bg-red-600 font-bold text-white'>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default GetInTouch