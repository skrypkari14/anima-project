import React from 'react';
import Avatar from "react-avatar";
import More from "../../../assets/icons/More";
import {Link} from "react-router-dom";

const MessageCard = ({ username, date, comment, premium }) => {
    return (
        <div className='p-6 flex items-start gap-3 bg-white dark:bg-neutral rounded-md relative'>
            <Link to={`/dashboard/user/${username}`}>
                <Avatar round={true} size={40} src={`https://api.dicebear.com/9.x/initials/svg?seed=${username}`}/>
            </Link>
            <div className='flex flex-col'>
                <div className='flex gap-1 items-center'>
                    <span className='text-sm text-primary dark:text-white font-medium'>{username}</span>
                    {premium && (
                        <span
                            className='text-[#ff0037] font-medium text-xs py-0.5 px-1 bg-[#ffe6eb] rounded'>Premium</span>
                    )}
                </div>
                <span className='text-primary dark:text-white text-sm mt-1.5'>
          {comment}
        </span>
                <span className='text-secondary text-sm mt-3'>{date}</span>
            </div>
            <More className='fill-secondary absolute right-6 top-6 cursor-pointer'/>
        </div>
    );
};

export default MessageCard;