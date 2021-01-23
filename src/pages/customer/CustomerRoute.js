import React from 'react';
import './Customer.css';

function CustomerRoute(props) {
    const handleClick = () => {
        props.clicked();
    }
    console.log(props.active);
    const active = {
        borderBottom: props.active ? '1px solid #000' : null
    }
    return (
        <div className="customerRoute" style={active} onClick={handleClick}>
            <div className="customerRoute__header">
                <p className="customerRoute__heading">{props.heading}</p>
                <span className="customerRoute__subHeading">{props.subHeading}</span>
            </div>
            <div className="customerRoute__arrow">
                <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.125 9.5L5.125 5.32609L1.125 1.15217" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
        </div>
    )
}

export default CustomerRoute;
