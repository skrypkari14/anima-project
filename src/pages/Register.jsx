import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import PrimaryButton from "../components/Button/PrimaryButton";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// IMG
import logo from '../assets/logo.png'

const Register = () => {
    const [inputLogin, setInputLogin] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputPassword, setInputPassword] = useState('');
    const [inputConfirmPassword, setInputConfirmPassword] = useState('');
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleRegister = async () => {
        // Проверка на заполнение всех полей
        if (!inputLogin || !inputPassword || !inputConfirmPassword || !inputEmail) {
            toast.error('Все поля обязательны для заполнения', {
                position: windowSize >= 1024 ? 'top-left' : 'top-center',
            });
            return;
        }

        // Проверка длины логина и пароля
        if (inputLogin.length > 128 || inputPassword.length > 128) {
            toast.error('Логин и пароль не могут превышать 128 символов', {
                position: windowSize >= 1024 ? 'top-left' : 'top-center',
            });
            return;
        }

        // Проверка на совпадение паролей
        if (inputPassword !== inputConfirmPassword) {
            toast.error('Пароли не совпадают!', {
                position: windowSize >= 1024 ? 'top-left' : 'top-center',
            });
            return;
        }

        // Проверка валидности email
        if (!validateEmail(inputEmail)) {
            toast.error('Введите корректный email', {
                position: windowSize >= 1024 ? 'top-left' : 'top-center',
            });
            return;
        }

        try {
            const response = await axios.post('/api/v1/register', {
                login: inputLogin,
                email: inputEmail,
                password: inputPassword
            });

            if (response.data.redirect) {
                const { token } = response.data;
                Cookies.set('jwt', token, { expires: 1 });
                window.location.href = response.data.redirect;
            } else if (response.status === 400) {
                toast.error('Введите все поля корректно!', {
                    position: windowSize >= 1024 ? 'top-left' : 'top-center',
                });
            } else if (response.status === 401) {
                toast.error('Неверный пароль!', {
                    position: windowSize >= 1024 ? 'top-left' : 'top-center',
                });
            } else if (response.status === 404) {
                toast.error('Пользователь не найден!', {
                    position: windowSize >= 1024 ? 'top-left' : 'top-center',
                });
            } else {
                toast.error('Неизвестная ошибка, попробуйте позже...', {
                    position: windowSize >= 1024 ? 'top-left' : 'top-center',
                });
            }
        } catch (error) {
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

    // Функция для проверки валидности email
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    return (
        <div className='flex min-h-screen justify-center lg:justify-between'>
            <ToastContainer />
            <div className='py-16 px-5 lg:px-0 mx-auto max-w-[486px] w-full flex flex-col justify-between'>
                <img alt={'logo'} src={logo} className={'max-w-[183px]'}/>
                <div className={'flex flex-col gap-[36px]'}>
                    <div>
                        <h1 className='text-[#222225] text-[24px] font-semibold'>Добро пожаловать!</h1>
                        <p className={'text-[#66666E] text-[14px] font-regular pt-[6px]'}>Создайте новый аккаунт</p>
                    </div>

                    <div className={'flex flex-col gap-[12px]'}>
                        <div>
                            <label className={'text-[#66666E] text-[14px] font-medium'}>Email</label>
                            <div className='h-[40px] border rounded-[6px] border-[#E2E2E5] mt-[6px]'>
                                <input className='outline-0 h-full w-full px-2' value={inputEmail} onChange={(e) => {
                                    setInputEmail(e.target.value)
                                }} placeholder={'Введите свою почту'}/>
                            </div>
                        </div>
                        <div>
                            <label className={'text-[#66666E] text-[14px] font-medium'}>Логин</label>
                            <div className='h-[40px] border rounded-[6px] border-[#E2E2E5] mt-[6px]'>
                                <input className='outline-0 h-full w-full px-2' value={inputLogin} onChange={(e) => {
                                    setInputLogin(e.target.value)
                                }} placeholder={'Введите логин'}/>
                            </div>
                        </div>
                        <div>
                            <label className={'text-[#66666E] text-[14px] font-medium'}>Пароль</label>
                            <div className='h-[40px] border rounded-[6px] border-[#E2E2E5] mt-[6px]'>
                                <input className='outline-0 h-full w-full px-2' type={'password'} value={inputPassword}
                                       onChange={(e) => {
                                           setInputPassword(e.target.value)
                                       }} placeholder={'Введите пароль'}/>
                            </div>
                        </div>
                        <div>
                            <label className={'text-[#66666E] text-[14px] font-medium'}>Повторите пароль</label>
                            <div className='h-[40px] border rounded-[6px] border-[#E2E2E5] mt-[6px]'>
                                <input className='outline-0 h-full w-full px-2' type={'password'} value={inputConfirmPassword}
                                       onChange={(e) => {
                                           setInputConfirmPassword(e.target.value)
                                       }} placeholder={'Повторите пароль'}/>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[16px]'>
                        <PrimaryButton onClick={handleRegister} text={'Зарегистрироваться'}/>
                        <div className={'flex items-center justify-between text-[14px]'}>
                            <p className={'text-[#66666E]'}>Уже есть аккаунт? <a href={'#'}
                                                                                 className='text-[#FF0037]'>Вход</a>
                            </p>
                        </div>
                    </div>
                </div>
                <p className={'text-[#66666E] text-[12px]'}>
                    Нажимая кнопку “Зарегистрироваться”, вы соглашаетесь с условиями
                </p>
            </div>
            <div className='w-1/2 bg-[#FF0037] hidden lg:block'>
                <div className={'min-h-screen bg-cover bg-no-repeat background'}/>
            </div>
        </div>
    );
};

export default Register;
