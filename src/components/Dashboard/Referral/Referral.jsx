import React, {useEffect, useState} from 'react';

//IMG
import bg from '../../../assets/referral.png'
import PrimaryButton from "../../Button/PrimaryButton";
import SecondButton from "../../Button/SecondButton";
import More from "../../../assets/icons/More";
import Avatar from "react-avatar";
import Select from "../../Select/Select";

const Referral = () => {
    const [rangeValue, setRangeValue] = useState(15);
    const [discount, setDiscount] = useState(12);
    const [balance, setBalance] = useState(18);
    const [selectedTab, setSelectedTab] = useState(0);
    const [isOpen, setOpen] = useState(false);
    const percentages = ['0%', '25%', '-26%', '-27%', '-28%', '-29%', '-30%', '-31%', '-32%', '-33%', '-34%'];
    const friendsInvited = 6;
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
        setDiscount(parseInt(0 + rangeValue))
        setBalance(parseInt(30-rangeValue));
    }, [rangeValue]);

    return (
        <div className={'p-6'}>
            {isOpen && (
                <div className='fixed z-[100] w-screen h-screen bg-black/20 left-0 top-0 flex justify-center items-center'>
                    <div className='bg-white max-w-[460px] w-full py-6 flex flex-col justify-center gap-6 rounded-md'>
                        <h4 className='px-6 text-lg font-semibold text-[#222225]'>Создать промокод</h4>
                        <div className={'px-6'}>
                            <label>Введите промокод</label>
                            <div className='h-10 px-2 border border-[#e2e2e5] rounded-md w-full mt-3'>
                                <input placeholder='Введите промокод'
                                       className='w-full h-10 outline-0 bg-transparent text-sm text-[#222225]'/>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 px-6'>
                            <label>Тип подписки</label>
                            <Select items={items}/>
                        </div>
                        <div className='px-6'>
                            <label>Количество активаций</label>
                            <div className='h-10 px-2 border border-[#e2e2e5] rounded-md w-full mt-3'>
                                <input placeholder='Введите количество активаций'
                                       className='w-full h-10 outline-0 bg-transparent text-sm text-[#222225]'/>
                            </div>
                        </div>
                        <div className='h-[1px] w-full bg-[#e2e2e5]'/>
                        <div className={'px-6'}>
                            <p className='text-sm text-[#66666e]'>Стоимость создания промокода</p>
                            <p className='text-xl font-semibold text-[#222225] mt-3'>0 ₽</p>
                        </div>
                        <div className={'px-6 flex gap-3'}>
                            <div className='w-[170px]'><PrimaryButton text={'Создать промокод'}/></div>
                            <div className={'w-[90px]'}><SecondButton text={'Отмена'} onClick={() => {setOpen(false)}}/></div>
                        </div>
                    </div>
                </div>
            )}
            <div className='rounded-md bg-white'>
                <img src={bg} alt='BG' className={'rounded-t-md w-full'}/>
                <div className='pt-[84px] relative'>
                    <span
                        className='absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 text-3xl text-white font-semibold w-[96px] h-[96px] bg-[#ff0037] rounded-full flex items-center justify-center'>6</span>
                    <h4 className='text-2xl font-semibold text-[#222225] text-center'>Приглашайте друзей и получайте бонусы!</h4>
                    <p className='text-[#66666e] text-base text-center pt-3'>Пригласите еще 1 друга, чтобы получить скидку 25%!</p>
                    <div className={'flex justify-center gap-3 py-9'}>
                        <div className='max-w-[450px] h-10 px-2 border border-[#e2e2e5] rounded-md w-full'>
                            <input defaultValue={'deseption.com/?ref=123123'} className='w-full h-10 outline-0 bg-transparent text-sm text-[#222225]'/>
                        </div>
                        <div className='max-w-[130px] w-full'>
                            <PrimaryButton text={'Скопировать'}/>
                        </div>
                    </div>
                </div>
                <div className='px-6 h-32 grid grid-cols-4 border-t border-[#e2e2e5]'>
                    <div className='flex flex-col justify-center items-center gap-1.5'>
                        <p className={'text-[#222225] font-semibold text-xl'}>30%</p>
                        <p className={'text-[#66666e] text-sm'}>Ваша скидка</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-1.5'>
                        <p className={'text-[#222225] font-semibold text-xl'}>6</p>
                        <p className={'text-[#66666e] text-sm'}>Друзей приглашено</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-1.5'>
                        <p className={'text-[#222225] font-semibold text-xl'}>6</p>
                        <p className={'text-[#66666e] text-sm'}>Ваш уровень</p>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-1.5'>
                        <p className={'text-[#222225] font-semibold text-xl'}>34</p>
                        <p className={'text-[#66666e] text-sm'}>Переходов по Вашей ссылке</p>
                    </div>
                </div>
            </div>
            <div className={'mt-6'}>
                <div className='w-full border-b'>
                    <div className='flex'>
                        <span
                            className={`py-2.5 px-3 font-medium text-sm cursor-pointer transition-all ${selectedTab === 0 ? 'border-b border-[#ff0037] text-[#222225]' : 'text-[#66666e]'}`}
                            onClick={() => setSelectedTab(0)}>Все функции</span>
                        <span
                            className={`py-2.5 px-3 font-medium text-sm cursor-pointer transition-all ${selectedTab === 1 ? 'border-b border-[#ff0037] text-[#222225]' : 'text-[#66666e]'}`}
                            onClick={() => setSelectedTab(1)}>Только активные</span>
                    </div>
                </div>
                {selectedTab === 0 && (
                    <div className='mt-3'>
                        <div className={'rounded-md py-6 bg-white'}>
                            <div className='px-6'>
                                <h4 className='text-xl font-semibold text-[#222225]'>240 ₽</h4>
                                <p className='text-base text-[#66666e] pt-1.5'>Баланс вашего партнерского кабинета</p>
                                <div className='flex justify-items-center max-w-[350px] gap-3 my-6'>
                                    <PrimaryButton text={'Вывести средства'}/>
                                    <SecondButton text={'Создать промокод'} onClick={() => {setOpen(true)}}/>
                                </div>
                            </div>
                            <div className='w-full h-[1px] bg-[#e2e2e5]'></div>
                            <div className='px-6 pt-6'>
                                <h4 className='text-base font-semibold text-[#222225]'>Активные промокоды</h4>
                                <table className='mt-3'>
                                    <thead>
                                    <tr>
                                        <th className={'min-w-[250px] text-left text-sm font-medium text-[#66666e] py-3.5 border-b border-[#e2e2e5]'}>Промокод</th>
                                        <th className={'min-w-[250px] text-left text-sm font-medium text-[#66666e] py-3.5 border-b border-[#e2e2e5]'}>Количество
                                            активаций
                                        </th>
                                        <th className={'min-w-[250px] text-left text-sm font-medium text-[#66666e] py-3.5 border-b border-[#e2e2e5]'}>Содержание</th>
                                        <th className={'min-w-[250px] text-left text-sm font-medium text-[#66666e] py-3.5 border-b border-[#e2e2e5]'}>Осталось
                                            активаций
                                        </th>
                                        <th className='py-3.5 border-b border-[#e2e2e5] w-full'></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {promocodes.map(promocode => {
                                        return (
                                            <tr className='text-sm font-medium text-[#222225]'>
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
                                                        <More className={'fill-[#66666e] mx-auto'}/>
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className={'rounded-md py-6 bg-white mt-3 px-6'}>
                            <div>
                                <h4 className='text-base font-semibold text-[#222225]'>Повышайте свой уровень и скидку</h4>
                                <p className='text-base text-[#66666e] pt-1.5'>За каждого приглашенного друга вы повышаете свой уровень и получаете 1% скидки</p>
                            </div>
                            <div className='mt-6 w-full h-[96px] flex items-center'>
                                <div className='flex flex-col justify-between h-full'>
                                    <h4 className='text-xs text-[#222225] font-semibold'>ПРОЦЕНТ</h4>
                                    <div className='w-60 bg-[#ff0037] h-1'></div>
                                    <p className='text-xs text-[#66666e] font-semibold'>ПРИГЛАШЕННЫХ ДРУЗЕЙ</p>
                                </div>
                                <div className='flex-1 flex'>
                                    {percentages.map((percentage, index) => (
                                        <div key={index} className='relative flex-1 flex items-center justify-center'>
                                            <div
                                                className={`h-1 w-full relative ${index <= friendsInvited ? 'bg-[#ff0037]' : 'bg-[#f1f1f2]'}`}>
                                                <div
                                                    className={`absolute z-50 h-4 w-4 outline outline-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${index <= friendsInvited ? 'bg-[#ff0037]' : 'bg-[#e2e2e5]'}`}></div>
                                                <div
                                                    className='absolute h-[60px] w-[1px] bg-[#e2e2e5] outline outline-white rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
                                                <p className='text-xs font-semibold text-[#222225] absolute -top-[40px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>{percentage}</p>
                                                <p className='text-xs font-semibold text-[#66666e] absolute top-[42px] left-1/2 transform -translate-x-1/2 -translate-y-1/2'>{index}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className={'rounded-md py-6 bg-white mt-3 px-6'}>
                            <div>
                                <h4 className='text-base font-semibold text-[#222225]'>Распределение процента между скидкой и балансом</h4>
                                <p className='text-base text-[#66666e] pt-1.5'>Вы можете распределять полученный процент, потратив его на получение скидки или выбрав доходность с промокода</p>
                            </div>
                            <div className='flex flex-col gap-6 mt-6'>
                                <p className={'text-sm font-medium text-[#222225]'}>У вас: 30%</p>
                                <input type={"range"} max={30} min={0} defaultValue={12}
                                       className='w-full appearance-none bg-[#e2e2e5] h-1.5 rounded-md'
                                       onChange={handleChange}/>
                                <div className={'flex justify-between items-center'}>
                                    <p className='text-sm font-medium text-[#222225]'>Скидка на подписку: <span className='text-[#ff0037]'>{discount}%</span></p>
                                    <p>Баланс аккаунта: <span className='text-[#ff0037]'>{balance}%</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {selectedTab === 1 && (
                    <div className='mt-3 bg-white rounded-md'>
                        <table>
                            <thead>
                            <tr>
                                <th className={'pl-6 min-w-[250px] text-left text-sm font-medium text-[#66666e] py-3.5 border-b border-[#e2e2e5]'}>Друг</th>
                                <th className={'min-w-[250px] text-left text-sm font-medium text-[#66666e] py-3.5 border-b border-[#e2e2e5]'}>Дата приглашения</th>
                                <th className={'min-w-[250px] text-left text-sm font-medium text-[#66666e] py-3.5 border-b border-[#e2e2e5]'}>Статус</th>
                                <th className={'min-w-[250px] text-left text-sm font-medium text-[#66666e] py-3.5 border-b border-[#e2e2e5]'}>Доход</th>
                                <th className='pr-6 py-3.5 border-b border-[#e2e2e5] w-full'></th>
                            </tr>
                            </thead>
                            <tbody>
                            {invites.map(invite => {
                                return (
                                    <tr className='text-sm font-medium text-[#222225] border-t'>
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
                                            <div className={`py-0.5 px-[10px] max-w-28 text-center rounded-md ${invite.status === 'active' ? 'text-[#ff0037] bg-[#FFE6EB]' : 'text-[#BF6A02] bg-[#FBE5CA]'}`}>
                                                {invite.status === 'active' ? 'Активен' : 'Не активен'}
                                            </div>
                                        </td>
                                        <td className='py-3.5'>
                                            {invite.earn}
                                        </td>
                                        <td className='pr-6 py-3.5 flex justify-end items-center'>
                                            <div className='w-6 h-6 flex items-center cursor-pointer'>
                                                <More className={'fill-[#66666e] mx-auto'}/>
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