import React from 'react'
import AMCaftersale from '../../assets/Imageslist/AMC-after-sale.jpg'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";


const AfterSaleService = () => {
    return (
        <div className='bg-gray-100'>
            <div className=' py-10'>
                <h1 className='md:text-5xl text-3xl font-extrabold text-center'><span className='text-red-600'>After sale service</span><span> or AMC</span></h1>

                <div className='flex md:flex-row flex-col gap-10 md:my-16 md:mx-16 my-8 mx-8'>
                    <div>
                        <img className='rounded-3xl' src={AMCaftersale} alt="LPGpipeline" />
                    </div>

                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper max-w-full">
                        <SwiperSlide>
                            <div className='flex flex-col gap-6 md:text-lg text-base w-full md:px-20 px-5'>
                                <p>Keeping your kitchen running smoothly for long years is imperative to your operation’s success. It is a new way of Kitchen being oﬀered exclusively by RDEPL for its valued customers. By extending this promise we show that we at RDEPL always care for your Kitchen needs. It is a promise that ensures complete freedom from all worries related to our product.</p>
                                <p>AMC Programs ensure that we are always there at each step. Just pick up a phone, and we are there at your service. We ensure the smooth functioning of your product, through assured maintenance visits. Our absolutely genuine spare assurance means that you no longer need to worry over spares!</p>
                                <h2 className='text-2xl font-bold'>Support & Service</h2>
                                <a className='text-3xl text-red-600 font-bold' href="/tel: +919099915545">+91 90999 15545</a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col gap-6 md:text-lg text-base w-full md:px-20 px-5'>
                                <h2 className='text-xl font-bold'>Three Parts of an Excellent Service</h2>
                                <h3 className='text-xl font-semibold'>Spare Parts</h3>
                                <p className='text-lg'>
The best guarantee. From experience, we know that quality and the guarantee of spare parts tested in the machines are essential for ensuring the correct performance and durability</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='flex flex-col gap-6 md:text-lg text-base w-full md:px-20 px-5'>
                                <h2 className='text-xl font-bold'>Three Parts of an Excellent Service</h2>
                                <h3 className='text-xl font-semibold'>Spare Parts</h3>
                                <p className='text-lg'>
The best guarantee. From experience, we know that quality and the guarantee of spare parts tested in the machines are essential for ensuring the correct performance and durability</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>


                </div>

            </div>
        </div>
    )
}

export default AfterSaleService