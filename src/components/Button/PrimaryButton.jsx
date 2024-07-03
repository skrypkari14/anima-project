import React from 'react';

const PrimaryButton = ({text}) => {
    return (
        <button className={'h-[40px] w-full text-white text-[14px] text-center bg-[#FF0037] rounded-[6px] hover:bg-[#CB002C]'}>{text}</button>
    );
};

export default PrimaryButton;