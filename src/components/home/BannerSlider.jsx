import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper";


const BannerSlider = () => {
    return (
        <div>
            <div className='mb-10'>
                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={30}
                    autoplay={{ delay: 3000 }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Autoplay]}

                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className='h-screen w-screen bg-[url("src/assets/images/banner_slider/IMG_0068-F-scaled-1.jpg")] bg-cover'>
                            <div className='w-screen h-screen absolute bg-black  opacity-50'></div>
                            <div className='relative z-10 flex flex-col justify-center items-center py-40 text-white md:pl-0 sm:pl-10'>
                                <h4 className='md:text-2xl text-xl p-6'>WHAT DIFFERENTIATES US?</h4>
                                <div className='md:text-7xl text-3xl font-extrabold'>
                                    <span>We Believe In </span><span className='text-red-500'>Our Quality</span>
                                </div>
                                <p className='text-center md:text-2xl text-lg p-7 md:w-[1150px] sm:w-[600px] w-[450px]'>We always try to deliver best so that you can maximize your output on each investment. It will surely add some.</p>
                                <button className='bg-red-600 md:py-3 py-1 md:px-16 px-8 md:rounded-xl rounded-lg font-bold text-xl'>OUR SERVICES</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='h-screen w-screen bg-[url("src/assets/images/banner_slider/slider-2-scaled-1.jpg")] bg-cover'>
                        <div className='w-screen h-screen absolute bg-black  opacity-50'></div>
                            <div className='relative z-10 flex flex-col justify-center items-center py-40 text-white md:pl-0 sm:pl-10'>
                                <h4 className='md:text-2xl text-xl p-6'>COMITTED TO YOUR SUCCESS</h4>
                                <div className='md:text-7xl text-4xl font-extrabold'>
                                    <span>Delivering</span><span className='text-red-500'>The Promise</span>
                                </div>
                                <p className='text-center md:text-2xl text-lg p-7 md:w-[1150px] sm:w-[600px] w-[450px]'>We will be dedicated and determined to deliver, whatever we promise in-time. We will not over commit and under deliver.</p>
                                <button className='bg-red-600 md:py-3 py-1 md:px-16 px-8 md:rounded-xl rounded-lg font-bold text-xl'>OUR SERVICES</button>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default BannerSlider