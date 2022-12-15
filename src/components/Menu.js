import React from 'react';
import { BsChatDotsFill, BsPeopleFill, BsFillChatQuoteFill, BsFillFileBarGraphFill, BsPlayBtn } from 'react-icons/bs';
import { BiNews } from 'react-icons/bi';
import { IoIosVideocam, IoMdSettings } from 'react-icons/io'

const Menu = ({ isOpen, setIsOpen }) => {
    return (
        <div>
            <div className="logo cursor-pointer"><BsPlayBtn size={38} color={"#704abc"} className="m-auto my-4"/></div>
                <div className="mt-32">
                    <div className={`fa ${isOpen?"border-indigo-500 border-r-4":""} cursor-pointer`}><BsChatDotsFill size={44} color={isOpen?"#7816f7":"#9ea5af"} className={`hover:bg-slate-200 mx-auto my-4 py-3 rounded-md ${isOpen?"bg-indigo-100":""}`}
                        onClick={(e) => setIsOpen()}
                    /></div>
                    <div className="fa cursor-pointer"><BsPeopleFill size={44} color={"#9ea5af"} className="mx-auto my-4 py-3 hover:bg-slate-200 rounded-md"/></div>
                    <div className="fa cursor-pointer"><BiNews size={44} color={"#9ea5af"} className="mx-auto my-4 py-3 hover:bg-slate-200 rounded-md"/></div>
                    <div className="fa cursor-pointer"><BsFillChatQuoteFill size={44} color={"#9ea5af"} className="mx-auto my-4 py-3 hover:bg-slate-200 rounded-md"/></div>
                    <div className="fa cursor-pointer"><BsFillFileBarGraphFill size={44} color={"#9ea5af"} className="mx-auto my-4 py-3 hover:bg-slate-200 rounded-md"/></div>
                    <div className="fa cursor-pointer"><IoIosVideocam size={44} color={"#9ea5af"} className="mx-auto my-4 py-3 hover:bg-slate-200 rounded-md"/></div>
                    <div className="fa cursor-pointer"><IoMdSettings size={44} color={"#9ea5af"} className="mx-auto my-4 py-3 hover:bg-slate-200 rounded-md"/></div>
                </div>
        </div>
    );
};

export default Menu;