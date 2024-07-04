import React from 'react';
import Sidebar from "../components/Dashboard/Sidebar";
import Navbar from "../components/Dashboard/Navbar";
import {Routes, Route} from "react-router-dom";
import Combat from '../components/Dashboard/Combat/Combat'
import Visuals from "../components/Dashboard/Visuals/Visuals";
import Utility from "../components/Dashboard/Utility/Utility";
import Hud from "../components/Dashboard/Hud/Hud";
import Referral from "../components/Dashboard/Referral/Referral";


const Dashboard = () => {
    return (
        <div className={'min-w-screen min-h-screen bg-[#F1F1F2]'}>
            <Sidebar/>
            <div className='pl-[280px]'>
                <Navbar/>
                <Routes>
                    <Route path={'/combat'} element={<Combat/>}/>
                    <Route path={'/visuals'} element={<Visuals/>}/>
                    <Route path={'/utility'} element={<Utility/>}/>
                    <Route path={'/hud'} element={<Hud/>}/>
                    <Route path={'/referral'} element={<Referral/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;