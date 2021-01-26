import React from 'react';
import './Subscription.css';
import model8 from './../../../assets/images/models/model8.jpg';
import Marker from '../../../assets/SVG/Marker';


function Subscription() {
    return (
        <div className="subscription">
            <div className="subscription__overlay"></div>
            <img src={model8} alt="" />
            <div className="subscription__info">
                <h1>Get Coupons & Style Guides</h1>
                <p>Subscribe to our Newsletter</p>
                <div>
                    <input type="email" />
                    <button>Subscribe</button>
                </div>
            </div>
            <button>
                <Marker />
                <span>Locate Us</span>
            </button>
        </div>
    )
}

export default Subscription;
