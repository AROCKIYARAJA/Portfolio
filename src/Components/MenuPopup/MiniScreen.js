import React, { useEffect, useState } from 'react'
import { HiHome } from "react-icons/hi";
import { GrStatusInfo } from "react-icons/gr";
import { FaCode } from "react-icons/fa6";
import { FaUserGraduate } from "react-icons/fa6";
import { HiRectangleStack } from "react-icons/hi2";
import { Link } from "react-router-dom"

function MiniScreen() {
    const [imageSrc, setImageSrc] = useState("https://wallpapers.com/images/featured/house-u7pcf18vqolaatio.jpg")

    return (
        <div className='flex items-center justify-center gap-5 w-full mt-4 px-5'>
            <div className="w-full relative">
                <img src={imageSrc} alt="" className='w-full h-full rounded-lg' />
                <div className=" absolute left-2/4 bottom-2 -translate-x-2/4 px-3 py-1 rounded-lg bg-transparent backdrop-blur-lg text-white">Mini View</div>
            </div>
            <div className="flex items-center gap-4 flex-col justify-normal text-left w-full text-[13px]">
                <Link to={'/'} onMouseOver={() => setImageSrc("https://wallpapers.com/images/featured/house-u7pcf18vqolaatio.jpg")} className="w-[80%] mx-auto hover:scale-110 hover:text-white flex items-center hover:bg-gray-400 gap-2 p-2 text-black rounded-md hover:pl-5 cursor-pointer duration-300"><HiHome />Home</Link>
                <Link to={'/About'} onMouseOver={() => setImageSrc("https://w0.peakpx.com/wallpaper/217/608/HD-wallpaper-quotes-quotes-about-work-motivation-sayings-quotes-about-dream.jpg")} className="w-[80%] mx-auto hover:scale-110 hover:text-white flex items-center hover:bg-gray-400 gap-2 p-2 text-black rounded-md hover:pl-5 cursor-pointer duration-300"><GrStatusInfo />About</Link>
                <Link to={'/Experince'} onMouseOver={() => setImageSrc("https://images.pexels.com/photos/5598300/pexels-photo-5598300.jpeg?cs=srgb&dl=pexels-anntarazevich-5598300.jpg&fm=jpg")} className="w-[80%] mx-auto hover:scale-110 hover:text-white flex items-center hover:bg-gray-400 gap-2 p-2 text-black rounded-md hover:pl-5 cursor-pointer duration-300"><FaCode />Experince</Link>
                <Link to={'/Education'} onMouseOver={() => setImageSrc("https://static.vecteezy.com/system/resources/thumbnails/031/586/515/small_2x/a-warm-welcome-back-to-school-with-neatly-arranged-school-supplies-ai-generated-photo.jpg")} className="w-[80%] mx-auto hover:scale-110 hover:text-white flex items-center hover:bg-gray-400 gap-2 p-2 text-black rounded-md hover:pl-5 cursor-pointer duration-300"><FaUserGraduate />Education</Link>
                <Link to={'/Projects'} onMouseOver={() => setImageSrc("https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D")} className="w-[80%] mx-auto hover:scale-110 hover:text-white flex items-center hover:bg-gray-400 gap-2 p-2 text-black rounded-md hover:pl-5 cursor-pointer duration-300"><HiRectangleStack />Projects</Link>
            </div>
        </div>
    )
}

export default MiniScreen