import React, { useState } from 'react';

const Utility = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const utilities = [
        {
            item: 'Sprint',
            desc: 'Автоматическое двойное ускорение вашего персонажа'
        },
        {
            item: 'FreeCam',
            desc: 'Свободная камера, позволяет визуально летать и проходить через стены'
        },
        {
            item: 'MidClick Pearl',
            desc: 'На колесико мыши автоматически кидается эндер-перл'
        },
        {
            item: 'Optimizer',
            desc: 'Описание для Optimizer не указано'
        },
        {
            item: 'NoHits',
            desc: 'Визуально убирает функцию HitBox (Ставит хитбоксы игроков на 0.3, но только визуально)'
        }
    ];

    return (
        <div className="p-6 dark:bg-primary h-full">
            <h1 className="text-2xl font-semibold text-primary dark:text-white">Utility</h1>
            <div className='mt-6'>
                <div className='w-full border-b border-subtle dark:border-[#444449]'>
                    <div className='flex'>
                        <span
                            className={`py-2.5 px-3 font-medium text-sm cursor-pointer transition-all ${
                                selectedTab === 0 ? 'border-b border-alert text-primary dark:text-white' : 'text-secondary dark:text-surface'
                            }`}
                            onClick={() => setSelectedTab(0)}
                        >
                            Все функции
                        </span>
                        <span
                            className={`py-2.5 px-3 font-medium text-sm cursor-pointer transition-all ${
                                selectedTab === 1 ? 'border-b border-alert trext-primary dark:text-white' : 'text-secondary dark:text-surface'
                            }`}
                            onClick={() => setSelectedTab(1)}
                        >
                            Только активные
                        </span>
                    </div>
                </div>
            </div>
            <div className='pt-3 flex flex-col gap-3'>
                {utilities.map((utility, index) => (
                    <div key={index}
                         className='bg-white dark:bg-neutral rounded-md flex justify-between items-center p-6'>
                        <div className="flex flex-col w-3/5">
                            <h4 className="text-base font-medium text-primary dark:text-white">{utility.item}</h4>
                            <p className="text-sm text-secondary">
                                {utility.desc}
                            </p>
                        </div>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider"></span>
                            <span className="knob"></span>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Utility;
