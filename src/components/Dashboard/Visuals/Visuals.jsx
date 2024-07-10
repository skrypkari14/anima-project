import React, { useState } from 'react';

const Visuals = () => {
    const items = [
        {
            item: '2D Box',
            desc: 'Отображение 2D-Бокса вокруг игрока, который видно через стену',
            obs: true
        },
        {
            item: 'Chams',
            desc: 'Обводка/Заливка модели игрока или мобов, которую видно через объекты и препятствия',
            obs: true
        },
        {
            item: 'NameTags',
            desc: 'Показывает никнеймы игроков на большом расстоянии, даже если они крадутся',
            obs: true
        },
        {
            item: 'Tracers',
            desc: 'Производится отрисовка линий от вашего прицела до мобов/игроков/животных.',
            obs: true
        },
        {
            item: 'Particles',
            desc: 'Добавляет в игру больше частиц, при ударе вами другой сущности.',
            obs: false
        },
        {
            item: 'Watermark',
            desc: 'Логотип нашего проекта на вашем экране внутри игры.',
            obs: false
        },
        {
            item: 'ItemESP',
            desc: 'Все лежащие на земле предметы видно через стены.',
            obs: false
        },
        {
            item: 'StorageESP',
            desc: 'Даёт преимущество видеть сквозь стены: сундук, эндер-сундук, стол зачарования.',
            obs: false
        },
    ]
    const [selectedTab, setSelectedTab] = useState(0);
    return (
        <div className="p-6 dark:bg-primary">
            <h1 className="text-2xl font-semibold text-primary dark:text-white">Visuals</h1>
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
                {items.map((item, index) => (
                    <div key={index} className='bg-white dark:bg-neutral rounded-md flex flex-col gap-4'>
                        <div
                            className={`flex justify-between items-center p-6 dark:border-[#444442] ${item.obs ? 'border-b border-subtle' : ''}`}>
                            <div className="flex flex-col w-3/5">
                                <h4 className="text-base font-medium text-primary dark:text-white">{item.item}</h4>
                                <p className="text-sm text-secondary">
                                    {item.desc}
                                </p>
                            </div>
                            <label className='switch'>
                                <input type='checkbox'/>
                                <span className='slider'></span>
                                <span className='knob'></span>
                            </label>
                        </div>
                        {item.obs && (
                            <div className='flex gap-2 items-center p-6'>
                                <label className='custom-checkbox'>
                                    <input name='dummy' type='checkbox'/>
                                    <span className='checkmark'></span>
                                </label>
                                <p className='text-sm dark:text-white '>OBS Bypass</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Visuals;
