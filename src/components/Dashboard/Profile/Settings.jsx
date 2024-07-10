import React from 'react';
import Back from "../../../assets/icons/Back";
import {Link, useNavigate} from "react-router-dom";
import Avatar from "react-avatar";

const Settings = () => {
    const navigate = useNavigate();
    return (
        <div className='p-6'>
            <div className={'text-2xl font-semibold text-primary dark:text-white flex items-center gap-3'}>
                <button onClick={() => {navigate(-1)}}>
                    <Back/>
                </button>
                <h1>Настройки профиля</h1>
            </div>
            <div className='p-6 rounded-md bg-white dark:bg-neutral flex flex-col gap-6 text-primary text-sm font-medium mt-6'>
                <h4 className={'text-base dark:text-white'}>Профиль</h4>
                <div>
                    <p className={'text-center dark:text-white md:text-left'}>Фото профиля</p>
                    <div className='flex flex-col md:flex-row gap-3 items-center mt-1.5'>
                        <Avatar className='flex-none' size={50} src={'https://api.dicebear.com/9.x/initials/svg?seed=Sunshine'} round={true}/>
                        <div className='relative'>
                            <input
                                type="file"
                                className="upload absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                            />
                            <button
                                className={'px-5 h-[40px] text-primary text-sm text-center font-medium border border-[#e2e2e5] bg-white rounded-[6px] hover:border-[#ff0037] hover:text-[#ff0037] transition-all'}>
                                Загрузить файл
                            </button>
                        </div>
                        <p className='text-[#66666e] font-normal'>Файл не выбран</p>
                    </div>
                </div>
                <div className='dark:text-white'>
                    <label>Имя пользователя</label>
                    <div className='w-full h-10 border border-[#e2e2e5] px-3 rounded-md mt-1.5'>
                        <input className='outline-none appearance-none h-10 w-full bg-transparent' placeholder={'Введите логин'}/>
                    </div>
                </div>
                <div className='dark:text-white'>
                    <label>Описание</label>
                    <div className='w-full h-10 border border-[#e2e2e5] px-3 rounded-md mt-1.5'>
                        <input className='outline-none appearance-none h-10 w-full bg-transparent' placeholder={'Введите описание'}/>
                    </div>
                </div>
                <div className='dark:text-white'>
                    <label>Ссылка на профиль</label>
                    <div className='w-full h-10 border border-[#e2e2e5] px-3 rounded-md mt-1.5'>
                        <input className='outline-none appearance-none h-10 w-full bg-transparent' placeholder={'deseption.ru/sunshine'}/>
                    </div>
                </div>
                <div className='dark:text-white'>
                    <label>CSS-код для ника</label>
                    <textarea
                        className='outline-none appearance-none border border-[#e2e2e5] mt-1.5 p-3 rounded-md h-56 w-full bg-transparent'
                        placeholder={'Введите CSS-код'}/>
                </div>
                <button
                    className={'px-5 max-w-[200px] h-10 text-white text-sm font-medium text-center bg-[#FF0037] rounded-[6px] hover:bg-[#CB002C] transition-all'}>
                    Сохранить настройки
                </button>
            </div>
            <div className='p-6 rounded-md bg-white dark:bg-neutral flex flex-col gap-6 text-primary text-sm font-medium mt-3'>
                <h4 className='font-semibold dark:text-white text-base'>Изменение пароля</h4>
                <div className='dark:text-white'>
                    <label>Старый пароль</label>
                    <div className='w-full h-10 border border-[#e2e2e5] px-3 rounded-md mt-1.5'>
                        <input className='outline-none appearance-none h-10 w-full bg-transparent' placeholder={'Старый пароль'}/>
                    </div>
                </div>
                <div className='dark:text-white'>
                    <label>Новый пароль</label>
                    <div className='w-full h-10 border border-[#e2e2e5] px-3 rounded-md mt-1.5'>
                        <input className='outline-none appearance-none h-10 w-full bg-transparent' placeholder={'Новый пароль'}/>
                    </div>
                </div>
                <div className='dark:text-white'>
                    <label>Повторите новый пароль</label>
                    <div className='w-full h-10 border border-[#e2e2e5] px-3 rounded-md mt-1.5'>
                        <input className='outline-none appearance-none h-10 w-full bg-transparent' placeholder={'Повторите новый пароль'}/>
                    </div>
                </div>
                <button
                    className={'px-5 max-w-[200px] h-10 text-white text-sm font-medium text-center bg-[#FF0037] rounded-[6px] hover:bg-[#CB002C] transition-all'}>
                    Изменить пароль
                </button>
            </div>
        </div>
    );
};

export default Settings;