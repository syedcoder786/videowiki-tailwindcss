import React, { useState } from 'react';
import Main from '../components/Main';
import Menu from '../components/Menu';
import Sidebar from '../components/Sidebar';

const VedioWiki = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <div className="flex h-screen">
                <div className="menu bg-slate-50 w-20">
                    <Menu isOpen={isOpen} setIsOpen={() => { setIsOpen(!isOpen) }}/>
                </div>
                {isOpen && 
                    <div className="sidebar bg-slate-200 w-1/4 relative">
                        <Sidebar/>
                    </div>
                }
                <div className="main bg-slate-50 w-9/12" style={!isOpen?{width:"100%"}:{}}>
                    <Main setIsOpen={() => { setIsOpen(!isOpen) }}/>
                </div>
            </div>
        </div>
    );
};

export default VedioWiki;