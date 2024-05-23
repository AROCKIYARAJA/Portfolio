import React from 'react';
import ME from "../Images/ME.jpg"
import { Link } from 'react-router-dom';
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import { GiRocket } from "react-icons/gi";

function Footer() {
    return (
        <>
            <div className='mt-36 bg-gray-950 py-10 md:px-20 px-5 '>
                <a href='#home' className="px-3 py-2 rounded-lg bg-gray-800 text-gray-500 hover:text-gray-200 animate-bounce w-fit mx-auto flex items-center justify-center gap-1">Go to Top <GiRocket  className='text-[1.3rem] rotate-[225deg]' /></a>
                <div className="flex items-center lg:justify-between justify-center flex-wrap">
                    <div className="flex items-center justify-center w-fit gap-2 pl-2 pr-5 py-1 rounded-full bg-gray-900 scale-90">
                        <div className="w-[60px] h-[60px] rounded-full ring-1 ring-sky-800 rotate-[-10deg]" style={{ backgroundImage: `url(${ME})`, backgroundSize: "130%", backgroundPosition: "center" }}></div>
                        <div className="ml-2">
                            <div className="text-[1.3rem] font-[600]">AROCKIYA RAJA</div>
                            <a href='mail:arockiyaraja88@gmail.com' className="text-[12px]">arockiyaraja88@gmail.com</a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-5 md:mt-0 mt-5">
                        <a href="#about">About</a>
                        <a href="#skills">Skills</a>
                        <a href="#experience">Experince</a>
                        <a href="#projects">Projects</a>
                    </div>
                </div>
                <div className="flex items-center gap-5 mt-10 px-3 py-1 rounded-full bg-gray-900 w-fit xl:mx-0 mx-auto">
                    <a title='Connect with Email' href="mail:arockiyaraja88@gmail.com" ><IoIosMail className='text-[2.3rem]' /></a>
                    <Link title='Connect with GitHub' to={"https://github.com/AROCKIYARAJA"} target='_blank'><FaGithub className='text-[2rem]' /></Link>
                    <Link title='Connect with Linked In' to={"https://www.linkedin.com/in/arockiya-raja-4319b923a/"} target='_blank'><FaLinkedin className='text-[2rem]' /></Link>
                    <Link title='Connect with Instagram' to={"https://www.instagram.com/_.arockiya_raja._/"} target='_blank'><FaInstagram className='text-[2rem]' /></Link>
                    <Link title='Connect with Twitter' to={"https://x.com/arockiya_raja02"} target='_blank'><FaSquareXTwitter className='text-[2rem]' /></Link>
                    <a title='Connect with Whatapp' href="https://wa.me/918610187848?text=Hi,%20I%20get%20This%20Number%20From%20Your%20Portfolio" target='_blank'><FaWhatsapp className='text-[2rem]' /></a>
                    <a title='Connect with Phone Call' href="tel:+918610187848" ><FaPhoneAlt className='text-[1.5rem]' /></a>
                </div>
            </div>
            <div className="py-5 tracking-wider font-[200] text-center bg-black text-white">Copyright 2024 by Arockiya Raja</div>
        </>
    )
}
export default Footer