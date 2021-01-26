import React, { useContext, useState } from 'react';
import './Customer.css';
import CustomerInfo from './CustomerInfo';
import CustomerRoute from './CustomerRoute';
import RouteContext from '../../contexts/RouteContext';
import MyProfile from '../myProfile/MyProfile';
import MyOrders from '../myOrders/MyOrders';
import ShippingAddress from '../shippingAddress/ShippingAddress';

function Customer() {
    const { currentRoute, setCurrentRoute } = useContext(RouteContext);
    const [profile, setProfile] = useState(false);
    const [orders, setOrders] = useState(false);
    const [address, setAddress] = useState(false);

    const getCurrentSection = (section) => {
        if (section === "myProfile") return <MyProfile />
        if (section === "myOrders") return <MyOrders />
        if (section === "myAddress") return <ShippingAddress />
        return null
    }
    const isActiveSection = (section) => {
        return section === currentRoute;
    }
    const getTitle = (section) => {
        if (section === "myProfile") return "Home / My Profile"
        if (section === "myOrders") return "Home / My Orders"
        if (section === "myAddress") return "Home / Shipping Address"
    }

    return (
        <>
            <div className="customer">
                <div className="customer__title">
                    <p>{getTitle(currentRoute)}</p>
                </div>
                <main>
                    <section className="customer__nav">
                        <CustomerInfo />
                        <div className="customer__routes">
                            <CustomerRoute heading="My Profile" active={isActiveSection('myProfile')} subHeading="Notifications, password" clicked={() => setCurrentRoute('myProfile')} />
                            <CustomerRoute heading="My Orders" active={isActiveSection('myOrders')} subHeading="Already have 12 orders" clicked={() => setCurrentRoute('myOrders')} />
                            <CustomerRoute heading="Shipping Address" active={isActiveSection('myAddress')} subHeading="3 addresses" clicked={() => setCurrentRoute('myAddress')} />
                        </div>
                    </section>
                    <section className="customer__main">
                        {currentRoute && getCurrentSection(currentRoute)}
                    </section>
                </main>
            </div >
            <div className="customerMobile">
                <CustomerInfo />
                <section className="customer__nav">
                    <div className="customer__routes">
                        <CustomerRoute heading="My Profile" subHeading="Notifications, password" mobile active={profile} clicked={() => setProfile(!profile)} />
                        {profile && < MyProfile />}
                        <CustomerRoute heading="My Orders" subHeading="Already have 12 orders" mobile active={orders} clicked={() => setOrders(!orders)} />
                        {orders && <MyOrders />}
                        <CustomerRoute heading="Shipping Address" subHeading="3 addresses" mobile active={address} clicked={() => setAddress(!address)} />
                        {address && <ShippingAddress />}
                    </div>
                </section>

            </div >
        </>
    )
}

export default Customer;
