import React from 'react';
import './MyOrders.css';
import model1 from './../../assets/images/models/model1.jpg';

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
        <div className="myOrders__order">
            <div className="myOrders__orderInfo">
                <img src={model1} alt="" className="myOrders__orderPhoto" />
                <div>
                    <span className="myOrders__orderId">Order {props.id}</span>
                    <p className="myOrders__orderItem">{props.item}</p>
                    <p className="myOrders__orderDelivery">{props.delivery}</p>
                </div>
            </div>
            <div className="myOrders__orderPaymentInfo">
                <span className="myOrders__orderPaymentType">{props.paymentType}</span>
                <p className="myOrders__orderPaymentPrice">Rs {props.price}</p>
                <div className="myOrders__orderArrow">
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.68917 0.275862C1.28924 -0.105024 0.65626 -0.0895855 0.275374 0.310345C-0.105512 0.710275 -0.0900738 1.34325 0.309857 1.72414L1.68917 0.275862ZM6.99951 6.71429L6.30986 7.43842C6.69606 7.80624 7.30296 7.80624 7.68917 7.43842L6.99951 6.71429ZM13.6892 1.72414C14.0891 1.34325 14.1045 0.710275 13.7236 0.310345C13.3428 -0.0895855 12.7098 -0.105024 12.3099 0.275862L13.6892 1.72414ZM0.309857 1.72414L6.30986 7.43842L7.68917 5.99015L1.68917 0.275862L0.309857 1.72414ZM7.68917 7.43842L13.6892 1.72414L12.3099 0.275862L6.30986 5.99015L7.68917 7.43842Z" fill="#333333" />
                    </svg>
                </div>
            </div>
            <div className="myOrders__orderStatus" style={props.status === 'Pending' ? pending : delivered}>{props.status}</div>
        </div>
    )
}

export default Order;
