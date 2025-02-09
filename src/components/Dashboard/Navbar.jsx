import React, {useContext, useEffect, useState} from 'react';
import Avatar from 'react-avatar';
import {Link, useLocation} from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import logo_white from "../../assets/logo_white.png";
import logo from "../../assets/logo.png";
import ConfigIcon from "../../assets/icons/ConfigIcon";
import FriendsIcon from "../../assets/icons/FriendsIcon";
import CombatIcon from "../../assets/icons/CombatIcon";
import VisualsIcon from "../../assets/icons/VisualsIcon";
import UtilityIcon from "../../assets/icons/UtilityIcon";
import HudIcon from "../../assets/icons/HudIcon";
import FpsIcon from "../../assets/icons/FpsIcon";
import PartnerProgramm from "../../assets/icons/PartnerProgramm";
import SettingsIcon from "../../assets/icons/SettingsIcon";
import SupportIcon from "../../assets/icons/SupportIcon";
import SubscriptionIcon from "../../assets/icons/SubscriptionIcon";
import { MdOutlineCancel } from "react-icons/md";
import {DataContext} from "../../context/DataProvider";


const Navbar = () => {
    const {userInfo, selectedFps, setSelectedFps} = useContext(DataContext);
    useEffect(() => {
       console.log(selectedFps)
    }, [])
    const location = useLocation();
    const [darkMode, setDarkMode] = useState(true);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            setDarkMode(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const enableDarkMode = () => {
        setDarkMode(true);
        localStorage.setItem('theme', 'dark');
        document.documentElement.classList.add('dark');
    };

    const disableDarkMode = () => {
        setDarkMode(false);
        localStorage.setItem('theme', 'light');
        document.documentElement.classList.remove('dark');
    };

    return (
        <div className="px-6 py-3 border-b flex items-center justify-between border-subtle dark:border-[#444449]">
            <div
                className={`z-[1001] transition-all dark:bg-primary fixed min-h-screen max-w-96 w-full bg-[#f1f1f2] top-0 overflow-hidden left-0 bottom-0 border-r dark:border-secondary border-subtle ${open? 'translate-x-0' : '-translate-x-full'}`}>
                <div
                    className="flex px-6 py-4 items-center justify-between border-b border-subtle dark:border-[#444449] ">
                    <img src={darkMode ? logo_white : logo} className='scale-75' alt="logo"/>
                    <MdOutlineCancel className='text-xl text-primary dark:text-white' onClick={() => setOpen(false)}/>
                </div>
                <div className="flex flex-col justify-between sidebarHeight p-6">
                    <div>
                        <div className="pb-3 border-b border-subtle dark:border-[#444449]  flex flex-col gap-1">
                            <Link
                                onClick={() => setOpen(false)}
                                to="/dashboard/config"
                                className={`font-medium text-[14px] p-[10px] flex items-center gap-[10px] hover:bg-white dark:hover:bg-neutral rounded-[6px] transition-all ${location.pathname === '/dashboard/config' ? 'bg-white dark:bg-neutral drop-shadow-xl' : ''}`}
                            >
                                <div className="w-5 h-5">
                                    <ConfigIcon
                                        className={`mx-auto ${location.pathname === '/dashboard/config' ? 'fill-alert' : 'fill-secondary'}`}
                                    />
                                </div>
                                <span
                                    className={location.pathname === '/dashboard/config' ? 'text-primary dark:text-white' : 'text-secondary dark:text-surface'}>
                            Конфигурации
                        </span>
                            </Link>
                            <Link
                                onClick={() => setOpen(false)}
                                to="/dashboard/friends"
                                className={`font-medium text-[14px] p-[10px] flex items-center gap-[10px] hover:bg-white dark:hover:bg-neutral rounded-[6px] transition-all ${location.pathname === '/dashboard/friends' ? 'bg-white dark:bg-neutral drop-shadow-xl' : ''}`}
                            >
                                <div className="w-5 h-5">
                                    <FriendsIcon
                                        className={`mx-auto ${location.pathname === '/dashboard/friends' ? 'fill-alert' : 'fill-secondary'}`}
                                    />
                                </div>
                                <span
                                    className={location.pathname === '/dashboard/friends' ? 'text-primary dark:text-white' : 'text-secondary dark:text-surface'}>
                            Друзья
                        </span>
                            </Link>
                        </div>
                        <div className="py-3 border-b border-subtle dark:border-[#444449]  flex flex-col gap-1">
                            <Link
                                onClick={() => setOpen(false)}
                                to="/dashboard/combat"
                                className={`font-medium text-[14px] p-[10px] flex items-center gap-[10px] hover:bg-white rounded-[6px] transition-all dark:hover:bg-neutral ${location.pathname === '/dashboard/combat' ? 'bg-white dark:bg-neutral drop-shadow-xl' : ''}`}
                            >
                                <div className="w-5 h-5 flex items-center">
                                    <CombatIcon
                                        className={`mx-auto ${location.pathname === '/dashboard/combat' ? 'fill-alert' : 'fill-secondary'}`}
                                    />
                                </div>
                                <span
                                    className={location.pathname === '/dashboard/combat' ? 'text-primary dark:text-white' : 'text-secondary dark:text-surface'}>
                            Combat
                        </span>
                            </Link>
                            <Link
                                onClick={() => setOpen(false)}
                                to="/dashboard/visuals"
                                className={`font-medium text-[14px] p-[10px] flex items-center gap-[10px] hover:bg-white rounded-[6px] transition-all dark:hover:bg-neutral ${location.pathname === '/dashboard/visuals' ? 'bg-white dark:bg-neutral drop-shadow-xl' : ''}`}
                            >
                                <div className="w-5 h-5 flex items-center">
                                    <VisualsIcon
                                        className={`mx-auto ${location.pathname === '/dashboard/visuals' ? 'fill-alert' : 'fill-secondary'}`}
                                    />
                                </div>
                                <span
                                    className={location.pathname === '/dashboard/visuals' ? 'text-primary dark:text-white' : 'text-secondary dark:text-surface'}>
                            Visuals
                        </span>
                            </Link>
                            <Link
                                onClick={() => setOpen(false)}
                                to="/dashboard/utility"
                                className={`font-medium text-[14px] p-[10px] flex items-center gap-[10px] hover:bg-white rounded-[6px] transition-all dark:hover:bg-neutral ${location.pathname === '/dashboard/utility' ? 'bg-white dark:bg-neutral drop-shadow-xl' : ''}`}
                            >
                                <div className="w-5 h-5 flex items-center">
                                    <UtilityIcon
                                        className={`mx-auto ${location.pathname === '/dashboard/utility' ? 'fill-alert' : 'fill-secondary'}`}
                                    />
                                </div>
                                <span
                                    className={location.pathname === '/dashboard/utility' ? 'text-primary dark:text-white' : 'text-secondary dark:text-surface'}>
                            Utility
                        </span>
                            </Link>
                            <Link
                                onClick={() => setOpen(false)}
                                to="/dashboard/hud"
                                className={`font-medium text-[14px] p-[10px] flex items-center gap-[10px] hover:bg-white rounded-[6px] transition-all dark:hover:bg-neutral ${location.pathname === '/dashboard/hud' ? 'bg-white dark:bg-neutral drop-shadow-xl' : ''}`}
                            >
                                <div className="w-5 h-5 flex items-center">
                                    <HudIcon
                                        className={`mx-auto ${location.pathname === '/dashboard/hud' ? 'fill-alert' : 'fill-secondary'}`}
                                    />
                                </div>
                                <span
                                    className={location.pathname === '/dashboard/hud' ? 'text-primary dark:text-white' : 'text-secondary dark:text-surface'}>
                            HUD
                        </span>
                            </Link>
                        </div>
                        <div className="pt-3">
                            <div className="flex items-center justify-between p-[10px]">
                                <div className="flex items-center gap-[10px]">
                                    <div className="w-5 h-5 flex items-center">
                                        <FpsIcon className="fill-secondary"/>
                                    </div>
                                    <p className="text-secondary text-[14px] font-medium">FPS</p>
                                </div>
                                <div
                                    className="border border-subtle dark:border-[#444449]  rounded-[4px] flex text-[12px] dark:text-surface font-medium p-[1px]">
                                    <p onClick={() => setSelectedFps(0)}
                                       className={`transition-all py-0.5 px-2 cursor-pointer ${selectedFps === 0 ? 'bg-white dark:bg-neutral rounded-[2px]' : ''}`}>Выкл</p>
                                    <p onClick={() => setSelectedFps(1)}
                                       className={`transition-all w-6 flex items-center justify-center py-0.5 px-2 cursor-pointer ${selectedFps === 1 ? 'bg-white dark:bg-neutral rounded-[2px]' : ''}`}>1</p>
                                    <p onClick={() => setSelectedFps(2)}
                                       className={`transition-all w-6 flex items-center justify-center py-0.5 px-2 cursor-pointer ${selectedFps === 2 ? 'bg-white dark:bg-neutral rounded-[2px]' : ''}`}>2</p>
                                    <p onClick={() => setSelectedFps(3)}
                                       className={`transition-all w-6 flex items-center justify-center py-0.5 px-2 cursor-pointer ${selectedFps === 3 ? 'bg-white dark:bg-neutral rounded-[2px]' : ''}`}>3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <Link
                            onClick={() => setOpen(false)}
                            to="/dashboard/referral"
                            className={`flex items-center gap-2.5 text-sm hover:bg-white transition-all p-2.5 rounded-[6px] hover:dark:bg-neutral ${location.pathname === '/dashboard/referral' ? 'bg-white dark:bg-neutral drop-shadow-xl' : ''}`}
                        >
                            <div className="w-5 h-5 flex items-center">
                                <PartnerProgramm
                                    className={`mx-auto ${location.pathname === '/dashboard/referral' ? 'fill-alert' : 'fill-secondary'}`}
                                />
                            </div>
                            <span
                                className={location.pathname === '/dashboard/referral' ? 'text-primary dark:text-white' : 'text-secondary dark:text-surface'}>
                        Партнерская программа
                    </span>
                        </Link>
                        <Link
                            onClick={() => setOpen(false)}
                            to="/dashboard/profile/settings"
                            className={`flex items-center gap-2.5 text-sm hover:bg-white transition-all p-2.5 rounded-[6px] hover:dark:bg-neutral ${location.pathname === '/dashboard/profile/settings' ? 'bg-white dark:bg-neutral drop-shadow-xl' : ''}`}
                        >
                            <div className="w-5 h-5 flex items-center">
                                <SettingsIcon
                                    className={`mx-auto ${location.pathname === '/dashboard/profile/settings' ? 'fill-alert' : 'fill-secondary'}`}
                                />
                            </div>
                            <span
                                className={location.pathname === '/dashboard/profile/settings' ? 'text-primary dark:text-white' : 'text-secondary dark:text-surface'}>
                        Настройки
                    </span>
                        </Link>
                        <Link
                            onClick={() => setOpen(false)}
                            to="https://t.me/deseption1"
                            className={`flex items-center gap-2.5 text-sm hover:bg-white transition-all p-2.5 rounded-[6px] hover:dark:bg-neutral ${location.pathname === '/dashboard/support' ? 'bg-white dark:bg-neutral drop-shadow-xl' : ''}`}
                        >
                            <div className="w-5 h-5 flex items-center">
                                <SupportIcon
                                    className={`mx-auto ${location.pathname === '/dashboard/support' ? 'fill-alert' : 'fill-secondary'}`}
                                />
                            </div>
                            <span
                                className={location.pathname === '/dashboard/support' ? 'text-primary dark:text-white' : 'text-secondary dark:text-surface'}>
                        Поддержка
                    </span>
                        </Link>
                        <div
                            className="flex justify-between border border-subtle dark:border-[#444449]  rounded-[6px] p-1 text-center text-sm font-medium">
                            <p
                                onClick={enableDarkMode}
                                className={`transition-all w-full py-1 cursor-pointer ${darkMode ? 'text-primary dark:text-white bg-white dark:bg-neutral rounded' : 'dark:text-surface text-secondary'}`}>Темная</p>
                            <p
                                onClick={disableDarkMode}
                                className={`transition-all w-full text-primary py-1 cursor-pointer ${!darkMode ? 'text-primary dark:text-white bg-white dark:bg-neutral rounded' : 'dark:text-surface'}`}>Светлая</p>
                        </div>
                        <Link onClick={() => setOpen(false)} to="/dashboard/subscription">
                            <div
                                className="border border-subtle dark:border-[#444449]  py-[10px] mt-3 cursor-pointer flex gap-2 items-center justify-center bg-white rounded-md">
                                <div className="w-5 h-5 flex items-center">
                                    <SubscriptionIcon className="mx-auto fill-primary"/>
                                </div>
                                <p className="text-primary text-sm">Управление подпиской</p>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
            <div className='flex gap-2 items-center w-full'>
                <IoMdMenu className='text-2xl dark:text-white xl:hidden cursor-pointer' onClick={() => setOpen(true)}/>
                <div
                    className="sm:block hidden h-10 w-full max-w-80 dark:bg-neutral bg-white rounded-md border border-subtle dark:border-[#444449]">
                    <input className="w-full placeholder:text-secondary placeholder-text-sm bg-transparent dark:text-white h-full px-2 text-sm outline-none appearance-none" placeholder={'Поиск пользователей...'}/>
                </div>
            </div>
            <div className="flex items-center gap-3 min-w-fit">
                <div className="flex flex-col text-right">
                    <span className="font-medium text-sm dark:text-white">{userInfo.Username || 'username'}</span>
                    <span className="text-sm text-secondary dark:text-surface">
                        Premium <span className="text-alert">5 дней</span>
                    </span>
                </div>
                <Link to="/dashboard/profile">
                    <Avatar size={40} src="https://api.dicebear.com/9.x/initials/svg?seed=Sunshine" round={20}/>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
