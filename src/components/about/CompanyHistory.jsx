import React from 'react'
import ceCertificate from '../../assets/Imageslist-1/ce-certificate-777.jpg'
import isoCertificate from '../../assets/Imageslist-1/iso-certificate-777.jpg'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Autoplay } from "swiper";

const CompanyHistory = () => {
    return (
        <div>
            <div className='bg-gray-100 py-5 my-20'>
                <div className='grid md:grid-cols-2 sm:grid-cols-1 md:gap-8 gap-2 md:mx-16 mx-2 my-2'>
                    <div className='h-screen w-full md:px-28 px-2'>
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
                                <img className='h-screen w-full md:py-20 sm:py-5' src={ceCertificate} alt="ceCertificate" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='h-screen w-full md:py-20 sm:py-5' src={isoCertificate} alt="isoCertificate" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='flex flex-col gap-6 px-5 md:py-20'>
                        <h1 className=' md:text-4xl text-2xl font-bold text-gray-800'>Our History</h1>
                        <p className='md:text-lg text-base'>Darsh Manufacturing is an ISO 9001:2015 Certified Rajkot-based Display Equipment Company that manufactures display cases for the hotel, cafe, and bakery industry.</p>
                        <p className='md:text-lg text-base'>This company came into existence in 1985 as a result of the innovative mind and dedicated efforts of Mr. Shailesh Patel. Today, Riddhi Display is the most renowned and leading industry that provides display cases in India, Dubai, Sri Lanka, Australia, and the UK.</p>
                        <p className='md:text-lg text-base'>Being the leading producer of most innovative and amazing cases that enhances the visibility of food items, maintains their freshness, and nutritional value, and store them with hygiene, <a className='text-blue-700' href="/">Darsh Manufacturing</a> has become the most preferred choice in the beverage industry.</p>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default CompanyHistory