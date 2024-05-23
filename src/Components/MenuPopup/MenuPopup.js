import React from 'react'
import { GrClose } from "react-icons/gr";
import MiniScreen from './MiniScreen';

function MenuPopup() {
    return (
        <div className={`w-[700px] h-fit py-5 px-4 rounded-xl shadow-xl bg-white bg-opacity-25 backdrop-blur-lg absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 border border-gray-300`}>
            <div className="flex items-center justify-between">
                <div className="">
                    <span className='text-[14px] cursor-pointer px-2 rounded-md py-[3px] hover:bg-gray-400 text-gray-600 hover:text-white'>PortFolio</span>&nbsp;/ &nbsp;
                    <span className='text-[1rem] font-[500] bg-gray-900 px-2 py-[3px] rounded-md text-gray-300 hover:text-gray-200 cursor-pointer'>Menu</span>
                </div>
                <div className="">
                    <button className='px-2 py-1 rounded-md border border-gray-300 bg-red-600 text-white'><GrClose /></button>
                </div>
            </div>
            <div className="">
                < MiniScreen />
            </div>
        </div>
    )
}

export default MenuPopup