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
            <div className='bg-gray-100 py-20 my-10'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-8 mx-16'>
                    <div className='h-screen px-28'>
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
                                <img className='h-screen' src={ceCertificate} alt="ceCertificate" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img className='h-screen' src={isoCertificate} alt="isoCertificate" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='flex flex-col gap-y-6'>
                        <h1 className=' text-4xl font-bold'>Our History</h1>
                        <p className='text-lg'>Riddhi Display Equipment Pvt. Ltd. is an ISO 9001:2015 Certified Rajkot-based Display Equipment Company that manufactures display cases for the hotel, cafe, and bakery industry.</p>
                        <p className='text-lg'>This company came into existence in 1985 as a result of the innovative mind and dedicated efforts of Mr. Shailesh Patel. Today, Riddhi Display is the most renowned and leading industry that provides display cases in India, Dubai, Sri Lanka, Australia, and the UK.</p>
                        <p className='text-lg'>Being the leading producer of most innovative and amazing cases that enhances the visibility of food items, maintains their freshness, and nutritional value, and store them with hygiene, <a className='text-blue-700' href="/">Riddhi Display</a> has become the most preferred choice in the beverage industry.</p>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default CompanyHistory