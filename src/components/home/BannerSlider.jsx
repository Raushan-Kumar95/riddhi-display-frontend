import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import slider2 from '../../assets/images/banner_slider/slider-2-scaled-1.jpg'
import slider3 from '../../assets/images/banner_slider/IMG_0068-F-scaled-1.jpg'

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
                    <div className='h-screen w-screen bg-[url("src/assets/images/banner_slider/slider-2-scaled-1.jpg")]'>
                        {/* <img className='w-screen' src={slider2} alt="slider1" /> */}
                        <div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-screen w-screen bg-[url("src/assets/images/banner_slider/slider-2-scaled-1.jpg")]'>
                        {/* <img className='w-screen' src={slider2} alt="slider1" /> */}
                        <div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-screen w-screen bg-[url("src/assets/images/banner_slider/slider-2-scaled-1.jpg")]'>
                        {/* <img className='w-screen' src={slider2} alt="slider1" /> */}
                        <div>

                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default BannerSlider