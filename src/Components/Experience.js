import React from 'react'
import { FaReact } from 'react-icons/fa6'
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { RiJavascriptFill } from "react-icons/ri";

function Experience() {
    return (
        <div className='w-[90%] p-10 rounded-3xl mx-auto max-w-full mt-20 bg-gray-800' id='experience'>
            <div className="font-[600] text-[3rem] text-white px-3 border-l-4 border-gray-300 ">Experince</div>
            <ol class="relative border-s border-gray-200 dark:border-gray-700 mt-10">
                <li class="mb-10 ms-6 px-3">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">React Js Developer - Intership <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span></h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ">Relearn School January 2024 - March 2024</time>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-300">Coimbatore - Tamil Nadu</time>
                    <p class="mb-4 text-base font-normal text-justify text-gray-500 dark:text-gray-400 indent-10 mt-5">
                        A group project focused on recreating the Skill Safari website using modern web development technologies. Utilized React JS
                        Library to develop a responsive and dynamic user interface, enhancing user experience
                        Integrated Tailwind CSS for efficient and customized styling, ensuring a sleek and visually appealing design.
                        I take the complete Back-end responsibility to Implemented Firebase as the Back-end service provider for seamless data
                        management, including user authentication and database storage.
                    </p>
                    <div className="">
                        <div className="font-[600] mb-2">Technologies Handled:</div>
                        <div className="flex items-center justify-normal gap-3 flex-wrap">
                            <div className="flex items-center gap-2 px-2 py-1 rounded-full text-white bg-cyan-600"><span><FaReact className='text-[1.3rem]' /></span><span>React Js</span></div>
                            <div className="flex items-center gap-2 px-2 py-1 rounded-full text-white bg-sky-600"><span><RiTailwindCssFill className='text-[1.3rem]' /></span><span>Tailwind CSS</span></div>
                            <div className="flex items-center gap-2 px-2 py-1 rounded-full text-white bg-yellow-500"><span><IoLogoFirebase className='text-[1.3rem]' /></span><span>Firebase</span></div>
                        </div>
                    </div>
                </li>
                <li class="mb-10 ms-6 px-3">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">UI Designer</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400 ">Mind Reader Software May 2024 - June 2024</time>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-300">Velachery, Chennai - Tamil Nadu</time>
                    <p class="mb-4 text-base font-normal text-justify text-gray-500 dark:text-gray-400 indent-10 mt-5">Collaborated with team members to design website layouts and user interaction designs using Figma. Independently
                        developed UI designs for websites, focusing on user experience and visual appeal. Implemented responsive design principles
                        to ensure optimal viewing experiences across various devices.
                        Communicated closely with developers to ensure seamless integration of design elements into the final product.
                        Participated in brainstorming sessions to generate innovative ideas for improving user engagement and interface usability.
                        Assisted in the documentation of design guidelines and specifications to facilitate smooth hand offs to development teams.
                        Demonstrated strong problem-solving skills in addressing design challenges and finding innovative solutions to improve user
                        experiences.
                    </p>
                    <div className="">
                        <div className="font-[600] mb-2">Technologies Handled:</div>
                        <div className="flex items-center justify-normal gap-3 flex-wrap">
                            <div className="flex items-center gap-2 px-2 py-1 rounded-full text-white bg-red-500"><span><FaHtml5 className='text-[1.3rem]' /></span><span>React Js</span></div>
                            <div className="flex items-center gap-2 px-2 py-1 rounded-full text-white bg-sky-600"><span><IoLogoCss3 className='text-[1.3rem]' /></span><span>CSS</span></div>
                            <div className="flex items-center gap-2 px-2 py-1 rounded-full text-white bg-yellow-600"><span><RiJavascriptFill className='text-[1.3rem]' /></span><span>JavaScript</span></div>
                        </div>
                    </div>
                </li>
                <li class="ms-6 px-3">
                    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                        <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                        </svg>
                    </span>
                    <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Front End Developer</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-400">Final year Project - ONE STOP (an event planning platform) </time>
                    <p class="text-base font-normal text-gray-500 dark:text-gray-400">
                        As a Frontend developer I take the complete Responsibility of UI prototyping, Website logic writing by using HTML, CSS, JavaScript.
                    </p>
                    <div className="">
                        <div className="font-[600] mb-2">Technologies Handled:</div>
                        <div className="flex items-center justify-normal gap-3 flex-wrap">
                            <div className="flex items-center gap-2 px-2 py-1 rounded-full text-white bg-red-500"><span><FaHtml5 className='text-[1.3rem]' /></span><span>React Js</span></div>
                            <div className="flex items-center gap-2 px-2 py-1 rounded-full text-white bg-sky-600"><span><IoLogoCss3 className='text-[1.3rem]' /></span><span>CSS</span></div>
                            <div className="flex items-center gap-2 px-2 py-1 rounded-full text-white bg-yellow-600"><span><RiJavascriptFill className='text-[1.3rem]' /></span><span>JavaScript</span></div>
                        </div>
                    </div>
                </li>
            </ol>
        </div>


    )
}

export default Experience