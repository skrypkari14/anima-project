import React from 'react';

const SecondButton = ({text, ...props}) => {
    return (
        <button {...props} className={'h-[40px] w-full text-[#222225] text-[14px] text-center border border-[#e2e2e5] bg-white rounded-[6px] hover:border-[#ff0037] hover:text-[#ff0037] dark:bg-transparent dark:text-white dark:border-[#444449] dark:hover:bg-[#444449] transition-all'}>{text}</button>
    );
};

export default SecondButton;