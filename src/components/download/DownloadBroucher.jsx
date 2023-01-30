import React from 'react'

const DownloadBroucher = () => {
    return (
        <>
            <div className="my-16 mx-8  flex flex-col lg:items-center ">
                <div className="text-3xl  md:text-4xl lg:text-5xl lg:w-[900px] font-bold  ">Fill Your Detail Below To Download Our Brochure</div>
                  <hr className="w-1/3 md:w-1/6 mt-10 relative left-[50%] translate-x-[-50%] md:left-0 md:translate-x-[0] border-black "/>
                <div className="my-10">
                    <form  className="flex flex-col gap-5 lg:w-[900px]">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="font-bold">First Name*</label>
                            <input type="text" className="border-2 p-2" value=""  required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="font-bold">Last Name*</label>
                            <input type="text" className="border-2 p-2" value=""  required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="font-bold">Company Name*</label>
                            <input type="text" className="border-2 p-2" value=""  required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="font-bold">Mobile Number*</label>
                            <input type="text" className="border-2 p-2" value=""  required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="font-bold ">Email Address*</label>
                            <input type="text" className="border-2 p-2" value=""  required />
                        </div>
                        <div className="flex flex-col md:flex-row gap-2 md:gap-10">
                            <div className="flex flex-col gap-2">
                                <label htmlFor="" className="font-bold">Country*</label>
                                <input type="text" className="border-2 p-2" value=""  required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="" className="font-bold">State*</label>
                                <input type="text" className="border-2 p-2" value=""  required />
                            </div>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="" className="font-bold">City*</label>
                                <input type="text" className="border-2 p-2" value=""  required />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="" className="font-bold">Select Broucher*</label>
                            <select className="border-2 p-2 bg-[url('https://www.riddhidisplay.com/wp-content/themes/riddhi-display/images/down-img.png')]  bg-no-repeat appearance-none bg-[center_right_1rem] bg-[length:20px_15px] ">
                                    <option value="">Display Broucher</option>
                                    <option value="">kitchen Broucher</option>
                            </select>
                        </div>
                        <div className="flex flex-col">

                            <input type="submit" className="border-2 md:w-1/3 p-2 bg-red-700 font-bold text-white cursor-pointer" value="Download Broucher" />
                        </div>


                    </form>
                </div>
            </div>

        </>
    )
}

export default DownloadBroucher