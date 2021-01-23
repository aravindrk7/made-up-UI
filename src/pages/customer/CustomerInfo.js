import React from 'react';
import './Customer.css';
import customer1 from './../../assets/images/customer/customer1.jpg'

function CustomerInfo() {
    return (
        <div className="customer__info">
            <img className="customer__photo" src={customer1} alt="customer" />
            <div>
                <p className="customer__name">Grishk</p>
                <span className="customer__email">griiskaim@gmail.com</span>
            </div>
        </div>
    )
}

export default CustomerInfo;
