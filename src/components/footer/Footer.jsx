import React from "react";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="bg-black text-white grid md:grid-cols-3 lg:grid-cols-4  px-4  py-16 ">
                    <div className="   pr-12">
                        <div className=" mb-4"><img src="https://www.riddhidisplay.com/wp-content/uploads/2021/04/footer-logo.png" alt="" /></div>
                        <div className="">Rajkot - Gondal National Highway 27, Gondal, Rajkot, Bhojapara - 360311 (Gujarat)</div>
                    </div>
                    <div className="md:mx-12 ">
                        <div className=" my-3 font-extrabold ">Quick Links</div>
                        <div className="font-thin">
                            <ul>
                                <li><a href="">About us</a></li>
                                <li><a href="">Our Products</a></li>
                                <li><a href="">Our Projects</a></li>
                                <li><a href="">Our Services</a></li>
                                <li><a href="">Download</a></li>
                                <li><a href="">Blog</a></li>
                                <li><a href="">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="  md:mx-4 lg:mx-8 xl-24">
                        <div className="my-3  font-extrabold ">Get In Touch</div>
                        <div className="flex flex-col font-thin">
                            <a href=""><i className="  text-[13px] mr-2 fa-solid fa-phone"></i>+91 98250 72799</a>
                            <a href=""><i className=" text-[13px] mr-2 fa-solid fa-phone"></i>+91 98250 72799</a>
                            <a href=""><i className="text-[14px] mr-2 fa-solid fa-envelope"></i>info@riddhidisplay.com</a>
                            <a href=""><i className="text-[14px] mr-2 fa-solid fa-earth-americas"></i>info@riddhidisplay.com</a>
                        </div>

                    </div>
                    <div className="">
                        <div className="">
                            <div className="my-3  font-extrabold flex flex-col">Download Brochure</div>
                            <div className="font-thin"><a href=""><i className="text-[14px] mr-2 fa-sharp fa-solid fa-download"></i>Display Counter</a></div>
                            <div className="font-thin"><a href=""><i className="text-[14px] mr-2 fa-sharp fa-solid fa-download"></i>Kitchen Equipment</a></div>
                        </div>
                        <div className="">
                            <div className="my-3  font-extrabold">Riddhi Display Social links</div>
                            <a href=""><i className="md:text-[16x] md:text-[22px] fa-brands fa-facebook-f"></i></a>
                            <a href=""><i className="md:text-[16x] md:text-[22px] mx-3 fa-brands fa-twitter"></i></a>
                            <a href=""><i className="md:text-[16x] md:text-[22px] fa-brands fa-instagram"></i></a>
                            <a href=""><i className="md:text-[16x] md:text-[22px] mx-3 fa-brands fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>

                <div className="bg-black text-white flex flex-col md:flex-row">
                    <div className=" px-4 font-thin md:px-8">Copyright by Riddhi Display. All rights reserved.</div>
                    <div className=" px-4 font-thin text-[16px] md:text-lg md:px-64">Powered by: <a className=" hover:text-red-800 duration-500" href="">Icecube Digital </a></div>
                </div>
            </footer>

        </>
    )

}

export default Footer;