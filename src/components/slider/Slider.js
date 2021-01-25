import React, { useRef, useState } from 'react';
import './Slider.css';

function Slider(props) {
    const myRef = useRef();
    const scrollLeft = () => {
        myRef.current.scrollLeft -= props.scrollDistance;
    };
    const scrollRight = () => {
        myRef.current.scrollLeft += props.scrollDistance;
    };
    return (
        <div className="slider">
            <svg onClick={scrollLeft} className="slider__LeftArrow" width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2479 2.35616C11.6288 1.95623 11.6134 1.32325 11.2135 0.942366C10.8135 0.56148 10.1806 0.576918 9.79967 0.976849L11.2479 2.35616ZM0.999994 11.6665L0.275856 10.9768C-0.09196 11.3631 -0.09196 11.97 0.275856 12.3562L0.999994 11.6665ZM9.79967 22.3562C10.1806 22.7561 10.8135 22.7715 11.2135 22.3906C11.6134 22.0098 11.6288 21.3768 11.2479 20.9768L9.79967 22.3562ZM9.79967 0.976849L0.275856 10.9768L1.72413 12.3562L11.2479 2.35616L9.79967 0.976849ZM0.275856 12.3562L9.79967 22.3562L11.2479 20.9768L1.72413 10.9768L0.275856 12.3562Z" fill="#333333" />
            </svg>
            <div ref={myRef} className="slider__items">
                {props.children}
            </div>
            <svg onClick={scrollRight} className="slider__RightArrow" width="12" height="23" viewBox="0 0 12 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.276045 20.9768C-0.104841 21.3768 -0.0894024 22.0098 0.310528 22.3906C0.710458 22.7715 1.34343 22.7561 1.72432 22.3562L0.276045 20.9768ZM10.524 11.6665L11.2481 12.3562C11.6159 11.97 11.6159 11.3631 11.2481 10.9768L10.524 11.6665ZM1.72432 0.976849C1.34343 0.57692 0.710458 0.56148 0.310528 0.942366C-0.0894024 1.32325 -0.104841 1.95623 0.276045 2.35616L1.72432 0.976849ZM1.72432 22.3562L11.2481 12.3562L9.79985 10.9768L0.276045 20.9768L1.72432 22.3562ZM11.2481 10.9768L1.72432 0.976849L0.276045 2.35616L9.79985 12.3562L11.2481 10.9768Z" fill="#333333" />
            </svg>
        </div >
    )
}

export default Slider;
