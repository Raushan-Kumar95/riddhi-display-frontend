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
                        <div className='flex flex-col justify-center items-center py-48 text-white'>
                            <h4 className='text-2xl p-6'>WHAT DIFFERENTIATES US?</h4>
                            <div className='text-7xl font-extrabold'>
                                <span>We Believe In </span><span className='text-red-600'>Our Quality</span>
                            </div>
                            <p className='text-center text-2xl p-7 w-[1150px]'>We always try to deliver best so that you can maximize your output on each investment. It will surely add some.</p>
                            <button className='bg-red-600 py-3 px-16 rounded-xl font-bold text-xl'>OUR SERVICES</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-screen w-screen bg-[url("src/assets/images/banner_slider/slider-2-scaled-1.jpg")] bg-cover'>
                        <div className='flex flex-col justify-center items-center py-48 text-white'>
                            <h4 className='text-2xl p-6'>COMITTED TO YOUR SUCCESS</h4>
                            <div className='text-7xl font-extrabold'>
                                <span>Delivering</span><span className='text-red-600'>The Promise</span>
                            </div>
                            <p className='text-center text-2xl p-7 w-[1150px]'>We will be dedicated and determined to deliver, whatever we promise in-time. We will not over commit and under deliver.</p>
                            <button className='bg-red-600 py-3 px-16 rounded-xl font-bold text-xl'>OUR SERVICES</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default BannerSlider