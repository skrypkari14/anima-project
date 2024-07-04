import React, {useState} from 'react';

const Hud = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    return (
        <div className='p-6'>
            <h1 className={'text-2xl font-semibold text-[#222225]'}>HUD</h1>
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
            </div>
            <div className={'pt-3 flex flex-col gap-3'}>
                <div className={'bg-white rounded-md  flex justify-between items-center p-6'}>
                    <h4 className={'text-base font-medium text-[#222225]'}>Keystrokes</h4>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider"></span>
                        <span className="knob"></span>
                    </label>
                </div>
                <div className={'bg-white rounded-md  flex justify-between items-center p-6'}>
                    <h4 className={'text-base font-medium text-[#222225]'}>FPS Counter</h4>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider"></span>
                        <span className="knob"></span>
                    </label>
                </div>
            </div>

        </div>
    );
};

export default Hud;