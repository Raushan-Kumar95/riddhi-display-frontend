import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="bg-black text-white grid md:grid-cols-3 lg:grid-cols-4  px-4  py-16 ">
                    <div className="   pr-12">
                        <div className=" mb-4"><img className="w-[250px]" src="/Darsh_Logo.png" alt="" /></div>
                        <div className="">Ram Lakhan Path, Ram Lakhan Singh Market Road No.-24, Rajeev Nagar, Patna-800024</div>
                    </div>
                    <div className="md:mx-12 ">
                        <div className=" my-3 font-extrabold ">Quick Links</div>
                        <div className="font-thin">
                            <ul>
                                <li><Link to="/about-us" >About us</Link></li>
                                <li><Link to="/Products">Our Products</Link></li>
                                <li><Link to="/Projects" >Our Projects</Link></li>
                                <li><Link to="/Services" >Our Services</Link></li>
                                <li><Link to="/Download" >Download</Link></li>
                                <li><Link to="/about-us" >Blog</Link></li>
                                <li><Link to="/Contact" >Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="  md:mx-4 lg:mx-8 xl-24">
                        <div className="my-3  font-extrabold ">Get In Touch</div>
                        <div className="flex flex-col font-thin">
                            <a href=""><i className="  text-[13px] mr-2 fa-solid fa-phone"></i>+91 98359 99500</a>
                            <a href=""><i className=" text-[13px] mr-2 fa-solid fa-phone"></i>+91 77177 88162</a>
                            <a href=""><i className="text-[14px] mr-2 fa-solid fa-envelope"></i>roshntn@gmail.com</a>
                            {/* <a href=""><i className="text-[14px] mr-2 fa-solid fa-earth-americas"></i>roshntn@gmail.com</a> */}
                        </div>

                    </div>
                    <div className="">
                        <div className="">
                            <div className="my-3  font-extrabold flex flex-col">Download Brochure</div>
                            <div className="font-thin"><a href=""><i className="text-[14px] mr-2 fa-sharp fa-solid fa-download"></i>Display Counter</a></div>
                            <div className="font-thin"><a href=""><i className="text-[14px] mr-2 fa-sharp fa-solid fa-download"></i>Kitchen Equipment</a></div>
                        </div>
                        <div className="">
                            <div className="my-3  font-extrabold">Darsh Manufacturing Social links</div>
                            <a href=""><i className="md:text-[16x] md:text-[22px] fa-brands fa-facebook-f"></i></a>
                            <a href=""><i className="md:text-[16x] md:text-[22px] mx-3 fa-brands fa-twitter"></i></a>
                            <a href=""><i className="md:text-[16x] md:text-[22px] fa-brands fa-instagram"></i></a>
                            <a href=""><i className="md:text-[16x] md:text-[22px] mx-3 fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>

                <div className="bg-black text-white flex flex-col md:flex-row">
                    <div className=" px-4 font-thin md:px-8">Copyright by Darsh Manufacturing. All rights reserved.</div>
                    <div className=" px-4 font-thin text-[16px] md:text-lg md:px-64">Powered by: <a className=" hover:text-red-800 duration-500" href="https://givni.in/">Givni Pvt. Ltd. </a></div>
                </div>
            </footer>

        </>
    )

}

export default Footer;