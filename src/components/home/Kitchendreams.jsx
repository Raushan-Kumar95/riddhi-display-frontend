import React from 'react'


const Kitchendreams = () => {
    return (
        <>
            <div className=" kitchendreams flex  flex-col border-2 border-red-600 rounded-md  justify-end mx-4 md:mx-8 px-16 pt-8 pb-24 md:p-16 bg-[url('src/assets/Imageslist/kitchen-dreams.jpg')] bg-no-repeat bg-left md:bg-right  ">
                <div className=" text-[22px] font-bold  ">
                    <div className="md:w-[400px] md:text-[26px] ">
                        We Can Build You The Kitchen of Your Dreams
                    </div>
                    
                </div>
                <div className="">
                <a className="text-white text-[18px] md:p-4 relative  px-8 py-4 uppercase font-bold md:px-16 top-6  bg-red-500 rounded-2xl" href="#">Get A Free Quote</a>
                </div>
            </div>
        </>
    )
}

export default Kitchendreams