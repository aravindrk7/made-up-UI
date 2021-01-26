import React from 'react';
import './Customer.css';
import ArrowIcon from './../../assets/SVG/ArrowIcon';

function CustomerRoute(props) {
    const active = {
        borderBottom: props.active && !props.mobile ? '1px solid #000' : null
    }
    const rotate = {
        transform: props.active && props.mobile ? 'rotate(180deg)' : 'rotate(0deg)'
    }
    return (
        <div className="customerRoute" style={active} onClick={() => props.clicked()}>
            <div className="customerRoute__header">
                <p className="customerRoute__heading">{props.heading}</p>
                <span className="customerRoute__subHeading">{props.subHeading}</span>
            </div>
            {!props.mobile
                ?
                <div className="customerRoute__arrow">
                    <ArrowIcon direction={'right'} />
                </div>
                : <div className="customerRoute__arrow" style={rotate}>
                    <ArrowIcon direction={'down'} />
                </div>
            }
        </div>
    )
}

export default CustomerRoute;
