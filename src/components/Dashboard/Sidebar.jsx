import React from 'react';
import {Link, useLocation} from "react-router-dom";

//IMG
import logo from '../../assets/logo.png'
import CombatIcon from "../../assets/icons/CombatIcon";
import ConfigIcon from "../../assets/icons/ConfigIcon";
import FriendsIcon from "../../assets/icons/FriendsIcon";
import HudIcon from "../../assets/icons/HudIcon";
import VisualsIcon from "../../assets/icons/VisualsIcon";
import UtilityIcon from "../../assets/icons/UtilityIcon";
import FpsIcon from "../../assets/icons/FpsIcon";
import PartnerProgramm from "../../assets/icons/PartnerProgramm";
import SettingsIcon from "../../assets/icons/SettingsIcon";
import SupportIcon from "../../assets/icons/SupportIcon";
import SubscriptionIcon from "../../assets/icons/SubscriptionIcon";

const Sidebar = () => {
    const location = useLocation();
    return (
        <div className={'w-[280px] h-screen border-r border-[#e2e2e5] fixed'}>
            <div className='border-b border-[#e2e2e5]'>
                <img src={logo} alt={'logo'} className={'py-4 px-6'}/>
            </div>
            <div className={'flex flex-col justify-between sidebarHeight p-6'}>
                <div>
                    <div className={'pb-3 border-b border-[#e2e2e5] flex flex-col gap-1'}>
                        <Link
                            to={'/dashboard/config'}
                            className={`font-medium text-[14px] p-[10px] flex items-center gap-[10px] hover:bg-white rounded-[6px] transition-all ${location.pathname === '/dashboard/config' ? 'bg-white drop-shadow-xl' : ''}`}
                        >
                            <div className='w-5 h-5'>
                                <ConfigIcon
                                    className={`mx-auto ${location.pathname === '/dashboard/config' ? 'fill-[#FF0037]' : 'fill-[#66666e]'}`}/>
                            </div>
                            <span
                                className={location.pathname === '/dashboard/config' ? 'text-[#222225]' : 'text-[#66666e]'}>Конфигурации</span>
                        </Link>
                        <Link
                            to={'/dashboard/friends'}
                            className={`font-medium text-[14px] p-[10px] flex items-center gap-[10px] hover:bg-white rounded-[6px] transition-all ${location.pathname === '/dashboard/friends' ? 'bg-white drop-shadow-xl' : ''}`}
                        >
                            <div className='w-5 h-5'>
                                <FriendsIcon
                                    className={`mx-auto ${location.pathname === '/dashboard/friends' ? 'fill-[#FF0037]' : 'fill-[#66666e]'}`}/>
                            </div>
                            <span
                                className={location.pathname === '/dashboard/friends' ? 'text-[#222225]' : 'text-[#66666e]'}>Друзья</span>
                        </Link>
                    </div>
                    <div className={'py-3 border-b border-[#e2e2e5] flex flex-col gap-1'}>
                        <Link
                            to={'/dashboard/combat'}
                            className={`font-medium text-[14px] p-[10px] flex items-center gap-[10px] hover:bg-white rounded-[6px] transition-all ${location.pathname === '/dashboard/combat' ? 'bg-white drop-shadow-xl' : ''}`}
                        >
                            <div className='w-5 h-5 flex items-center'>
                                <CombatIcon
                                    className={`mx-auto ${location.pathname === '/dashboard/combat' ? 'fill-[#FF0037]' : 'fill-[#66666e]'}`}/>
                            </div>
                            <span
                                className={location.pathname === '/dashboard/combat' ? 'text-[#222225]' : 'text-[#66666e]'}>Combat</span>
                        </Link>
                        <Link
                            to={'/dashboard/visuals'}
                            className={`font-medium text-[14px] p-[10px] flex items-center gap-[10px] hover:bg-white rounded-[6px] transition-all ${location.pathname === '/dashboard/visuals' ? 'bg-white drop-shadow-xl' : ''}`}
                        >
                            <div className='w-5 h-5 flex items-center'>
                                <VisualsIcon
                                    className={`mx-auto ${location.pathname === '/dashboard/visuals' ? 'fill-[#FF0037]' : 'fill-[#66666e]'}`}/>
                            </div>
                            <span
                                className={location.pathname === '/dashboard/visuals' ? 'text-[#222225]' : 'text-[#66666e]'}>Visuals</span>
                        </Link>
                        <Link
                            to={'/dashboard/utility'}
                            className={`font-medium text-[14px] p-[10px] flex items-center gap-[10px] hover:bg-white rounded-[6px] transition-all ${location.pathname === '/dashboard/utility' ? 'bg-white drop-shadow-xl' : ''}`}
                        >
                            <div className='w-5 h-5 flex items-center'>
                                <UtilityIcon
                                    className={`mx-auto ${location.pathname === '/dashboard/utility' ? 'fill-[#FF0037]' : 'fill-[#66666e]'}`}/>
                            </div>
                            <span
                                className={location.pathname === '/dashboard/utility' ? 'text-[#222225]' : 'text-[#66666e]'}>Utility</span>
                        </Link>
                        <Link
                            to={'/dashboard/hud'}
                            className={`font-medium text-[14px] p-[10px] flex items-center gap-[10px] hover:bg-white rounded-[6px] transition-all ${location.pathname === '/dashboard/hud' ? 'bg-white drop-shadow-xl' : ''}`}
                        >
                            <div className='w-5 h-5 flex items-center'>
                                <HudIcon
                                    className={`mx-auto ${location.pathname === '/dashboard/hud' ? 'fill-[#FF0037]' : 'fill-[#66666e]'}`}/>
                            </div>
                            <span
                                className={location.pathname === '/dashboard/hud' ? 'text-[#222225]' : 'text-[#66666e]'}>HUD</span>
                        </Link>
                    </div>
                    <div className='pt-3'>
                        <div className={'flex items-center justify-between p-[10px]'}>
                            <div className={'flex items-center gap-[10px]'}>
                                <div className='w-5 h-5 flex items-center'>
                                    <FpsIcon className={'fill-[#66666e]'}/>
                                </div>
                                <p className={'text-[#66666e] text-[14px] font-medium'}>FPS</p>
                            </div>
                            <div className={'border rounded-[4px] flex text-[12px] font-medium p-[0.5px]'}>
                                <p className={'py-0.5 px-2 bg-white rounded-[2px] cursor-pointer'}>Выкл</p>
                                <p className={'py-0.5 px-2 cursor-pointer'}>1</p>
                                <p className={'py-0.5 px-2 cursor-pointer'}>2</p>
                                <p className={'py-0.5 px-2 cursor-pointer'}>3</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <Link
                        to={'/dashboard/referral'}
                        className={`flex items-center gap-2.5 text-sm hover:bg-white transition-all p-2.5 rounded-[6px] ${location.pathname === '/dashboard/referral' ? 'bg-white drop-shadow-xl' : ''}`}
                    >
                        <div className='w-5 h-5 flex items-center'>
                            <PartnerProgramm
                                className={`mx-auto ${location.pathname === '/dashboard/referral' ? 'fill-[#FF0037]' : 'fill-[#66666e]'}`}/>
                        </div>
                        <span
                            className={location.pathname === '/dashboard/referral' ? 'text-[#222225]' : 'text-[#66666e]'}>Партнерская программа</span>
                    </Link>
                    <Link
                        to={'/dashboard/settings'}
                        className={`flex items-center gap-2.5 text-sm hover:bg-white transition-all p-2.5 rounded-[6px] ${location.pathname === '/dashboard/settings' ? 'bg-white drop-shadow-xl' : ''}`}
                    >
                        <div className='w-5 h-5 flex items-center'>
                            <SettingsIcon
                                className={`mx-auto ${location.pathname === '/dashboard/settings' ? 'fill-[#FF0037]' : 'fill-[#66666e]'}`}/>
                        </div>
                        <span
                            className={location.pathname === '/dashboard/settings' ? 'text-[#222225]' : 'text-[#66666e]'}>Настройки</span>
                    </Link>
                    <Link
                        to={'/dashboard/support'}
                        className={`flex items-center gap-2.5 text-sm hover:bg-white transition-all p-2.5 rounded-[6px] ${location.pathname === '/dashboard/support' ? 'bg-white drop-shadow-xl' : ''}`}
                    >
                        <div className='w-5 h-5 flex items-center'>
                            <SupportIcon
                                className={`mx-auto ${location.pathname === '/dashboard/support' ? 'fill-[#FF0037]' : 'fill-[#66666e]'}`}/>
                        </div>
                        <span
                            className={location.pathname === '/dashboard/support' ? 'text-[#222225]' : 'text-[#66666e]'}>Поддержка</span>
                    </Link>
                    <div className={'flex justify-between border rounded-[6px] p-1 text-center text-sm font-medium'}>
                        <p className={'w-full py-1 text-[#66666e] cursor-pointer'}>Темная</p>
                        <p className={'w-full bg-white text-[#222225] py-1 cursor-pointer'}>Светлая</p>
                    </div>
                    <Link to={'/dashboard/subscription'}>
                        <div
                            className={'border py-[10px] mt-3 cursor-pointer flex gap-2 items-center justify-center bg-white rounded-md'}>
                            <div className='w-5 h-5 flex items-center'>
                                <SubscriptionIcon
                                    className={`mx-auto fill-[#222225]`}/>
                            </div>
                            <p className={'text-[#222225] text-sm'}>Управление подпиской</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;