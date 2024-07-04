import React from 'react';

// IMG
import logo from '../assets/logo.png'
import PrimaryButton from "../components/Button/PrimaryButton";

const Login = () => {
    return (
        <div className='flex min-h-screen justify-center lg:justify-between'>
            <div className='py-16 px-5 lg:px-0 mx-auto max-w-[486px] w-full flex flex-col justify-between'>
                <img alt={'logo'} src={logo} className={'max-w-[183px]'}/>
                <div className={'flex flex-col gap-[36px]'}>
                    <div>
                        <h1 className='text-[#222225] text-[24px] font-semibold'>Добро пожаловать!</h1>
                        <p className={'text-[#66666E] text-[14px] font-regular pt-[6px]'}>Войдите в свой аккаунт</p>
                    </div>
                    <div className={'flex flex-col gap-[12px]'}>
                        <div>
                            <label className={'text-[#66666E] text-[14px] font-medium'}>Логин</label>
                            <div className='h-[40px] border rounded-[6px] border-[#E2E2E5] mt-[6px]'>
                                <input className='outline-0 h-full px-2' placeholder={'Введите логин'}/>
                            </div>
                        </div>
                        <div>
                            <label className={'text-[#66666E] text-[14px] font-medium'}>Пароль</label>
                            <div className='h-[40px] border rounded-[6px] border-[#E2E2E5] mt-[6px]'>
                                <input className='outline-0 h-full px-2' placeholder={'Введите пароль'}/>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[16px]'>
                        <PrimaryButton text={'Войти'}/>
                        <div className={'flex items-center justify-between text-[14px]'}>
                            <p className={'text-[#66666E]'}>Нет аккаунта? <a href={'#'} className='text-[#FF0037]'>Регистрация</a></p>
                            <a href={'#'} className='text-[#FF0037]'>Забыли пароль?</a>
                        </div>
                    </div>
                </div>
                <p className={'text-[#66666E] text-[12px]'}>
                    Нажимая кнопку “Войти”, вы соглашаетесь с условиями
                </p>
            </div>
            <div className='w-1/2 bg-[#FF0037] hidden lg:block'>
                <div className={'min-h-screen bg-cover bg-no-repeat background'}/>
            </div>
        </div>
    );
};

export default Login;