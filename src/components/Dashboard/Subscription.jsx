import React from 'react';
import Calendar from "../../assets/icons/Calendar";
import Payment from "../../assets/icons/Payment";
import Sparkle from "../../assets/icons/Sparkle";
import Select from "../Select/Select";
import Table from "./Referral/Table";

const Subscription = () => {
    const items = [
        {
            key: 'item1',
            title: 'Билд 1'
        },
        {
            key: 'item2',
            title: 'Билд 2'
        }
    ]
    return (
        <div className={'p-6'}>
            <h1 className={'text-2xl font-semibold text-primary'}>Управление подпиской</h1>
            <div className='mt-6 rounded-md bg-white dark:bg-neutral py-6'>
                <div className='px-6 flex flex-col gap-6'>
                    <div>
                        <h4 className='text-2xl text-primary dark:text-white font-semibold'>Premium</h4>
                        <p className='mt-3 text-sm text-secondary'>Ваша подписка Deseption Premium активна</p>
                    </div>
                    <div>
                        <div className='flex items-center gap-2'>
                            <Calendar/> <p className='text-sm text-secondary'>Дата продления: 14 июня 2024</p>
                        </div>
                        <div className='mt-3 flex items-center gap-2'>
                            <Payment/> <p className='text-sm text-secondary'>Стоимость: 750 ₽ / мес</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 md:flex-row justify-between'>
                        <div className='flex flex-col md:flex-row gap-3'>
                            <button
                                className={'px-5 h-10 text-white text-[14px] font-medium text-center bg-alert rounded-[6px] hover:bg-[#CB002C] transition-all'}>Продлить
                                подписку
                            </button>
                            <button
                                className={'px-5 h-[40px] text-primary text-sm text-center font-medium border border-substle bg-white rounded-[6px] hover:border-alert hover:text-alert transition-all'}>Активировать
                                промокод
                            </button>
                        </div>
                        <button
                            className={'px-5 h-[40px] text-primary text-sm text-center font-medium border border-substle bg-white rounded-[6px] hover:border-alert hover:text-alert transition-all'}>Отменить
                            подписку
                        </button>
                    </div>
                </div>
                <div className='w-full h-[1px] bg-subtle my-8'></div>
                <div className='px-6 flex flex-col gap-2 md:flex-row items-center justify-between'>
                    <div className='flex flex-col md:flex-row gap-3 items-center'>
                        <Sparkle/>
                        <p className='text-secondary dark:text-white text-sm text-center'>Улучшите подписку до Business, доплатив 250 ₽</p>
                    </div>
                    <button
                        className={'px-5 h-10 w-full md:w-fit text-white text-[14px] font-medium text-center bg-alert rounded-[6px] hover:bg-[#CB002C] transition-all'}>Улучшить
                    </button>
                </div>
            </div>
            <div className='mt-6 rounded-md dark:bg-neutral bg-white p-6'>
                <h4 className='text-primary text-base font-semibold text-center md:text-left dark:text-white'>Лоадер</h4>
                <p className='text-sm text-secondary mt-1.5 text-center md:text-left'>Вы можете выбрать лоадер для любой из доступных версий</p>
                <div className='flex flex-col md:flex-row gap-3 items-center mt-6'>
                    <div className='max-w-[555px] w-full'>
                        <Select items={items} defaultSelectedItem={'Выберите билд'}/>
                    </div>
                    <button
                        className={'px-5 h-10 w-full max-w-[555px] md:w-fit text-white text-[14px] font-medium text-center bg-alert rounded-[6px] hover:bg-[#CB002C] transition-all'}>Скачать
                        лоадер
                    </button>
                </div>
            </div>
            <div className='w-full h-[1px] bg-substle my-6'></div>
            <div>
                <h4 className='text-primary text-2xl font-semibold'>Доступные планы</h4>
                <Table/>
            </div>
        </div>
    );
};

export default Subscription;