import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import PrimaryButton from "../components/Button/PrimaryButton";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// IMG
import logo from '../assets/logo.png'


const Login = () => {
    const [inputLogin, setInputLogin] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    // eslint-disable-next-line
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    console.log(windowSize);

    const handleLogin = async () => {
        if (!inputLogin || !inputPassword) {
            toast.error('Логин и пароль обязательны для заполнения', {
                position: windowSize >= 1024 ? 'top-left' : 'top-center',
            });
            return;
        }
        if (inputLogin.length > 128 || inputPassword.length > 128) {
            toast.error('Логин и пароль не могут превышать 128 символов', {
                position: windowSize >= 1024 ? 'top-left' : 'top-center',
            });
            return;
        }
        try{
            const response = await axios.post('/api/v1/login', {
                login: inputLogin,
                password: inputPassword
            });
            if (response.data.redirect){
                const { token } = response.data;
                Cookies.set('jwt', token, { expires: 1 });
                window.location.href = response.data.redirect;
            }else if(response.status === 400){
                toast.error('Введите логин и пароль!', {
                    position: windowSize >= 1024 ? 'top-left' : 'top-center',
                });
            }else if(response.status === 401){
                toast.error('Неверный пароль!', {
                    position: windowSize >= 1024 ? 'top-left' : 'top-center',
                });
            }else if(response.status === 404){
                toast.error('Пользователь не найден!', {
                    position: windowSize >= 1024 ? 'top-left' : 'top-center',
                });
            } else {
                toast.error('Неизвестная ошибка, попробуйте позже...', {
                    position: windowSize >= 1024 ? 'top-left' : 'top-center',
                });
            }
        }catch (error){
            if (error.response) {
                toast.error('Ошибка сервера, попробуйте позже...', {
                    position: windowSize >= 1024 ? 'top-left' : 'top-center',
                });
            } else {
                toast.error('Неизвестная ошибка, попробуйте позже...', {
                    position: windowSize >= 1024 ? 'top-left' : 'top-center',
                });
            }
        }
    }

    return (
        <div className='flex min-h-screen justify-center lg:justify-between'>
            <ToastContainer />
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
                                <input className='outline-0 h-full w-full px-2' value={inputLogin} onChange={(e) => {setInputLogin(e.target.value)}} placeholder={'Введите логин'}/>
                            </div>
                        </div>
                        <div>
                            <label className={'text-[#66666E] text-[14px] font-medium'}>Пароль</label>
                            <div className='h-[40px] border rounded-[6px] border-[#E2E2E5] mt-[6px]'>
                                <input className='outline-0 h-full w-full px-2' type={'password'} value={inputPassword} onChange={(e) => {setInputPassword(e.target.value)}} placeholder={'Введите пароль'}/>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[16px]'>
                        <PrimaryButton onClick={handleLogin} text={'Войти'}/>
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