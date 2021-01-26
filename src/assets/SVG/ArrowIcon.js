import React from 'react';

function ArrowIcon(props) {
    const directionStyle = {
        'left': 'rotate(180deg)',
        'right': 'rotate(360deg)',
        'up': 'rotate(-90deg)',
        'down': 'rotate(90deg)'
    }
    return (
        <svg style={{ cursor: 'pointer', transform: directionStyle[props.direction] }} width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.125 9.5L5.125 5.32609L1.125 1.15217" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default ArrowIcon;
