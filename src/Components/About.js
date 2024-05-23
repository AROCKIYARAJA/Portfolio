import React from 'react';
import { FaCloudMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";
import ME from "../Images/ME.jpg"
import VoicePack from './NanoAnimation/VoicePack';

function About() {
    return (
        <div className='w-[1000px] mx-auto max-w-[93%] mt-10' id='about'>
            <br /> <br />
            <div className="">
                <div className="font-[700] text-center text-[3rem] text-white">About</div>
                <div className="text-center">Something About me</div>
            </div>
            <div className="mt-10 relative">
                <div class="flex -space-x-2 rtl:space-x-reverse bg-gray-500 w-fit px-3 py-1 rounded-full">
                    <img class="w-10 h-10 rounded-full " src="https://www.wovlene.com/cm-admin/uploads/image/testimonial-3.jpg" alt="" />
                    <img class="w-10 h-10 rounded-full " src="https://www.wovlene.com/cm-admin/uploads/image/testimonial-2.jpg" alt="" />
                    <img class="w-10 h-10 rounded-full " src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="" />
                    <a class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 rounded-full" href="#">+99</a>
                </div>
                <div className="px-5 py-3 rounded-r-2xl rounded-bl-2xl mt-5 flex items-center justify-normal w-fit hover:ring-4 hover:ring-gray-700 bg-gray-800 flex-col">
                    <div className='text-gray-300 flex items-center justify-normal w-full'>{new Date().getHours() > 12 ? <div className='flex items-center justify-center gap-2'><span>Hi, Good AfterNoon</span> <span><FaCloudMoon /></span></div> : <div className='flex items-center justify-center gap-2'><span>Good Morning</span> <span><MdSunny /></span></div>}</div>
                    <div className="w-full flex items-center justify-center gap-2 "> <VoicePack /> Tell me About Your self ...</div>
                </div>
            </div>
            <div className="mt-3 flex items-center justify-between w-full relative">
                <div className=""></div>
                <div className="md:w-[80%] w-full">
                    <div className="flex items-center justify-between">
                        <div className=""></div>
                        <div className="w-[50px] h-[50px] rounded-full ring-1 ring-emerald-400 relative" style={{ backgroundImage: `url(${ME})`, backgroundSize: "150%", backgroundPosition: "center" }}>
                            <div className="w-[10px] h-[10px] rounded-full bg-emerald-600 absolute left-1"></div>
                        </div>
                    </div>
                    <div className="py-5 px-7 rounded-l-2xl rounded-br-2xl mt-5 hover:ring-4 hover:ring-gray-700 flex leading-3 relative items-center justify-normal w-fit bg-gray-800 flex-col">
                        <div className='text-gray-300 flex items-center justify-normal absolute left-5 top-4 px-3 py-1 rounded-full w-fit bg-gray-500'>{new Date().getHours() > 12 ? <div className='flex items-center justify-center gap-2'><span>Hi, Good AfterNoon</span> <span><FaCloudMoon /></span></div> : <div className='flex items-center justify-center gap-2'><span>Good Morning</span> <span><MdSunny /></span></div>}</div> <br />
                        <div className="w-full leading-7 tracking-wider mt-7 lg:text-left text-justify indent-10">A Passionate Computer Science professional specializing in Website Development or MERN Stack Development. Proficient in Web
                            Technologies Such as, HTML, CSS, and JavaScript, etc. Experienced in front-end development with frameworks like Bootstrap and Tailwind
                            CSS. Led front-end development for "One Stop" project. Currently I done my Official Training in full-stack web development at Skill Safari Institute with
                            an Internship focused on converting their website by using technologies such as React JS and Tailwind CSS with Firebase As Backend. Eager to apply skills in a dynamic professional
                            environment. </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About