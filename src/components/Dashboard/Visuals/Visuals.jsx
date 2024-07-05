import React, { useState } from 'react';

const Visuals = () => {
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
                {['2D Box', 'Chams', 'NameTags', 'Tracers', 'Watermark'].map((item, index) => (
                    <div key={index} className='bg-white dark:bg-neutral rounded-md flex flex-col gap-4'>
                        <div className='flex justify-between items-center p-6 border-b border-subtle dark:border-[#444442]'>
                            <h4 className='text-base font-medium text-primary dark:text-white '>{item}</h4>
                            <label className='switch'>
                                <input type='checkbox'/>
                                <span className='slider'></span>
                                <span className='knob'></span>
                            </label>
                        </div>
                        <div className='flex gap-2 items-center p-6'>
                            <label className='custom-checkbox'>
                                <input name='dummy' type='checkbox'/>
                                <span className='checkmark'></span>
                            </label>
                            <p className='text-sm dark:text-white '>OBS Bypass</p>
                        </div>
                    </div>
                ))}
                {['Particles', 'Auto clicker', 'Backtrack', 'ItemESP', 'StorageESP'].map((item, index) => (
                    <div key={index} className='bg-white dark:bg-neutral  rounded-md flex justify-between items-center p-6'>
                        <h4 className='text-base font-medium text-primary dark:text-white'>{item}</h4>
                        <label className='switch'>
                            <input type='checkbox'/>
                            <span className='slider'></span>
                            <span className='knob'></span>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Visuals;
