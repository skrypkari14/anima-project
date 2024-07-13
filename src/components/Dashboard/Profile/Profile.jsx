import React from 'react';
import Avatar from "react-avatar";
import ProfileCalendar from "../../../assets/icons/ProfileCalendar";
import ProfileSettings from "../../../assets/icons/ProfileSettings";
import MessageCard from "./MessageCard";
import {Link} from "react-router-dom";

const Profile = () => {
    return (
        <div className='p-6'>
            <div className='p-6 mt-6 bg-white dark:bg-neutral items-center text-center md:text-left md:items-start rounded-md flex flex-col gap-6'>
                <Avatar size={128} src={'https://api.dicebear.com/9.x/initials/svg?seed=Sunshine'} round={true}/>
                <div>
                    <h4 className='text-[#000] dark:text-white text-2xl font-semibold'>sunshine</h4>
                    <p className='text-secondary text-sm'>люблю играть с читом Deseption</p>
                </div>
                <div className='flex flex-col md:flex-row items-center gap-2 text-secondary text-sm'>
                    <ProfileCalendar/>
                    <p>Регистрация 19 июн 2024</p>
                    <div className='w-1 h-1 rounded-full bg-secondary'/>
                    <p>Онлайн вчера в 19:30</p>
                    <div className='w-1 h-1 rounded-full bg-secondary'/>
                    <p>ID: 5511223</p>
                </div>
                <Link to={'/dashboard/profile/settings'}
                    className={'px-5 h-[40px] max-w-[237px] flex items-center group gap-2 text-primary text-sm text-center font-medium border border-subtle bg-white rounded-[6px] hover:border-alert hover:text-alert transition-all dark:bg-transparent dark:text-white dark:border-[#444449] dark:hover:bg-[#444449]'}>
                    <ProfileSettings className='fill-primary group-hover:fill-alert dark:fill-white dark:group-hover:fill-white'/>
                    <p>Редактировать профиль</p>
                </Link>
            </div>
            <div className='mt-6 px-6 py-3 bg-white dark:bg-neutral rounded-md flex gap-3'>
                <Avatar className='flex-none' size={40} src={'https://api.dicebear.com/9.x/initials/svg?seed=Sunshine'} round={true}/>
                <input className='outline-none appearance-none bg-transparent dark:text-white w-full text-sm' placeholder={'Напишите сообщение в профиле...'}/>
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

export default Profile;