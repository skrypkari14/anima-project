import React from 'react';
import Avatar from 'react-avatar';


const Navbar = () => {
    return (
        <div className='px-6 py-3 border-b flex items-center justify-between border-[#e2e2e5]'>
            <div className='h-10 max-w-80 w-full bg-white rounded-md border border-[#e2e2e5]'>
                <input className='bg-transparent outline-0 h-full px-2 text-sm'/>
            </div>
            <div className='flex items-center gap-3'>
                <div className='flex flex-col text-right'>
                    <span className='font-medium text-sm'>sunshine</span>
                    <span className='text-sm text-[#66666e]'>Premium <span className='text-[#ff0037]'>5 дней</span></span>
                </div>
                <Avatar size={40} src={'https://api.dicebear.com/9.x/initials/svg?seed=Sunshine'} round={20}/>
            </div>
        </div>
    );
};

export default Navbar;