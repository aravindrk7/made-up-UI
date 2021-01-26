import React, { useRef } from 'react';
import ArrowIcon from '../../assets/SVG/ArrowIcon';
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
            <div className="slider__leftArrow" onClick={scrollLeft}>
                <ArrowIcon direction={'left'} />
            </div>
            <div ref={myRef} className="slider__items">
                {props.children}
            </div>
            <div className="slider__rightArrow" onClick={scrollRight}>
                <ArrowIcon direction={'right'} />
            </div>
        </div >
    )
}

export default Slider;
