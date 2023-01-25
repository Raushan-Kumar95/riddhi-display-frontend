import React from "react";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="bg-black text-white flex flex-col md:flex-row  px-8 py-16 ">
                    <div className="  md:w-1/5">
                        <div className=" mb-4"><img src="https://www.riddhidisplay.com/wp-content/uploads/2021/04/footer-logo.png" alt="" /></div>
                        <div className="">Rajkot - Gondal National Highway 27, Gondal, Rajkot, Bhojapara - 360311 (Gujarat)</div>
                    </div>
                    <div className="md:mx-16">
                        <div className=" my-3 font-extrabold ">Quick Links</div>
                        <div className="">
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
                    <div className=" md:mx-64">
                        <div className="my-3  font-extrabold ">Get In Touch</div>
                        <div className="flex flex-col">
                            <a href=""><i></i>+91 98250 72799</a>
                            <a href=""><i></i>+91 98250 72799</a>
                            <a href=""><i></i>+91 98250 72799</a>
                            <a href=""><i></i>info@riddhidisplay.com</a>
                            <a href=""><i></i>info@riddhidisplay.com</a>
                        </div>

                    </div>
                    <div className="">
                        <div className="">
                            <div className="my-3  font-extrabold flex flex-col">Download Brochure</div>
                            <div className=""><a href=""><i></i>Display Counter</a></div>
                            <div className=""><a href=""><i></i>Kitchen Equipment</a></div>
                        </div>
                        <div className="">
                            <div className="my-3  font-extrabold">Riddhi Display Social links</div>
                            <a href=""><i></i></a>
                            <a href=""><i></i></a>
                            <a href=""><i></i></a>
                            <a href=""><i></i></a>
                        </div>
                    </div>
                </div>

                <div className="bg-black text-white flex flex-col md:flex-row">
                    <div className=" md:px-8">Copyright by Riddhi Display. All rights reserved.</div>
                    <div className="md:px-64">Powered by: <a className=" hover:text-red-800 duration-500" href="">Icecube Digital </a></div>
                </div>
            </footer>

        </>
    )

}

export default Footer;