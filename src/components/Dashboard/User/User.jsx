import React from 'react';
import { useParams } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import Avatar from "react-avatar";
import Back from "../../../assets/icons/Back";
import ProfileCalendar from "../../../assets/icons/ProfileCalendar";
import ProfileSettings from "../../../assets/icons/ProfileSettings";
import UserAdd from "../../../assets/icons/UserAdd";
import MessageCard from "../Profile/MessageCard";


const User = () => {
    const navigate = useNavigate();
    const { username } = useParams();

    return (
        <div className='p-6'>
            <div className={'text-2xl font-semibold text-[#222225] flex items-center gap-3'}>
                <button onClick={() => {
                    navigate(-1)
                }}>
                    <Back/>
                </button>
                <h1>Профиль {username}</h1>
            </div>
            <div className='p-6 mt-6 bg-white rounded-md flex flex-col items-center md:items-start text-center md:text-left gap-6 relative'>
                <Avatar className='my-6 md:mt-0' size={128} src={`https://api.dicebear.com/9.x/initials/svg?seed=${username}`} round={true}/>
                <div>
                    <h4 className='text-[#000] text-2xl font-semibold'>{username}</h4>
                    <p className='text-[#66666e] text-sm'>люблю играть с читом Deseption</p>
                </div>
                <div className='flex flex-col md:flex-row items-center gap-2 text-[#66666e] text-sm'>
                    <ProfileCalendar/>
                    <p>Регистрация 19 июн 2024</p>
                    <div className='w-1 h-1 rounded-full bg-[#66666e]'/>
                    <p>Онлайн вчера в 19:30</p>
                    <div className='w-1 h-1 rounded-full bg-[#66666e]'/>
                    <p>ID: 5511223</p>
                </div>
                <div className='flex flex-col md:flex-row gap-3'>
                    <button
                        className={'px-5 h-10 text-white flex gap-2 items-center text-[14px] font-medium text-center bg-[#FF0037] rounded-[6px] hover:bg-[#CB002C] transition-all'}>
                        <UserAdd/>
                        <span>Добавить в друзья</span>
                    </button>
                    <button
                        className={'px-5 h-[40px] text-[#222225] text-sm text-center font-medium border border-[#e2e2e5] bg-white rounded-[6px] hover:border-[#ff0037] hover:text-[#ff0037] transition-all'}>Пригласить
                        в игру
                    </button>
                </div>
                <span
                    className='absolute right-1/2 translate-x-1/2 md:translate-x-0 md:right-6 top-6 text-[#ff0037] font-medium text-sm py-1.5 px-3 cursor-default bg-[#ffe6eb] rounded'>Premium</span>
            </div>
            <div className='mt-6 px-6 py-3 bg-white rounded-md flex gap-3'>
                <Avatar className='flex-none' size={40} src={'https://api.dicebear.com/9.x/initials/svg?seed=Sunshine'} round={true}/>
                <input className='outline-0 w-full text-sm' placeholder={'Напишите сообщение в профиле...'}/>
            </div>
            <div className='mt-3 flex flex-col gap-3'>
                <MessageCard
                    username="lorri73"
                    date="June 4, 2024 11:57"
                    comment="Can you check if we have any available slots for a team training session next week?"
                    premium={true}
                />
                <MessageCard
                    username="johnDoe"
                    date="July 5, 2024 10:30"
                    comment="We need to schedule a meeting with the project team."
                    premium={false}
                />
            </div>
        </div>
    );
};

export default User;