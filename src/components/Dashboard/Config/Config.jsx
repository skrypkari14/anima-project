import React, {useState} from 'react';
import GridIcon from "../../../assets/icons/GridIcon";
import TableIcon from "../../../assets/icons/TableIcon";
import Avatar from "react-avatar";
import {Link} from "react-router-dom";
import More from "../../../assets/icons/More";
import PrimaryButton from "../../Button/PrimaryButton";
import SecondButton from "../../Button/SecondButton";

const Config = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const [selectedLayout, setSelectedLayout] = useState(0);
    const [isOpen, setOpen] = useState(false);

    const configs = [
        {
            author: 'sunshine',
            name: 'Legit config',
            date: 'May 5, 2024',
            installs: 7,
            active: true
        },
        {
            author: 'sunshine',
            name: 'Night Vision',
            date: 'April 3, 2024',
            installs: 7,
            active: false
        },
        {
            author: 'kurt_bates',
            name: 'Infinite Resources',
            date: 'April 2, 2024',
            installs: 7,
            active: false
        },
        {
            author: 'sunshine',
            name: 'Invisibility',
            date: 'March 16, 2024',
            installs: 0,
            active: false
        }
    ]

    return (
        <div className='p-6'>
            {isOpen && (
                <div className='fixed z-[100] px-2 sm:px-0 w-screen h-screen bg-primary/80 left-0 top-0 flex justify-center items-center'>
                    <div className='bg-white dark:bg-neutral max-w-[460px] w-full py-6 flex flex-col justify-center rounded-md'>
                        <h4 className='px-6 text-lg font-semibold text-primary dark:text-white'>Создать конфиг из текущих настроек</h4>
                        <div className={'p-6 border-b border-subtle dark:border-secondary dark:text-subtle'}>
                            <label>Название конфига</label>
                            <div className='h-10 px-2 border border-subtle rounded-md w-full mt-3'>
                                <input placeholder='Введите название'
                                       className='w-full h-10 outline-0 bg-transparent text-sm text-primary dark:text-subtle'/>
                            </div>
                        </div>
                        <div className={'px-6 pt-6 flex gap-3'}>
                            <div className='w-[170px]'><PrimaryButton text={'Создать конфиг'}/></div>
                            <div className={'w-[90px]'}><SecondButton text={'Отмена'} onClick={() => {setOpen(false)}}/></div>
                        </div>
                    </div>
                </div>
            )}
            <div className='flex flex-col items-center sm:items-start'>
                <h1 className={'text-2xl font-semibold text-primary text-center sm:text-left dark:text-white'}>Управление конфигурациями</h1>
                <p className='text-sm text-secondary dark:text-surface max-w-[700px] mt-1.5 text-center sm:text-left'>Здесь вы можете настраивать и сохранять
                    различные
                    параметры, чтобы вы могли легко переключаться между разными наборами настроек в зависимости от ваших
                    нужд и стиля игры. Благодаря управлению конфигурациями, можно быстро адаптироваться к разным игровым
                    ситуациям, экспериментировать с новыми комбинациями и сохранять наиболее эффективные настройки для
                    будущего использования.</p>
                <button
                    onClick={() => setOpen(true)}
                    className={'px-5 max-w-fit h-10 mt-6 text-white text-[14px] font-medium text-center bg-alert rounded-[6px] hover:bg-[#CB002C] transition-all'}>
                    Создать конфиг из текущих настроек
                </button>
            </div>
            <div className='mt-6'>
                <div className='w-full border-b border-subtle dark:border-neutral'>
                    <div className='flex gap-1 justify-between h-[32px]'>
                        <div className='overflow-x-scroll md:overflow-x-hidden config'>
                            <span
                                className={`min-w-fit text-nowrap py-2.5 px-3 font-medium text-sm cursor-pointer transition-all ${selectedTab === 0 ? 'border-b border-alert dark:text-white text-primary' : 'text-secondary'}`}
                                onClick={() => setSelectedTab(0)}>Все конфигурации</span>
                            <span
                                className={`min-w-fit text-nowrap py-2.5 px-3 font-medium text-sm cursor-pointer transition-all ${selectedTab === 1 ? 'border-b border-alert dark:text-white text-primary' : 'text-secondary'}`}
                                onClick={() => setSelectedTab(1)}>Мои конфигурации</span>
                            <span
                                className={`min-w-fit text-nowrap py-2.5 px-3 font-medium text-sm cursor-pointer transition-all ${selectedTab === 2 ? 'border-b border-alert dark:text-white text-primary' : 'text-secondary'}`}
                                onClick={() => setSelectedTab(2)}>Установленные конфигурации</span>
                        </div>
                        <div className='flex items-center gap-3'>
                            <GridIcon onClick={() => setSelectedLayout(0)} className={`cursor-pointer rounded-md transition-all hover:bg-subtle dark:hover:bg-neutral ${selectedLayout === 0 ? 'fill-[#ff0032]' : 'fill-secondary'}`}/>
                            <TableIcon onClick={() => setSelectedLayout(1)} className={`cursor-pointer rounded-md transition-all hover:bg-subtle dark:hover:bg-neutral ${selectedLayout === 1 ? 'fill-[#ff0032]' : 'fill-secondary'}`}/>
                        </div>
                    </div>
                </div>
                {selectedLayout === 0 ? (
                    <div className='mt-3'>
                        {selectedTab === 0 && (
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                                {configs.map(config => {
                                    return (
                                        <div className='col-span-1 bg-white dark:bg-neutral rounded-md p-6'>
                                            <div className='flex items-center gap-1.5'>
                                                <Link to={`/dashboard/user/${config.author}`} className='flex items-center gap-1.5'>
                                                    <Avatar
                                                        round={true}
                                                        size={20}
                                                        src={`https://api.dicebear.com/9.x/initials/svg?seed=${config.author}`}/>
                                                    <span className='text-primary dark:text-white text-sm'>{config.author}</span>
                                                </Link>
                                            </div>
                                            <div className='mt-3'>
                                                <span className='text-primary dark:text-white font-medium'>Legit config</span>
                                                <div className='flex items-center gap-1.5 text-sm text-secondary'>
                                                    <span>{config.date}</span>
                                                    {config.installs > 0 && (
                                                        <div className='w-1 h-1 rounded-full bg-secondary'/>
                                                    )}
                                                    {config.installs > 0 && (
                                                        <span>{config.installs} установок</span>
                                                    )}
                                                </div>
                                            </div>
                                            {config.active ? (
                                                <button
                                                    className={'w-full mt-6 px-5 h-10 text-white text-[14px] font-medium text-center bg-alert rounded-[6px] hover:bg-[#CB002C] transition-all'}>
                                                    Активирован
                                                </button>
                                            ) : (
                                                <button
                                                    className={'w-full mt-6 px-5 h-[40px] text-primary text-sm text-center font-medium border border-subtle bg-white rounded-[6px] hover:border-alert hover:text-alert transition-all'}>
                                                    Активировать
                                                </button>
                                            )}
                                        </div>

                                    )
                                })}
                            </div>
                        )}
                        {selectedTab === 1 && (
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                                {configs.filter(config => config.author === 'sunshine').map(config => {
                                    return (
                                        <div className='col-span-1 bg-white dark:bg-neutral rounded-md p-6'>
                                            <div className='flex items-center gap-1.5'>
                                                <Link to={`/dashboard/user/${config.author}`} className='flex items-center gap-1.5'>
                                                    <Avatar
                                                        round={true}
                                                        size={20}
                                                        src={`https://api.dicebear.com/9.x/initials/svg?seed=${config.author}`}/>
                                                    <span className='text-primary dark:text-white text-sm'>{config.author}</span>
                                                </Link>
                                            </div>
                                            <div className='mt-3'>
                                                <span className='text-primary dark:text-white font-medium'>Legit config</span>
                                                <div className='flex items-center gap-1.5 text-sm text-secondary'>
                                                    <span>{config.date}</span>
                                                    {config.installs > 0 && (
                                                        <div className='w-1 h-1 rounded-full bg-secondary'/>
                                                    )}
                                                    {config.installs > 0 && (
                                                        <span>{config.installs} установок</span>
                                                    )}
                                                </div>
                                            </div>
                                            {config.active ? (
                                                <button
                                                    className={'w-full mt-6 px-5 h-10 text-white text-[14px] font-medium text-center bg-alert rounded-[6px] hover:bg-[#CB002C] transition-all'}>
                                                    Активирован
                                                </button>
                                            ) : (
                                                <button
                                                    className={'w-full mt-6 px-5 h-[40px] text-primary text-sm text-center font-medium border border-subtle bg-white rounded-[6px] hover:border-alert hover:text-alert transition-all'}>
                                                    Активировать
                                                </button>
                                            )}
                                        </div>

                                    )
                                })}
                            </div>
                        )}
                        {selectedTab === 2 && (
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
                                {configs.filter(config => config.active).map(config => {
                                    return (
                                        <div className='col-span-1 bg-white dark:bg-neutral rounded-md p-6'>
                                            <Link to={`/dashboard/user/${config.author}`} className='flex items-center gap-1.5'>
                                                <Avatar
                                                    round={true}
                                                    size={20}
                                                    src={`https://api.dicebear.com/9.x/initials/svg?seed=${config.author}`}/>
                                                <span className='text-primary dark:text-white text-sm'>{config.author}</span>
                                            </Link>
                                            <div className='mt-3'>
                                                <span className='text-primary dark:text-white font-medium'>Legit config</span>
                                                <div className='flex items-center gap-1.5 text-sm text-secondary'>
                                                    <span>{config.date}</span>
                                                    {config.installs > 0 && (
                                                        <div className='w-1 h-1 rounded-full bg-secondary'/>
                                                    )}
                                                    {config.installs > 0 && (
                                                        <span>{config.installs} установок</span>
                                                    )}
                                                </div>
                                            </div>
                                            {config.active ? (
                                                <button
                                                    className={'w-full mt-6 px-5 h-10 text-white text-[14px] font-medium text-center bg-alert rounded-[6px] hover:bg-[#CB002C] transition-all'}>
                                                    Активирован
                                                </button>
                                            ) : (
                                                <button
                                                    className={'w-full mt-6 px-5 h-[40px] text-primary text-sm text-center font-medium border border-subtle bg-white rounded-[6px] hover:border-alert hover:text-alert transition-all'}>
                                                    Активировать
                                                </button>
                                            )}
                                        </div>

                                    )
                                })}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className='mt-3 overflow-x-scroll config bg-white dark:bg-neutral rounded-md'>
                        <table>
                            <thead>
                            <tr className='text-secondary dark:text-white text-left'>
                                <th className='h-12 border-b text-sm font-medium min-w-[210px] pl-6'>Название конфига</th>
                                <th className='h-12 border-b text-sm font-medium min-w-[210px]'>Автор</th>
                                <th className='h-12 border-b text-sm font-medium min-w-[210px]'>Дата добавления</th>
                                <th className='h-12 border-b text-sm font-medium min-w-[210px]'>Кол-во установок</th>
                                <th className='h-12 border-b pr-6 max-w-[210px] w-full'></th>
                            </tr>
                            </thead>
                            <tbody>
                            {selectedTab === 0 && configs.map(config => {
                                return (
                                    <tr className='text-primary dark:text-white text-sm'>
                                        <td className='py-[22px] px-6'>
                                            {config.name}
                                        </td>
                                        <td className='py-[22px]'>
                                            <Link to={`/dashboard/user/${config.author}`} className='flex items-center gap-1.5'>
                                                <Avatar
                                                    round={true}
                                                    size={32}
                                                    src={`https://api.dicebear.com/9.x/initials/svg?seed=${config.author}`}/>
                                                <span className='text-primary dark:text-white text-sm'>{config.author}</span>
                                            </Link>
                                        </td>
                                        <td className='py-[22px]'>
                                            {config.date}
                                        </td>
                                        <td className='py-[22px]'>
                                            {config.installs}
                                        </td>
                                        <td className='flex items-center justify-end px-6  gap-4 py-[22px]'>
                                            {config.active ? (
                                                <button
                                                    className={'max-w-[112px] w-full px-3 py-1.5 text-white text-[14px] font-medium text-center bg-alert rounded-[6px] hover:bg-[#CB002C] transition-all'}>
                                                    Активирован
                                                </button>
                                            ) : (
                                                <button
                                                    className={'max-w-[112px] w-full py-1.5 text-primary text-sm text-center font-medium border border-subtle bg-white rounded-[6px] hover:border-alert hover:text-alert transition-all'}>
                                                    Активировать
                                                </button>
                                            )}
                                            <More className='fill-secondary'/>
                                        </td>
                                    </tr>
                                )
                            })}
                            {selectedTab === 1 && configs.filter(config => config.author === 'sunshine').map(config => {
                                return (
                                    <tr className='text-primary dark:text-white text-sm'>
                                        <td className='py-[22px] px-6'>
                                            {config.name}
                                        </td>
                                        <td className='py-[22px]'>
                                            <Link to={`/dashboard/user/${config.author}`}
                                                  className='flex items-center gap-1.5'>
                                                <Avatar
                                                    round={true}
                                                    size={32}
                                                    src={`https://api.dicebear.com/9.x/initials/svg?seed=${config.author}`}/>
                                                <span className='text-primary dark:text-white text-sm'>{config.author}</span>
                                            </Link>
                                        </td>
                                        <td className='py-[22px]'>
                                            {config.date}
                                        </td>
                                        <td className='py-[22px]'>
                                            {config.installs}
                                        </td>
                                        <td className='flex items-center justify-end px-6  gap-4 py-[22px]'>
                                            {config.active ? (
                                                <button
                                                    className={'max-w-[112px] w-full px-3 py-1.5 text-white text-[14px] font-medium text-center bg-alert rounded-[6px] hover:bg-[#CB002C] transition-all'}>
                                                    Активирован
                                                </button>
                                            ) : (
                                                <button
                                                    className={'max-w-[112px] w-full py-1.5 text-primary text-sm text-center font-medium border border-subtle bg-white rounded-[6px] hover:border-alert hover:text-alert transition-all'}>
                                                    Активировать
                                                </button>
                                            )}
                                            <More className='fill-secondary'/>
                                        </td>
                                    </tr>
                                )
                            })}
                            {selectedTab === 2 && configs.filter(config => config.active).map(config => {
                                return (
                                    <tr className='text-primary dark:text-white text-sm'>
                                        <td className='py-[22px] px-6'>
                                            {config.name}
                                        </td>
                                        <td className='py-[22px]'>
                                            <Link to={`/dashboard/user/${config.author}`}
                                                  className='flex items-center gap-1.5'>
                                                <Avatar
                                                    round={true}
                                                    size={32}
                                                    src={`https://api.dicebear.com/9.x/initials/svg?seed=${config.author}`}/>
                                                <span className='text-primary dark:text-white text-sm'>{config.author}</span>
                                            </Link>
                                        </td>
                                        <td className='py-[22px]'>
                                            {config.date}
                                        </td>
                                        <td className='py-[22px]'>
                                            {config.installs}
                                        </td>
                                        <td className='flex items-center justify-end px-6 gap-4 py-[22px]'>
                                            {config.active ? (
                                                <button
                                                    className={'max-w-[112px] w-full px-3 py-1.5 text-white text-[14px] font-medium text-center bg-alert rounded-[6px] hover:bg-[#CB002C] transition-all'}>
                                                    Активирован
                                                </button>
                                            ) : (
                                                <button
                                                    className={'max-w-[112px] w-full py-1.5 text-primary text-sm text-center font-medium border border-subtle bg-white rounded-[6px] hover:border-alert hover:text-alert transition-all'}>
                                                    Активировать
                                                </button>
                                            )}
                                            <More className='fill-secondary'/>
                                        </td>
                                    </tr>
                                )
                            })}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Config;