import React from 'react';
import './MyOrders.css';
import ArrowIcon from './../../assets/SVG/ArrowIcon';

function Order(props) {

    const pending = {
        color: '#fff',
        background: '#333'
    }
    const delivered = {
        color: '#777',
        background: '#F3F3F3',
    }

    return (
        <div className="order">
            <div className="order__info">
                <img src={props.image} alt="" className="order__photo" />
                <div>
                    <span className="order__id">Order {props.id}</span>
                    <p className="order__item">{props.item}</p>
                    <p className="order__delivery">{props.delivery}</p>
                </div>
            </div>
            <div className="order__paymentInfo">
                <div className="order__paymentInfoPay">
                    <span className="order__paymentType">{props.paymentType}</span>
                    <p className="order__paymentPrice">Rs {props.price}</p>
                </div>
                <div className="order__arrow">
                    <ArrowIcon direction={'down'} />
                </div>
            </div>
            <div className="order__status" style={props.status === 'Pending' ? pending : delivered}>{props.status}</div>
        </div>
    )
}

export default Order;
