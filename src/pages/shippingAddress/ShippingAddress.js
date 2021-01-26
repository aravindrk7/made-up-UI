import React from 'react';
import './ShippingAddress.css';
import addressData from './../../data/address.json';

function ShippingAddress() {
    return (
        <div className="shippingAddress">
            <h1 className="shippingAddress__title">Shipping Address</h1>
            <main>
                {
                    addressData?.map(address => (
                        <div key={address.id}>
                            <h1>{address.title}</h1>
                            <address>{address.location}</address>
                        </div>
                    ))
                }
                <div className="shippingAddress__buttonContainer">
                    <button>Add New Address</button>
                </div>
            </main>
        </div>
    )
}

export default ShippingAddress;
