import React, { useState } from 'react';

const Hud = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const toggleTab = (tabIndex) => {
        setSelectedTab(tabIndex);
    };

    return (
        <div className='p-6'>
            <h1 className="text-2xl font-semibold text-primary dark:text-white">HUD</h1>
            <div className='mt-6'>
                <div className="w-full border-b border-subtle dark:border-[#444449]">
                    <div className="flex">
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
                <div className='bg-white dark:bg-neutral rounded-md flex justify-between items-center p-6'>
                    <div className="flex flex-col w-3/5">
                        <h4 className="text-base font-medium text-primary dark:text-white">Keystrokes</h4>
                        <p className="text-sm text-secondary">
                            Обводка ваших клавиш на экране в режиме худа
                        </p>
                    </div>
                    <label className='switch'>
                        <input type='checkbox'/>
                        <span className='slider'></span>
                        <span className='knob'></span>
                    </label>
                </div>
                <div className='bg-white dark:bg-neutral rounded-md flex justify-between items-center p-6'>
                    <div className="flex flex-col w-3/5">
                        <h4 className="text-base font-medium text-primary dark:text-white">FPS Counter</h4>
                        <p className="text-sm text-secondary">
                            Красивый вывод вашего ФПС в стилистике проекта
                        </p>
                    </div>
                    <label className='switch'>
                        <input type='checkbox'/>
                        <span className='slider'></span>
                        <span className='knob'></span>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Hud;
