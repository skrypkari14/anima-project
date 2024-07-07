import React, {useContext} from 'react';
import Sidebar from "../components/Dashboard/Sidebar";
import Navbar from "../components/Dashboard/Navbar";
import {Routes, Route} from "react-router-dom";
import Combat from '../components/Dashboard/Combat/Combat'
import Visuals from "../components/Dashboard/Visuals/Visuals";
import Utility from "../components/Dashboard/Utility/Utility";
import Hud from "../components/Dashboard/Hud/Hud";
import Referral from "../components/Dashboard/Referral/Referral";
import Subscription from "../components/Dashboard/Subscription";
import Profile from "../components/Dashboard/Profile/Profile";
import Settings from "../components/Dashboard/Profile/Settings";
import User from "../components/Dashboard/User/User";
import Friends from "../components/Dashboard/Friends/Friends";
import Config from "../components/Dashboard/Config/Config";
import {ToastContainer} from "react-toastify";



const Dashboard = () => {

    return (
        <div className={'min-w-screen min-h-screen bg-[#F1F1F2]'}>
            <ToastContainer />
            <Sidebar/>
            <div className='xl:pl-[280px] dark:bg-primary min-h-screen'>
                <Navbar/>
                <Routes>
                    <Route path={'/combat'} element={<Combat/>}/>
                    <Route path={'/visuals'} element={<Visuals/>}/>
                    <Route path={'/utility'} element={<Utility/>}/>
                    <Route path={'/hud'} element={<Hud/>}/>
                    <Route path={'/referral'} element={<Referral/>}/>
                    <Route path={'/subscription'} element={<Subscription/>}/>
                    <Route path={'/profile'} element={<Profile/>}/>
                    <Route path={'/profile/settings'} element={<Settings/>}/>
                    <Route path={'/user/:username'} element={<User/>}/>
                    <Route path={'/friends'} element={<Friends/>}/>
                    <Route path={'/config'} element={<Config/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default Dashboard;