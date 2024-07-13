import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import PrimaryButton from '../../Button/PrimaryButton';
import SecondButton from '../../Button/SecondButton';

const Friends = () => {
    const friends = [
        {
            username: 'iva838',
            date: 'Добавлен 04 Июня 2024',
            online: true
        },
        {
            username: 'james_hall',
            date: 'Добавлен 16 Июня 2024',
            online: false
        },
        {
            username: 'r.m.smith',
            date: 'Добавлен 10 Июня 2024',
            online: false
        },
    ];

    const [isOpen, setOpen] = useState(false);

    const toggleModal = () => {
        setOpen(!isOpen);
    };

    return (
        <div className='p-6'>
            {isOpen && (
                <div className='fixed z-50 px-2 sm:px-0 w-screen h-screen bg-primary/40 left-0 top-0 flex justify-center items-center'>
                    <div className='bg-white dark:bg-neutral max-w-[460px] w-full py-6 flex flex-col justify-center rounded-md'>
                        <h4 className='px-6 text-lg font-semibold text-primary dark:text-white'>Добавить друга</h4>
                        <div className='p-6 border-b border-subtle dark:border-secondary'>
                            <label className='dark:text-surface'>Введите никнейм друга</label>
                            <div className='h-10 px-2 border border-subtle dark:border-secondary rounded-md w-full mt-3'>
                                <input
                                    placeholder='Введите никнейм друга'
                                    className='w-full h-10 outline-none appearance-none bg-transparent text-sm text-primary dark:text-white'
                                />
                            </div>
                        </div>
                        <div className='px-6 pt-6 flex gap-3'>
                            <div className='w-[170px]'>
                                <PrimaryButton text={'Добавить'} />
                            </div>
                            <div className='w-[90px]'>
                                <SecondButton text={'Отмена'} onClick={toggleModal} />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className='flex flex-col justify-center items-center text-center gap-4 md:flex-row md:text-left md:justify-between md:items-end'>
                <div>
                    <h1 className='text-2xl font-semibold text-primary dark:text-white'>Друзья</h1>
                    <p className='text-sm text-secondary mt-1.5'>
                        Вы можете добавить ники внутреигровых друзей, чтобы им не проходил урон
                    </p>
                </div>
                <button
                    onClick={toggleModal}
                    className='px-5 h-10 text-white text-[14px] font-medium text-center bg-alert rounded-[6px] hover:bg-[#CB002C] transition-all'
                >
                    Добавить друга
                </button>
            </div>
            <div className='mt-6 bg-white dark:bg-neutral rounded-md flex flex-col'>
                {friends.map((friend, index) => (
                    <div
                        key={friend.username}
                        className={`p-6 flex flex-col sm:flex-row justify-between items-center ${index + 1 !== friends.length ? 'border-b border-subtle dark:border-[#444449]' : ''}`}
                    >
                        <div className='flex items-center gap-4'>
                            <Link to={`/dashboard/user/${friend.username}`} className='relative'>
                                <Avatar
                                    size={48}
                                    src={`https://api.dicebear.com/9.x/initials/svg?seed=${friend.username}`}
                                    round={true}
                                />
                                {friend.online && (
                                    <div className='w-3.5 h-3.5 rounded-full border-2 border-white dark:border-neutral bg-[#26BD6C] absolute bottom-0 right-0' />
                                )}
                            </Link>
                            <div>
                                <h4 className='text-primary dark:text-white font-medium'>{friend.username}</h4>
                                <p className='text-secondary text-sm mt-1'>{friend.date}</p>
                            </div>
                        </div>
                        <button className='px-5 w-full mt-2 dark:bg-transparent dark:text-white dark:border-[#444449] dark:hover:bg-[#444449] sm:w-auto sm:mt-0 h-[40px] text-primary text-sm text-center font-medium border border-subtle bg-white rounded-[6px] hover:border-alert hover:text-alert transition-all'>
                            Удалить
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Friends;
