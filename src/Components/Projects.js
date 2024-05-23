import React from 'react'
import SkillSafari from '../Images/SkillSafari.png';
import FilmTube from "../Images/FilmTube.png"
import NetFlix from "../Images/Netflix.png";
import SolarSystem from "../Images/SolarSystem.png";
import SkillLine from "../Images/SkillLine.png";
import Google from "../Images/GoogleDarkEdition.png";
import Envato from "../Images/Envato.png";
import Ecoyaan from "../Images/Ecoyaan.png";
import Dynamic from "../Images/Dynamic.jpg";
import skillsafari from "../Logo/skillsafari.jpg";
import netflix from "../Logo/NetFlix.png";
import google from "../Logo/Google.png";
import envato from "../Logo/envato.png";
import skillline from "../Logo/skillline.png";
import apple from "../Logo/apple.png";
import { Link } from 'react-router-dom';
import { GiOrbital } from "react-icons/gi";
import { GrAchievement } from "react-icons/gr";
import "./Extra.css"


function Projects() {

    return (
        <div className='mt-20' id='projects'>
            <div className="text-center font-[700] text-white text-[4rem]">Projects</div>
            <div className="text-center text-gray-200 tracking-wider px-4 w-fit mx-auto py-2 rounded-full bg-gray-500 flex items-center justify-center gap-1"><GrAchievement className='text-[1.5rem]' />Achievement </div>
            <div className="w-[1200px] mx-auto max-w-full mt-10 flex items-center justify-center flex-wrap gap-10 ">
                <Link to={'https://skill-safari-page.vercel.app/'} target='_blank' className=" p-3 rounded-2xl bg-gray-800 w-[350px] hover:bg-gray-950 shadow-3xl project  ">
                    <img src={SkillSafari} alt="" className='w-[350px] h-[190px] rounded-xl object-cover hover:border-2 hover:border-sky-600 project-card' />
                    <img src={skillsafari} alt="" className='w-[80px] rounded-full mx-auto mt-5' />
                    <div className="text-[1.1rem] font-[600] text-white mt-5 mb-3 text-center">Skill Safari an Education Website</div>
                    <div className="text-[14px] px-2 project-info text-gray-400">
                        Building a Learn and Earn Community | At Skill Safari, we are bridging the gap between knowledge and individuals.
                    </div>
                </Link>
                <Link to={'https://filmtube-app.vercel.app/'} target='_blank' className=" p-3 rounded-2xl bg-gray-800 w-[350px] hover:bg-gray-950 shadow-3xl project">
                    <img src={FilmTube} alt="" className='w-[350px] h-[190px] rounded-xl hover:border-2 hover:border-sky-600 project-card' />
                    <div className="flex items-center w-fit mx-auto gap-1 mt-5">
                        <span className='text-white font-[600]'>Film</span>
                        <span className='px-1 py-[1px] text-red-600 font-[600] bg-white rounded-md'>Tube</span>
                    </div>
                    <div className="text-[1.1rem] font-[600] text-white mt-5 mb-3 pl-4 whitespace-nowrap text-ellipsis text-center">FilmTube Entertainment App</div>
                    <div className="text-[14px] px-2 project-info text-gray-400">
                        Movies, Tv Series, Entertainment Recomandation App, Users can enjoy their favorite Genres Entertainment
                    </div>
                </Link>
                <Link to={'https://www.linkedin.com/posts/activity-7102656664448745473-FnnJ/?utm_source=share&utm_medium=member_desktop'} target='_blank' className=" p-3 rounded-2xl bg-gray-800 w-[350px] hover:bg-gray-950 shadow-3xl project">
                    <img src={NetFlix} alt="" className='w-[350px] h-[190px] rounded-xl hover:border-2 hover:border-sky-600 project-card' />
                    <img src={netflix} alt="" className='w-[80px] rounded-full mx-auto mt-5' />
                    <div className="text-[1.1rem] font-[600] text-white mt-5 mb-3 pl-4 whitespace-nowrap text-ellipsis text-center">NetFlix Stranger thing</div>
                    <div className="text-[14px] px-2 project-info text-gray-400">
                        A world Famous OTT platform Clone Page of Stranger thing Landing page with Complete Responsive
                    </div>
                </Link>
                <Link to={'https://legendary-genie-2ab63f.netlify.app/'} target='_blank' className=" p-3 rounded-2xl bg-gray-800 w-[350px] hover:bg-gray-950 shadow-3xl project">
                    <img src={Google} alt="" className='w-[350px] h-[190px] rounded-xl hover:border-2 hover:border-sky-600 project-card' />
                    <img src={google} alt="" className='w-[80px] rounded-full mx-auto mt-5' />
                    <div className="text-[1.1rem] font-[600] text-white mt-5 mb-3 pl-4 whitespace-nowrap text-ellipsis text-center">Google Dark Edition </div>
                    <div className="text-[14px] px-2 project-info text-gray-400">
                        A New Dark Edition UI of Google Search Engine Page Without Responsiveness, A New UI Implementation Practice Purpose.
                    </div>
                </Link>
                <Link to={'https://www.linkedin.com/posts/activity-7090677464418439168-ff1d?utm_source=share&utm_medium=member_desktop'} target='_blank' className=" p-3 rounded-2xl bg-gray-800 w-[350px] hover:bg-gray-950 shadow-3xl project">
                    <img src={Envato} alt="" className='w-[350px] h-[190px] rounded-xl hover:border-2 hover:border-sky-600 project-card' />
                    <img src={envato} alt="" className='w-[120px] rounded-full mx-auto mt-5' />
                    <div className="text-[1.1rem] font-[600] text-white mt-5 mb-3 pl-4 whitespace-nowrap text-ellipsis text-center">Envato Market</div>
                    <div className="text-[14px] px-2 project-info text-gray-400">
                        A Car Rental Website Users Can Easly Select their Dream Cars for Rent with Budget Friendly. New More Features Added, Enjoy the Drive
                    </div>
                </Link>
                <Link to={'https://ecoyaan-mocha.vercel.app/'} target='_blank' className=" p-3 rounded-2xl bg-gray-800 w-[350px] hover:bg-gray-950 shadow-3xl project">
                    <img src={Ecoyaan} alt="" className='w-[350px] h-[190px] rounded-xl hover:border-2 hover:border-sky-600 project-card' />
                    <div className="w-fit px-3 py-1 rounded-full bg-emerald-600 text-white mt-5 mx-auto">Ecoyaan</div>
                    <div className="text-[1.1rem] font-[600] text-white mt-5 mb-3 pl-3 whitespace-nowrap text-ellipsis text-center">Ecoyaan</div>
                    <div className="text-[14px] px-2 project-info text-gray-400">
                        A Real Work Website Cloning Process with New Kind of UI Approach, Successfully Completed with Full Responsiveness.
                    </div>
                </Link>
                <Link to={'https://solarsystem-tau.vercel.app/'} target='_blank' className=" p-3 rounded-2xl bg-gray-800 w-[350px] hover:bg-gray-950 shadow-3xl project">
                    <img src={SolarSystem} alt="" className='w-[350px] h-[190px] rounded-xl hover:border-2 hover:border-sky-600 project-card' />
                    <div className="flex items-center gap-2 mt-5 mx-auto w-fit px-3 py-1 rounded-full bg-white ">
                        <span className='text-black'><GiOrbital className='text-[1.5rem]' /></span>
                        <span className='text-black text-[1.2rem]'>Planets</span>
                    </div>
                    <div className="text-[1.1rem] font-[600] text-white mt-5 mb-3 pl-4 whitespace-nowrap text-ellipsis text-center">Solar System</div>
                    <div className="text-[14px] px-2 project-info text-gray-400">
                        A Demo Model of Solar System, Implemented with Html, Css, Only. No Images Designed with only CSS.
                    </div>
                </Link>
                <Link to={'https://astonishing-empanada-8136e2.netlify.app/'} target='_blank' className=" p-3 rounded-2xl bg-gray-800 w-[350px] hover:bg-gray-950 shadow-3xl project">
                    <img src={SkillLine} alt="" className='w-[350px] h-[190px] rounded-xl hover:border-2 hover:border-sky-600 project-card' />
                    <img src={skillline} alt="" className='w-[68px] rounded-full mx-auto mt-5' />
                    <div className="text-[1.1rem] font-[600] text-white mt-5 mb-3 pl-4 whitespace-nowrap text-ellipsis text-center">Skill Line </div>
                    <div className="text-[14px] px-2 project-info text-gray-400">
                        A Fictional Cloning Website Of Skill Line, an Education Based Theme with Complete Responsiveness.
                    </div>
                </Link>
                <Link to={'https://dynamic-island-three.vercel.app/'} target='_blank' className=" p-3 rounded-2xl bg-gray-800 w-[350px] hover:bg-gray-950 shadow-3xl project">
                    <img src={Dynamic} alt="" className='w-[350px] h-[190px] rounded-xl hover:border-2 hover:border-sky-600 project-card' />
                    <img src={apple} alt="" className='w-[80px] rounded-full mx-auto mt-5' />
                    <div className="text-[1.1rem] font-[600] text-white mt-5 mb-3 pl-4 whitespace-nowrap text-ellipsis text-center">Iphone Dynamic Island</div>
                    <div className="text-[14px] px-2 project-info text-gray-400">
                        Iphone 14 Pro Max Dynamic Island creativity by Using Html, Css, JavaScript. This is a complete Mobile Handling Demo, Practice Purpose
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Projects