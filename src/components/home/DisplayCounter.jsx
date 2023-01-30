import React from "react";
import counter_image1 from "../../assets/Imageslist/counter.jpg"
import counter_image2 from "../../assets/Imageslist/kitchen.jpg"
import counter_image3 from "../../assets/Imageslist/kitchen-2.jpg"
import counter_image4 from "../../assets/Imageslist/refrigeration.jpg"


const Display_counter = ()=>{
     return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2  md:gap-x-8 md:mt-[100px] mx-4 md:mx-16">
                <div className="flex flex-col mb-[-30px]">
                    <img className=" object-cover"src={counter_image1} alt=""/>
                    <div className="bg-red-500 text-white p-4 xl:p-8 xl:text-[26px] font-bold text-center relative translate-y-[-50px]">Display Counter</div>
                </div>
                
                <div className="flex flex-col mb-[-30px]">
                    <img   src={counter_image2} alt=""/>
                    <div className="bg-red-500 text-white p-4 xl:p-8 xl:text-[26px] font-bold text-center relative translate-y-[-50px]">Kitchen Equipment</div>
                </div>
                
                <div className="flex flex-col mb-[-30px]">
                    <img   src={counter_image3} alt=""/>
                    <div className="bg-red-500 text-white p-4 xl:p-8 xl:text-[26px] font-bold text-center relative translate-y-[-50px]">Refrigeration Equipment</div>
                </div>

                <div className="flex flex-col mb-[-30px]">
                    <img   src={counter_image4} alt=""/>
                    <div className="bg-red-500 text-white p-4 xl:p-8 xl:text-[26px] font-bold text-center relative translate-y-[-50px]">Professional Kitchen Consulting</div>
                </div>
            </div>
        </>
     );

} 


export default Display_counter;