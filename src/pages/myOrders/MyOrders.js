import React from 'react';
import './MyOrders.css';
import Order from './Order';
import model1 from './../../assets/images/models/model1.jpg';

import ordersData from './../../data/orders.json';

function MyOrders() {
    return (
        <div className="myOrders">
            <h1 className="myOrders__title">My Orders</h1>
            <main>
                {ordersData?.map(order => (
                    <Order
                        key={order.id}
                        image={model1}
                        id={order.id}
                        item={order.item}
                        delivery={order.delivery}
                        paymentType={order.paymentType}
                        price={order.price}
                        status={order.status} />
                ))}

            </main>
        </div>
    )
}

export default MyOrders;
