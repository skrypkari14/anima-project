import React from 'react';

const Arrow = ({...props}) => {
    return (
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path
                d="M0.575368 1.00164C0.799556 0.777449 1.16304 0.777449 1.38722 1.00164L4.99978 4.6142L8.61234 1.00164C8.83653 0.777449 9.20001 0.777449 9.4242 1.00164C9.64839 1.22583 9.64839 1.58931 9.4242 1.81349L5.40571 5.83198C5.18152 6.05617 4.81804 6.05617 4.59385 5.83198L0.575368 1.81349C0.35118 1.58931 0.35118 1.22583 0.575368 1.00164Z"
                />
        </svg>

    );
};

export default Arrow;