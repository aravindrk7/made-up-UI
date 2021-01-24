import React from 'react';
import './Customer.css';

function CustomerRoute(props) {
    const handleClick = () => {
        props.clicked();
    }
    console.log(props.active);
    const active = {
        borderBottom: props.active && !props.mobile ? '1px solid #000' : null
    }
    const rotate = {
        transform: props.active && props.mobile ? 'rotate(360deg)' : 'rotate(180deg)'
    }
    return (
        <div className="customerRoute" style={active} onClick={handleClick}>
            <div className="customerRoute__header">
                <p className="customerRoute__heading">{props.heading}</p>
                <span className="customerRoute__subHeading">{props.subHeading}</span>
            </div>
            {!props.mobile
                ? <div className="customerRoute__arrow">
                    <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.125 9.5L5.125 5.32609L1.125 1.15217" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
                : <div className="customerRoute__arrow" style={rotate}>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.68917 0.275862C1.28924 -0.105024 0.65626 -0.0895855 0.275374 0.310345C-0.105512 0.710275 -0.0900738 1.34325 0.309857 1.72414L1.68917 0.275862ZM6.99951 6.71429L6.30986 7.43842C6.69606 7.80624 7.30296 7.80624 7.68917 7.43842L6.99951 6.71429ZM13.6892 1.72414C14.0891 1.34325 14.1045 0.710275 13.7236 0.310345C13.3428 -0.0895855 12.7098 -0.105024 12.3099 0.275862L13.6892 1.72414ZM0.309857 1.72414L6.30986 7.43842L7.68917 5.99015L1.68917 0.275862L0.309857 1.72414ZM7.68917 7.43842L13.6892 1.72414L12.3099 0.275862L6.30986 5.99015L7.68917 7.43842Z" fill="#333333" />
                    </svg>
                </div>
            }



        </div>
    )
}

export default CustomerRoute;
