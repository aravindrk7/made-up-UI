import React from 'react';
import './Home.css';

import model6 from './../../assets/images/models/model6.jpg'
import model7 from './../../assets/images/models/model7.jpg'

function Collections() {
    return (
        <div className="home__collections">
            <div className="home__collectionsHeading">
                <h1>Latest Collections</h1>
            </div>
            <main>
                <div className="home__collections__Item">
                    <img src={model6} alt="" />
                    <div className="home__collectionsDetails">
                        <p>Printed Polo T-Shirt</p>
                        <span>₹1,499.00</span>
                    </div>
                </div>
                <div className="home__collections__Item">
                    <img src={model7} alt="" />
                    <div className="home__collectionsDetails">
                        <p>Printed Polo T-Shirt</p>
                        <span>₹1,499.00</span>
                    </div>
                </div>
                <div className="home__collections__Item">
                    <img src={model6} alt="" />
                    <div className="home__collectionsDetails">
                        <p>Printed Polo T-Shirt</p>
                        <span>₹1,499.00</span>
                    </div>
                </div>
                <div className="home__collections__Item">
                    <img src={model7} alt="" />
                    <div className="home__collectionsDetails">
                        <p>Printed Polo T-Shirt</p>
                        <span>₹1,499.00</span>
                    </div>
                </div>
                <div className="home__collections__Item">
                    <img src={model6} alt="" />
                    <div className="home__collectionsDetails">
                        <p>Printed Polo T-Shirt</p>
                        <span>₹1,499.00</span>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Collections;
