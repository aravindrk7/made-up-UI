import React from 'react';
import './ImageTab.css';

function ImageTabItem(props) {
    return (
        <div className="tabItem" key={props.id}>
            <div className={`tabItem__imageContainer ${props.active ? 'tabItem__active' : null}`}>
                <img src={props.image} alt="" />
            </div>
            <p className="tabItem__title">{props.title}</p>
        </div>
    )
}

export default ImageTabItem;
