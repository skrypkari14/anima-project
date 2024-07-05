import React from 'react';
import Verified from "../../../assets/icons/Verified";

const Table = () => {
    return (
        <div className='bg-white scroll overflow-x-scroll w-full rounded-md mt-6'>
            <table className='w-full'>
                <thead>
                <tr>
                    <th className='min-w-[277px]'>

                    </th>
                    <th className='p-6 min-w-[277px] border-l border-subtle'>
                        <div className='flex flex-col'>
                            <div className='flex flex-col gap-2 text-left'>
                                <span className='text-primary font-semibold'>Standard</span>
                                <span className='text-alert font-medium'>300 ₽ / мес </span>
                            </div>
                            <button
                                className={'h-10 mt-6 text-white text-[14px] font-medium text-center bg-alert rounded-[6px] hover:bg-[#CB002C] transition-all'}>Перейти
                            </button>
                        </div>
                    </th>
                    <th className='p-6 min-w-[277px] border-x border-subtle'>
                        <div className='flex flex-col'>
                            <div className='flex flex-col gap-2 text-left'>
                                <span className='text-primary font-semibold'>Premium</span>
                                <span className='text-alert font-medium'>750 ₽ / мес</span>
                            </div>
                            <button
                                className={'h-10 mt-6 text-white text-[14px] font-medium text-center text-surface bg-subtle rounded-[6px] hover:bg-subtle transition-all'}>Текущая
                            </button>
                        </div>
                    </th>
                    <th className='p-6 min-w-[277px]'>
                        <div className='flex flex-col'>
                            <div className='flex flex-col gap-2 text-left'>
                                <span className='text-primary font-semibold'>Business</span>
                                <span className='text-alert font-medium'>1590 ₽ / мес</span>
                            </div>
                            <button
                                className={'h-10 mt-6 text-white text-[14px] font-medium text-center bg-alert rounded-[6px] hover:bg-[#CB002C] transition-all'}>Перейти
                            </button>
                        </div>
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr className='border-t border-subtle'>
                    <td className='p-6'>
                        <p className='text-secundary font-semibold text-sm'>Функции</p>
                    </td>
                    <td className='border-x border-subtle'></td>
                    <td className='border-r border-subtle'></td>
                    <td></td>
                </tr>
                <tr className='text-primary text-sm'>
                    <td className='p-6'>
                        <p>Combat</p>
                    </td>
                    <td className='border-x border-subtle p-6'>1</td>
                    <td className='border-r border-subtle p-6'>2</td>
                    <td className='p-6'>
                        <div className='flex gap-1'>
                            <span>3</span>
                            <span className='text-alert text-xs py-0.5 px-1 bg-[#ffe6eb] rounded'>MAX</span>
                        </div>
                    </td>
                </tr>
                <tr className='text-primary text-sm'>
                    <td className='p-6'>
                        <p>Visuals</p>
                    </td>
                    <td className='border-x border-subtle p-6'>
                        <div className='flex gap-1'>
                            <span>3</span>
                            <span className='text-alert text-xs py-0.5 px-1 bg-[#ffe6eb] rounded'>MAX</span>
                        </div>
                    </td>
                    <td className='border-r border-subtle p-6'>
                        <div className='flex gap-1'>
                            <span>3</span>
                            <span className='text-alert text-xs py-0.5 px-1 bg-[#ffe6eb] rounded'>MAX</span>
                        </div>
                    </td>
                    <td className='p-6'>
                        <div className='flex gap-1'>
                            <span>3</span>
                            <span className='text-alert text-xs py-0.5 px-1 bg-[#ffe6eb] rounded'>MAX</span>
                        </div>
                    </td>
                </tr>
                <tr className='text-primary text-sm'>
                    <td className='p-6'>
                        <p>Utility</p>
                    </td>
                    <td className='border-x border-subtle p-6'>2</td>
                    <td className='border-r border-subtle p-6'>
                        <div className='flex gap-1'>
                            <span>3</span>
                            <span className='text-alert text-xs py-0.5 px-1 bg-[#ffe6eb] rounded'>MAX</span>
                        </div>
                    </td>
                    <td className='p-6'>
                        <div className='flex gap-1'>
                            <span>3</span>
                            <span className='text-alert text-xs py-0.5 px-1 bg-[#ffe6eb] rounded'>MAX</span>
                        </div>
                    </td>
                </tr>
                <tr className='text-primary text-sm'>
                    <td className='p-6'>
                        <p>World</p>
                    </td>
                    <td className='border-x border-subtle p-6'>1</td>
                    <td className='border-r border-subtle p-6'>2</td>
                    <td className='p-6'>
                        <div className='flex gap-1'>
                            <span>3</span>
                            <span className='text-alert text-xs py-0.5 px-1 bg-[#ffe6eb] rounded'>MAX</span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className='p-6'>
                        <p className='text-secundary font-semibold text-sm'>Функции</p>
                    </td>
                    <td className='border-x border-subtle'></td>
                    <td className='border-r border-subtle'></td>
                    <td></td>
                </tr>
                <tr className='text-primary text-sm'>
                    <td className='p-6'>
                        <p>Оптимизация fps (без изменения графики)</p>
                    </td>
                    <td className='border-x border-subtle p-6'>1</td>
                    <td className='border-r border-subtle p-6'>2</td>
                    <td className='p-6'>
                        <div className='flex gap-1'>
                            <span>3</span>
                            <span className='text-alert text-xs py-0.5 px-1 bg-[#ffe6eb] rounded'>MAX</span>
                        </div>
                    </td>
                </tr>
                <tr className='text-primary text-sm'>
                    <td className='p-6'>
                        <p>Своя беседа юзеров</p>
                    </td>
                    <td className='border-x border-subtle p-6'><Verified/></td>
                    <td className='border-r border-subtle p-6'><Verified/></td>
                    <td className='p-6'><Verified/></td>
                </tr>
                <tr className='text-primary text-sm'>
                    <td className='p-6'>
                        <p>Роль в дискорде</p>
                    </td>
                    <td className='border-x border-subtle p-6'><Verified/></td>
                    <td className='border-r border-subtle p-6'><Verified/></td>
                    <td className='p-6'><Verified/></td>
                </tr>
                <tr className='text-primary text-sm'>
                    <td className='p-6'>
                        <p>Полный Undetect</p>
                    </td>
                    <td className='border-x border-subtle p-6'><Verified/></td>
                    <td className='border-r border-subtle p-6'><Verified/></td>
                    <td className='p-6'><Verified/></td>
                </tr>
                <tr className='text-primary text-sm'>
                    <td className='p-6'>
                        <p>Первый доступ к обновлением читам, Бета тестирование</p>
                    </td>
                    <td className='border-x border-subtle p-6'></td>
                    <td className='border-r border-subtle p-6'><Verified/></td>
                    <td className='p-6'><Verified/></td>
                </tr>
                <tr className='text-primary text-sm'>
                    <td className='p-6'>
                        <p>Доступ к Takker</p>
                    </td>
                    <td className='border-x border-subtle p-6'></td>
                    <td className='border-r border-subtle p-6'></td>
                    <td className='p-6'><Verified/></td>
                </tr>
                <tr>
                    <td className='p-6'>
                        <p className='text-secundary font-semibold text-sm'>Дополнительно</p>
                    </td>
                    <td className='border-x border-subtle'></td>
                    <td className='border-r border-subtle'></td>
                    <td></td>
                </tr>
                <tr className='text-primary text-sm'>
                    <td className='p-6'>
                        <p></p>
                    </td>
                    <td className='border-x border-subtle p-6'></td>
                    <td className='border-r border-subtle p-6'></td>
                    <td className='p-6'>
                        <div className='flex items-start gap-[10px]'>
                            <span className='basis-0'><Verified/></span> <p>Ваш никнейм будет таблице почета сайта</p>
                        </div>
                    </td>
                </tr>
                <tr className='text-primary text-sm'>
                    <td className='p-6'>
                        <p></p>
                    </td>
                    <td className='border-x border-subtle p-6'></td>
                    <td className='border-r border-subtle p-6'></td>
                    <td className='p-6'>
                        <div className='flex items-start gap-[10px]'>
                            <span className='basis-0'><Verified/></span> <p>Доступ ко всем возможносям других
                            тарифов</p>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;