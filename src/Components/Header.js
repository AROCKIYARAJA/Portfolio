import React from 'react';
import { IoVideocam } from "react-icons/io5";
import { FaRegHandshake } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div className='w-[100%] mx-auto px-5 py-4 shadow-xl flex items-center justify-between selection:bg-transparent' id='home'>
      <div className="font-[600] text-[1.25rem] text-gray-200">Portfolio.</div>
      <div className="flex items-center justify-center gap-3">
        <div className="flex items-center justify-center gap-4">
          <Link to='https://cal.com/arockiya-raja/30min' title='Shedule a Virtual Meeting' className={` bg-gray-800 hover:shadow-xl text-white px-3 py-[3px] rounded-md flex items-center gap-1 hover:bg-gray-500`}>
            <span>Meeting</span> &nbsp;
            <span><IoVideocam /></span>
          </Link>
          <a href='tel:+918610187848' className=' bg-gradient-to-br duration-300 flex items-center gap-1 transition-all hover:from-violet-600 hover:to-sky-400 from-cyan-600 to-violet-600 text-white px-3 py-[3px] rounded-md'>
            <span>Hire Me</span> &nbsp;
            <span><FaRegHandshake /></span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Header