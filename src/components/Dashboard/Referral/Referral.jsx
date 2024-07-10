import React, {useContext, useEffect, useState} from 'react';

//IMG
import bg from '../../../assets/referral.png'
import PrimaryButton from "../../Button/PrimaryButton";
import SecondButton from "../../Button/SecondButton";
import More from "../../../assets/icons/More";
import Avatar from "react-avatar";
import Select from "../../Select/Select";
import {DataContext} from "../../../context/DataProvider";

const Referral = () => {
    const {userInfo} = useContext(DataContext);
    const [rangeValue, setRangeValue] = useState(userInfo.refprocent || 0);
    const [discount, setDiscount] = useState(12);
    const [balance, setBalance] = useState(18);
    const [selectedTab, setSelectedTab] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const percentages = ['0%', '25%', '-26%', '-27%', '-28%', '-29%', '-30%', '-31%', '-32%', '-33%', '-34%'];
    const friendsInvited = userInfo.refusers || 0;
    const [promocodes, setPromocodes] = useState([
        {
            name: 'SPRING24',
            activations: '2',
            status: 'Premium (x1)',
            count: '2'
        }
    ])
    const [invites, setInvites] = useState([{
        name: 'david291',
        date: '28 Апреля 2024',
        status: 'inactive',
        earn: '492 ₽',
    }, {
            name: 'eddie_lake',
            date: '28 Мая 2024',
            status: 'active',
            earn: '480 ₽',
        }
    ])

    const [items, setItems] = useState([
        {
            key: 'item1',
            title: 'Premium (250 ₽)'
        },
        {
            key: 'item2',
            title: 'Business (600 ₽)'
        }
    ])

    const handleChange = (event) => {
        const newValue = event.target.value;
        setRangeValue(newValue);
        console.log(newValue);
    };

    useEffect(() => {
        setDiscount(parseInt(0 + rangeValue));
        setBalance(userInfo.refprocent ? parseInt(userInfo.refprocent - rangeValue) : 0 - rangeValue);
    }, [rangeValue]);


    return (
        <div className={'p-6'}>
            {isOpen && (
                <div className='fixed z-[100] w-screen h-screen bg-primary/80 left-0 top-0 flex justify-center items-center'>
                    <div className='bg-white dark:bg-neutral max-w-[460px] w-full py-6 flex flex-col justify-center gap-6 rounded-md'>
                        <h4 className='px-6 text-lg font-semibold text-primary dark:text-white'>Создать промокод</h4>
                        <div className={'px-6 dark:text-white'}>
                            <label>Введите промокод</label>
                            <div className='h-10 px-2 border border-subtle rounded-md w-full mt-3'>
                                <input placeholder='Введите промокод'
                                       className='w-full h-10 outline-none appearance-none bg-transparent dark:text-white text-sm text-primary'/>
                            </div>
                        </div>
                        <div className='flex dark:text-white flex-col gap-3 px-6'>
                            <label>Тип подписки</label>
                            <Select items={items} defaultSelectedItem={'Выберите тип подписки'}/>
                        </div>
                        <div className='px-6 dark:text-white'>
                            <label>Количество активаций</label>
                            <div className='h-10 px-2 border border-subtle rounded-md w-full mt-3'>
                                <input placeholder='Введите количество активаций'
                                       className='w-full h-10 outline-none appearance-none dark:text-white  bg-transparent text-sm text-primary'/>
                            </div>
                        </div>
                        <div className='h-[1px] w-full bg-subtle'/>
                        <div className={'px-6'}>
                            <p className='text-sm text-secundary dark:text-white'>Стоимость создания промокода</p>
                            <p className='text-xl font-semibold text-primary mt-3 dark:text-white'>0 ₽</p>
                        </div>
                        <div className={'px-6 flex gap-3'}>
                            <div className='w-[170px]'><PrimaryButton text={'Создать промокод'}/></div>
                            <div className={'w-[90px]'}><SecondButton text={'Отмена'} onClick={() => {setOpen(false)}}/></div>
                        </div>
                    </div>
                </div>
            )}
            <div className='mt-14 md:mt-0 rounded-md bg-white dark:bg-neutral'>
                <img src={bg} alt='BG' className={'rounded-t-md w-full hidden md:block'}/>
                <div className='pt-[84px] px-2 relative'>
                    <span
                        className='absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 text-3xl text-white font-semibold w-[96px] h-[96px] bg-alert rounded-full flex items-center justify-center'>{userInfo.refusers || 0}</span>
                    <h4 className='text-2xl font-semibold text-primary dark:text-white text-center'>Приглашайте друзей и получайте бонусы!</h4>
                    <p className='text-secundary dark:text-surface text-base text-center pt-3'>Пригласите еще 1 друга, чтобы получить скидку 25%!</p>
                    <div className={'flex flex-col md:flex-row justify-center gap-3 py-9'}>
                        <div className='md:max-w-[450px] h-10 px-2 border border-subtle rounded-md w-full'>
                            <input defaultValue={'deseption.com/?ref=123123'} className='w-full h-10 outline-none appearance-none bg-transparent text-sm text-primary dark:text-white'/>
                        </div>
                        <div className='md:max-w-[130px] w-full'>
                            <PrimaryButton text={'Скопировать'}/>
                        </div>
                    </div>
                </div>
                <div className='px-6 md:h-32 md:py-0 md:gap-0 py-4 gap-4 grid grid-cols-1 md:grid-cols-4 border-t border-subtle dark:border-secondary'>
                    <div className='flex flex-col justify-center items-center gap-1.5'>
                        <p className={'text-primary font-semibold text-xl dark:text-white'}>{userInfo.refprocent ? `${userInfo.refprocent} %` : '0 %'}</p>
                        <p className={'text-secondary text-sm'}>Ваша скидка</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-1.5'>
                        <p className={'text-primary font-semibold text-xl dark:text-white'}>{userInfo.refusers || 0}</p>
                        <p className={'text-secondary text-sm'}>Друзей приглашено</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-1.5'>
                        <p className={'text-primary font-semibold text-xl dark:text-white'}>{userInfo.reflvl || 0}</p>
                        <p className={'text-secondary text-sm'}>Ваш уровень</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-1.5'>
                        <p className={'text-primary font-semibold text-xl dark:text-white'}>{userInfo.reftransition || 0}</p>
                        <p className={'text-secondary text-sm'}>Переходов по Вашей ссылке</p>
                    </div>
                </div>
            </div>
            <div className={'mt-6'}>
                <div className='w-full border-b border-subtle dark:border-secondary'>
                    <div className='flex'>
                        <span
                            className={`py-2.5 px-3 font-medium text-sm cursor-pointer transition-all ${selectedTab === 0 ? 'border-b border-alert text-primary dark:text-white' : 'text-secondary'}`}
                            onClick={() => setSelectedTab(0)}>Партнерский кабинет</span>
                        <span
                            className={`py-2.5 px-3 font-medium text-sm cursor-pointer transition-all ${selectedTab === 1 ? 'border-b border-alert text-primary dark:text-white' : 'text-secondary'}`}
                            onClick={() => setSelectedTab(1)}>Приглашения</span>
                    </div>
                </div>
                {selectedTab === 0 && (
                    <div className='mt-3'>
                        <div className={'rounded-md py-6 bg-white dark:bg-neutral'}>
                            <div className='px-6 text-center md:text-left'>
                                <h4 className='text-xl font-semibold text-primary dark:text-white'>{userInfo.refbalance ? `${userInfo.refbalance} ₽` : '0 ₽'}</h4>
                                <p className='text-base text-secondary pt-1.5'>Баланс вашего партнерского кабинета</p>
                                <div className='flex flex-col md:flex-row justify-center mx-auto md:mx-0 max-w-[350px] gap-3 my-6'>
                                    <PrimaryButton text={'Вывести средства'}/>
                                    <SecondButton text={'Создать промокод'} onClick={() => {setOpen(true)}}/>
                                </div>
                            </div>
                            <div className='w-full h-[1px] bg-subtle dark:bg-secondary'></div>
                            <div className='px-6 pt-6'>
                                <h4 className='text-base font-semibold text-primary dark:text-white'>Активные промокоды</h4>
                                <div className='overflow-x-scroll xl:overflow-x-auto scroll'>
                                    <table className='mt-3'>
                                        <thead>
                                        <tr>
                                            <th className={'min-w-[250px] text-left text-sm font-medium text-secondary dark:text-white py-3.5 border-b border-subtle dark:border-secondary'}>Промокод</th>
                                            <th className={'min-w-[250px] text-left text-sm font-medium text-secondary dark:text-white py-3.5 border-b border-subtle dark:border-secondary'}>Количество
                                                активаций
                                            </th>
                                            <th className={'min-w-[250px] text-left text-sm font-medium text-secondary dark:text-white py-3.5 border-b border-subtle dark:border-secondary'}>Содержание</th>
                                            <th className={'min-w-[250px] text-left text-sm font-medium text-secondary dark:text-white py-3.5 border-b border-subtle dark:border-secondary'}>Осталось
                                                активаций
                                            </th>
                                            <th className='py-3.5 border-b border-subtle dark:border-secondary w-full'></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {promocodes.map(promocode => {
                                            return (
                                                <tr className='text-sm font-medium text-primary dark:text-subtle'>
                                                    <td className='py-3.5'>
                                                        {promocode.name}
                                                    </td>
                                                    <td className='py-3.5'>
                                                        {promocode.activations}
                                                    </td>
                                                    <td className='py-3.5'>
                                                        {promocode.status}
                                                    </td>
                                                    <td className='py-3.5'>
                                                        {promocode.count}
                                                    </td>
                                                    <td className='py-3.5 flex justify-end items-center'>
                                                        <div className='w-6 h-6 flex items-center cursor-pointer'>
                                                            <More className={'fill-secondary mx-auto'}/>
                                                        </div>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className={'rounded-md py-6 bg-white dark:bg-neutral mt-3 px-6'}>
                            <div>
                                <h4 className='text-base font-semibold text-primary dark:text-white'>Повышайте свой уровень и
                                    скидку</h4>
                                <p className='text-base text-secondary pt-1.5'>За каждого приглашенного друга вы
                                    повышаете свой уровень и получаете 1% скидки</p>
                            </div>
                            <div className='overflow-x-scroll xl:overflow-x-visible scroll py-4'>
                                <div className='mt-6 w-full h-[96px] flex items-center min-w-[900px]'>
                                    <div className='flex flex-col justify-between h-full'>
                                        <h4 className='text-xs text-primary font-semibold dark:text-white'>ПРОЦЕНТ</h4>
                                        <div className='w-60 bg-alert h-1'></div>
                                        <p className='text-xs text-secondary font-semibold'>ПРИГЛАШЕННЫХ ДРУЗЕЙ</p>
                                    </div>
                                    <div className='flex-1 flex'>
                                        {percentages.map((percentage, index) => (
                                            <div key={index}
                                                 className='relative flex-1 flex items-center justify-center'>
                                                <div
                                                    className={`h-1 w-full relative ${index <= friendsInvited ? 'bg-alert' : 'bg-[#f1f1f2] dark:bg-surface'}`}>
                                                    <div
                                                        className={`absolute z-50 h-4 w-4 outline outline-white dark:outline-neutral rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${index <= friendsInvited ? 'bg-alert' : 'bg-subtle dark:bg-surface'}`}></div>
                                                    <div
                                                        className='absolute h-[60px] w-[1px] bg-subtle dark:bg-surface outline outline-white dark:outline-neutral rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
                                                    <p className='text-xs font-semibold text-primary dark:text-white absolute -top-[40px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>{percentage}</p>
                                                    <p className='text-xs font-semibold text-secondary absolute top-[42px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>{index}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={'rounded-md py-6 bg-white dark:bg-neutral mt-3 px-6'}>
                            <div>
                                <h4 className='text-base font-semibold text-primary dark:text-white'>Распределение процента между
                                    скидкой и балансом</h4>
                                <p className='text-base text-secondary pt-1.5'>Вы можете распределять полученный
                                    процент, потратив его на получение скидки или выбрав доходность с промокода</p>
                            </div>
                            <div className='flex flex-col gap-6 mt-6'>
                                <p className={'text-sm font-medium text-primary dark:text-white'}>У вас: {userInfo.refprocent ? `${userInfo.refprocent} %` : '0 %'}</p>
                                <input type={"range"} max={userInfo.refprocent || 0} min={0}
                                       className='w-full appearance-none bg-subtle dark:bg-surface h-1.5 rounded-md'
                                       onChange={handleChange}/>
                                <div className={'text-primary dark:text-white flex text-sm font-medium flex-col md:flex-row gap-4 justify-between items-center'}>
                                    <p className=''>Скидка на подписку: <span
                                        className='text-alert'>{discount}%</span></p>
                                    <p>Баланс аккаунта: <span className='text-alert'>{balance}%</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {selectedTab === 1 && (
                    <div className='mt-3 bg-white dark:bg-neutral rounded-md overflow-x-scroll scroll py-4'>
                        <table>
                            <thead>
                            <tr>
                                <th className={'pl-6 min-w-[250px] text-left text-sm font-medium text-secondary py-3.5 border-b border-subtle dark:border-secondary dark:text-white'}>Друг</th>
                                <th className={'min-w-[250px] text-left text-sm font-medium text-secondary py-3.5 border-b border-subtle dark:border-secondary dark:text-white'}>Дата
                                    приглашения
                                </th>
                                <th className={'min-w-[250px] text-left text-sm font-medium text-secondary py-3.5 border-b border-subtle dark:border-secondary dark:text-white'}>Статус</th>
                                <th className={'min-w-[250px] text-left text-sm font-medium text-secondary py-3.5 border-b border-subtle dark:border-secondary dark:text-white'}>Доход</th>
                                <th className='pr-6 py-3.5 border-b border-subtle dark:border-secondary dark:text-white w-full'></th>
                            </tr>
                            </thead>
                            <tbody>
                            {invites.map(invite => {
                                return (
                                    <tr className='text-sm font-medium text-primary dark:text-white dark:border-secondary border-t border-subtle'>
                                        <td className='pl-6 py-3.5'>
                                            <div className='flex items-center gap-2'>
                                                <Avatar size={32} round={16} src={`https://api.dicebear.com/9.x/initials/svg?seed=${invite.name}`}/>
                                                <p>{invite.name}</p>
                                            </div>
                                        </td>
                                        <td className='py-3.5'>
                                            {invite.date}
                                        </td>
                                        <td className='py-3.5'>
                                            <div className={`py-0.5 px-[10px] max-w-28 text-center rounded-md ${invite.status === 'active' ? 'text-alert bg-[#FFE6EB]' : 'text-[#BF6A02] bg-[#FBE5CA]'}`}>
                                                {invite.status === 'active' ? 'Активен' : 'Не активен'}
                                            </div>
                                        </td>
                                        <td className='py-3.5'>
                                            {invite.earn}
                                        </td>
                                        <td className='pr-6 py-3.5 flex justify-end items-center'>
                                            <div className='w-6 h-6 flex items-center cursor-pointer'>
                                                <More className={'fill-secondary mx-auto'}/>
                                            </div>
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

export default Referral;