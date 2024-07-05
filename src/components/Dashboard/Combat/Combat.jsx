import React, { useState } from 'react';

const Combat = () => {
    const [rangeValue, setRangeValue] = useState(15);
    const [selectedTab, setSelectedTab] = useState(0);

    const handleChange = (event) => {
        const newValue = event.target.value;
        setRangeValue(newValue);
        console.log(newValue);
    };

    return (
        <div className="p-6 dark:bg-primary">
            <h1 className="text-2xl font-semibold text-primary dark:text-white">Combat</h1>
            <div className="mt-6">
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
                <div className="pt-3 flex flex-col gap-3">
                    <div className="bg-white dark:bg-neutral rounded-md p-6 flex flex-col gap-4">
                        <div className="flex justify-between">
                            <div className="flex flex-col w-3/5">
                                <h4 className="text-base font-medium text-primary dark:text-white">Hitbox</h4>
                                <p className="text-sm text-secondary">
                                    Увеличивает область попадания по игрокам, что делает их более уязвимыми для ваших
                                    ударов. Практически, целиться становится легче, так как хитбокс становится больше
                                    обычного.
                                </p>
                            </div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                                <span className="knob"></span>
                            </label>
                        </div>
                        <div className="border-y dark:text-white dark:border-[#444442] border-subtle py-4 flex flex-col sm:flex-row gap-4 justify-between items-center">
                            <p>Дальность</p>
                            <div className="flex flex-col sm:flex-row gap-4 items-center">
                                <input
                                    type="range"
                                    max={30}
                                    min={0}
                                    defaultValue={15}
                                    className="w-full md:w-[333px] appearance-none bg-subtle dark:bg-[#444449] h-1.5 rounded-md"
                                    onChange={handleChange}
                                />
                                <div className="h-8 w-[200px] px-2 border dark:border-[#444442] border-subtle rounded-md flex items-center justify-center">
                                    <input
                                        className="bg-transparent w-[160px] outline-0 h-8 text-sm"
                                        value={rangeValue}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex dark:text-white justify-between items-center">
                            <p>Только криты</p>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                                <span className="knob"></span>
                            </label>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-neutral rounded-md p-6 flex flex-col gap-4">
                        <div className="flex justify-between">
                            <div className="flex flex-col w-3/5">
                                <h4 className="text-base font-medium text-primary dark:text-white">Fake Lags</h4>
                                <p className="text-sm text-secondary">
                                    Создает видимость лагающего соединения у противника, что усложняет ему задачу поцелить вас. Противник видит вас в "рывках", а не плавно передвигающимся.
                                </p>
                            </div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                                <span className="knob"></span>
                            </label>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-neutral rounded-md p-6 flex flex-col gap-4">
                        <div className="flex justify-between">
                            <div className="flex flex-col w-3/5">
                                <h4 className="text-base font-medium text-primary dark:text-white">TriggerBot</h4>
                                <p className="text-sm text-secondary">
                                    Автоматически атакует противников, когда они попадают в ваш прицел. Это избавляет вас от необходимости вручную нажимать на кнопку атаки.
                                </p>
                            </div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                                <span className="knob"></span>
                            </label>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-neutral rounded-md p-6 flex flex-col gap-4">
                        <div className="flex justify-between">
                            <div className="flex flex-col w-3/5">
                                <h4 className="text-base font-medium text-primary dark:text-white">Wtap</h4>
                                <p className="text-sm text-secondary">
                                    Позволяет автоматически отталкивать противников, когда вы их ударяете. Это помогает держать их на расстоянии и дает преимущество в ближнем бою.
                                </p>
                            </div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                                <span className="knob"></span>
                            </label>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-neutral rounded-md p-6 flex flex-col gap-4">
                        <div className="flex justify-between">
                            <div className="flex flex-col w-3/5">
                                <h4 className="text-base font-medium text-primary dark:text-white">Reach</h4>
                                <p className="text-sm text-secondary">
                                    Увеличивает дистанцию, на которую вы можете наносить удары. Вы сможете бить врагов с более дальнего расстояния, чем это возможно в обычной игре.
                                </p>
                            </div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                                <span className="knob"></span>
                            </label>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-neutral rounded-md p-6 flex flex-col gap-4">
                        <div className="flex justify-between">
                            <div className="flex flex-col w-3/5">
                                <h4 className="text-base font-medium text-primary dark:text-white">Aim Assists</h4>
                                <p className="text-sm text-secondary">
                                    Автоматически подправляет ваш прицел, чтобы удары всегда попадали в цель. Практически, делает вас более точным и смертоносным.
                                </p>
                            </div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                                <span className="knob"></span>
                            </label>
                        </div>
                    </div>
                    <div className="bg-white dark:bg-neutral rounded-md p-6 flex flex-col gap-4">
                        <div className="flex justify-between">
                            <div className="flex flex-col w-3/5">
                                <h4 className="text-base font-medium text-primary dark:text-white">Auto clicker</h4>
                                <p className="text-sm text-secondary">
                                    Автоматически кликает за вас с заданной скоростью. Это позволяет непрерывно атаковать противников, не уставая самому.
                                </p>
                            </div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider"></span>
                                <span className="knob"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Combat;
