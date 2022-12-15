import React from 'react';

import { BsRecordCircle, BsFillDisplayFill } from "react-icons/bs"

import { FiVolume2 } from "react-icons/fi"

import { BiExitFullscreen } from "react-icons/bi"

import { AiOutlineAudio } from "react-icons/ai"

import { MdCallEnd } from "react-icons/md"

import { HiVideoCamera } from "react-icons/hi"

const Main = ({ setIsOpen }) => {
    return (
        <div>
            <div className="topheading flex items-center px-6 py-6">
                <div className="arroy bg-slate-200 py-1 px-3 rounded-md text-lg font-medium text-slate-500 cursor-pointer hover:bg-slate-300"
                    onClick={(e) => {setIsOpen()}}
                >{"<"}
                </div>
                <div className="text mx-4 font-semibold text-lg font-serif">Overview of new project overnet discation.</div>
                <div className="recording bg-slate-200 py-1 px-2 rounded-3xl flex items-center cursor-pointer hover:bg-slate-300"><BsRecordCircle color={"#da3333"}/><div className="ml-2">Recording</div></div>
            </div>

            <div className="video mx-6 rounded-md relative bg-[url('https://images.unsplash.com/photo-1544006659-f0b21884ce1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&w=1000&q=80')]" style={{height: "650px", backgroundSize: "100%", backgroundRepeat: "no-repeat"}}>
                <div className="user pt-4 mx-4 flex space-x-2">
                    <div className='px-2 py-1 rounded-2xl text-slate-50 font-thin text-base flex items-center' style={{backgroundColor:"#b6b4b3"}}><div className="rounded-full p-1 bg-green-400"><FiVolume2 size={16}/></div><div className="ml-2 font-medium">Jyoti singh</div></div>
                    <div className='px-2 py-1 rounded-2xl text-slate-50 font-thin text-base flex items-center' style={{backgroundColor:"#b6b4b3"}}><div className="rounded-full p-1 bg-green-400"><FiVolume2 size={16}/></div><div className="ml-2 font-medium">Alex Cox</div></div>
                    <div className='px-2 py-1 rounded-2xl text-slate-50 font-thin text-base flex items-center' style={{backgroundColor:"#b6b4b3"}}><div className="rounded-full p-1 bg-green-400"><FiVolume2 size={16}/></div><div className="ml-2 font-medium">Animesh</div></div>
                </div>
                <div className="controls w-full absolute bottom-5 text-white flex items-center justify-center space-x-2">
                    <div className='p-3 rounded-full cursor-pointer hover:bg-slate-500 bg-slate-400'><BiExitFullscreen size={22}/></div>
                    <div className='p-3 rounded-full cursor-pointer hover:bg-slate-500 bg-slate-400'><AiOutlineAudio size={22}/></div>
                    <div className='p-4 rounded-2xl cursor-pointer hover:bg-pink-700 bg-pink-600'><MdCallEnd size={28}/></div>
                    <div className='p-3 rounded-full cursor-pointer hover:bg-slate-500 bg-slate-400'><HiVideoCamera size={22}/></div>
                    <div className='p-3 rounded-full cursor-pointer hover:bg-slate-500 bg-slate-400'><BsFillDisplayFill size={22}/></div>
                </div>
            </div>
        </div>
    );
};

export default Main;