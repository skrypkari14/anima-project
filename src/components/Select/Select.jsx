import React, {useState} from 'react';
import Arrow from "../../assets/icons/Arrow";

const Select = ({items, defaultSelectedItem}) => {

    const [selectedItem, setSelectedItem] = useState();
    const [open, setOpen] = useState(false)
    return (
        <div className='w-full relative'>
            <div onClick={() => setOpen(!open)} className='w-full h-10 px-3 bg-transparent border border-subtle flex items-center justify-between cursor-pointer rounded-md'>
                {selectedItem ? <p className='text-sm text-primary dark:text-white'>{selectedItem.title}</p> : <p className='text-sm text-secondary dark:text-secondary'>{defaultSelectedItem}</p>}
                <Arrow className={`fill-surface transition-all ${open ? 'rotate-180' : ''}`}/>
            </div>
            {open && (
                <div
                    className='absolute top-14 left-0 w-full max-h-32 overflow-y-auto bg-white dark:bg-neutral rounded-md border border-subtle'>
                    {items.map((item, index) => {
                        return (
                            <div className={`px-2 py-4 border-subtle dark:text-white  cursor-pointer transition-all hover:bg-subtle dark:hover:bg-secondary ${index+1 !== items.length ? 'border-b' : ''}`}
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