import React from 'react';
import './Collections.css';

function CollectionsItem(props) {
    return (
        <div className="collectionsItem">
            <img src={props.image} alt="" />
            <div className="collectionsItem__details">
                <p>{props.name}</p>
                <span>{props.currency + ' ' + props.price}</span>
            </div>
        </div>
    )
}

export default CollectionsItem;
