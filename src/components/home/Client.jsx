import React from 'react'
import Review_Star from '../../assets/Imageslist-1/review-star.png'


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";


const Client = () => {
    return (
        <>


            <div className='py-10 bg-gray-100'>
                <h1 className='text-4xl font-extrabold text-gray-800 tracking-wide capitalize text-center mt-20'>What our client say</h1>
                <div className="my-5 capitalize text-center">Our Client's Reviews</div>

                <div className="bg-white px-2 py-8 md:p-16 mx-8 rounded-3xl shadow-lg">

                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <div className="flex flex-col justify-center items-center">
                                <div className="md:text-3xl font-extrabold">Mr. Natwarlal Sharda</div>
                                <div className="">Kanha Sweets</div>
                                <p className="md:w-[600px] xl:w-[900px] text-center text-gray-500 my-4">
                                    The best in class! Longer durability, appealing aesthetics, smooth operations, practical designs and less power consumption even after accommodating all these features Riddhi products are really a value for money offerings. It is my standard of selection and I am proud to be choosing Riddhi products for my outlets.
                                </p>
                                <div className="my-4 md:my-16 ">
                                    <img src={Review_Star} alt="" />
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col justify-center items-center">
                                <div className="md:text-3xl font-extrabold">Mr. Natwarlal Sharda</div>
                                <div className="">Kanha Sweets</div>
                                <p className="md:w-[600px] xl:w-[900px] text-center text-gray-500 my-4">
                                    The best in class! Longer durability, appealing aesthetics, smooth operations, practical designs and less power consumption even after accommodating all these features Riddhi products are really a value for money offerings. It is my standard of selection and I am proud to be choosing Riddhi products for my outlets.
                                </p>
                                <div className="my-4 md:my-16 ">
                                    <img src={Review_Star} alt="" />
                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col justify-center items-center">
                                <div className="md:text-3xl font-extrabold">Mr. Natwarlal Sharda</div>
                                <div className="">Kanha Sweets</div>
                                <p className="md:w-[600px] xl:w-[900px] text-center text-gray-500 my-4">
                                    The best in class! Longer durability, appealing aesthetics, smooth operations, practical designs and less power consumption even after accommodating all these features Riddhi products are really a value for money offerings. It is my standard of selection and I am proud to be choosing Riddhi products for my outlets.
                                </p>
                                <div className="my-4 md:my-16 ">
                                    <img src={Review_Star} alt="" />
                                </div>

                            </div>
                        </SwiperSlide>
                        

                    </Swiper>



                </div>
            </div>

        </>
    )
}

export default Client