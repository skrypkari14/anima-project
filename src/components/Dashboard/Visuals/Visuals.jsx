import React, {useState} from 'react';

const Visuals = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    return (
        <div className='p-6'>
            <h1 className={'text-2xl font-semibold text-[#222225]'}>Visuals</h1>
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
                <div className={'bg-white rounded-md  flex flex-col gap-4'}>
                    <div className='flex justify-between items-center p-6 border-b'>
                        <h4 className={'text-base font-medium text-[#222225]'}>2D Box</h4>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider"></span>
                            <span className="knob"></span>
                        </label>
                    </div>
                    <div className='flex gap-2 items-center p-6'>
                        <label className="custom-checkbox">
                            <input name="dummy" type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <p className='text-sm'>OBS Bypass</p>
                    </div>
                </div>
                <div className={'bg-white rounded-md  flex flex-col gap-4'}>
                    <div className='flex justify-between items-center p-6 border-b'>
                        <h4 className={'text-base font-medium text-[#222225]'}>Chams</h4>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider"></span>
                            <span className="knob"></span>
                        </label>
                    </div>
                    <div className='flex gap-2 items-center p-6'>
                        <label className="custom-checkbox">
                            <input name="dummy" type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <p className='text-sm'>OBS Bypass</p>
                    </div>
                </div>
                <div className={'bg-white rounded-md  flex flex-col gap-4'}>
                    <div className='flex justify-between items-center p-6 border-b'>
                        <h4 className={'text-base font-medium text-[#222225]'}>NameTags</h4>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider"></span>
                            <span className="knob"></span>
                        </label>
                    </div>
                    <div className='flex gap-2 items-center p-6'>
                        <label className="custom-checkbox">
                            <input name="dummy" type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <p className='text-sm'>OBS Bypass</p>
                    </div>
                </div>
                <div className={'bg-white rounded-md  flex flex-col gap-4'}>
                    <div className='flex justify-between items-center p-6 border-b'>
                        <h4 className={'text-base font-medium text-[#222225]'}>Tracers</h4>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider"></span>
                            <span className="knob"></span>
                        </label>
                    </div>
                    <div className='flex gap-2 items-center p-6'>
                        <label className="custom-checkbox">
                            <input name="dummy" type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <p className='text-sm'>OBS Bypass</p>
                    </div>
                </div>
                <div className={'bg-white rounded-md  flex flex-col gap-4'}>
                    <div className='flex justify-between items-center p-6 border-b'>
                        <h4 className={'text-base font-medium text-[#222225]'}>Watermark</h4>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider"></span>
                            <span className="knob"></span>
                        </label>
                    </div>
                    <div className='flex gap-2 items-center p-6'>
                        <label className="custom-checkbox">
                            <input name="dummy" type="checkbox"/>
                            <span className="checkmark"></span>
                        </label>
                        <p className='text-sm'>OBS Bypass</p>
                    </div>
                </div>
                <div className={'bg-white rounded-md  flex justify-between items-center p-6'}>
                    <h4 className={'text-base font-medium text-[#222225]'}>Particles</h4>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider"></span>
                        <span className="knob"></span>
                    </label>
                </div>
                <div className={'bg-white rounded-md  flex justify-between items-center p-6'}>
                    <h4 className={'text-base font-medium text-[#222225]'}>Auto clicker</h4>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider"></span>
                        <span className="knob"></span>
                    </label>
                </div>
                <div className={'bg-white rounded-md  flex justify-between items-center p-6'}>
                    <h4 className={'text-base font-medium text-[#222225]'}>Backtrack</h4>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider"></span>
                        <span className="knob"></span>
                    </label>
                </div>
                <div className={'bg-white rounded-md  flex justify-between items-center p-6'}>
                    <h4 className={'text-base font-medium text-[#222225]'}>ItemESP</h4>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider"></span>
                        <span className="knob"></span>
                    </label>
                </div>
                <div className={'bg-white rounded-md  flex justify-between items-center p-6'}>
                    <h4 className={'text-base font-medium text-[#222225]'}>StorageESP</h4>
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

export default Visuals;