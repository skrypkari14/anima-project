import React, {useState} from 'react';
import Arrow from "../../assets/icons/Arrow";

const Select = ({items}) => {

    const [defaultSelectedItem, setDefaultSelectedItem] = useState('Выберите тип подписки');
    const [selectedItem, setSelectedItem] = useState();
    const [open, setOpen] = useState(false)
    return (
        <div className='w-full relative'>
            <div onClick={() => setOpen(!open)} className='w-full h-10 px-3 bg-transparent border border-[#e2e2e5] flex items-center justify-between cursor-pointer rounded-md'>
                {selectedItem ? <p className='text-sm text-[#222225]'>{selectedItem.title}</p> : <p className='text-sm text-[#66666e]'>{defaultSelectedItem}</p>}
                <Arrow className={`fill-[#9c9ca2] transition-all ${open ? 'rotate-180' : ''}`}/>
            </div>
            {open && (
                <div
                    className='absolute top-14 left-0 w-full max-h-32 overflow-y-auto bg-white rounded-md border border-[#e2e2e5]'>
                    {items.map(item => {
                        return (
                            <div className='px-2 py-4 border-b cursor-pointer transition-all hover:bg-[#e2e2e5]'
                                 onClick={() => {
                                     setSelectedItem(item);
                                     setOpen(false);
                                 }}>
                                {item.title}
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    );
};

export default Select;