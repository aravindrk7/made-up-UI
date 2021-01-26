import React from 'react';
import './Customer.css';
import customer1 from './../../assets/images/customer/customer1.jpg'

function CustomerInfo() {
    return (
        <div className="customerInfo">
            <img className="customerInfo__photo" src={customer1} alt="customer" />
            <div>
                <p className="customerInfo__name">Grishk</p>
                <span className="customerInfo__email">griiskaim@gmail.com</span>
            </div>
        </div>
    )
}

export default CustomerInfo;
