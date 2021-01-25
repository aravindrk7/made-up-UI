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
    // useEffect(() => {
    //     setCurrentRoute('myProfile');
    // }, [])
    const navigateTo = (route) => {
        setCurrentRoute(route);
    }
    const getCurrentSection = (section) => {
        if (section === "myProfile") return <MyProfile />
        if (section === "myOrders") return <MyOrders />
        if (section === "shippingAddress") return <ShippingAddress />
        return null
    }
    const checkActiveSection = (section) => {
        return (section === currentRoute) ? true : false;
    }
    return (
        <>
            <div className="customer">
                <div className="customer__title">
                    <p>{currentRoute === "myProfile"
                        ? "Home / My Profile"
                        : currentRoute === "myOrders" ? "Home / My Orders" : "Home / Shipping Address"}</p>
                </div>
                <main>
                    <section className="customer__nav">
                        <CustomerInfo />
                        <div className="customer__routes">
                            <CustomerRoute heading="My Profile" active={checkActiveSection('myProfile')} subHeading="Notifications, password" clicked={() => navigateTo('myProfile')} />
                            <CustomerRoute heading="My Orders" active={checkActiveSection('myOrders')} subHeading="Already have 12 orders" clicked={() => navigateTo('myOrders')} />
                            <CustomerRoute heading="Shipping Address" active={checkActiveSection('shippingAddress')} subHeading="3 addresses" clicked={() => navigateTo('shippingAddress')} />
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
                        <CustomerRoute heading="Shipping Address" subHeading="3 addresses" mobile clicked={() => setAddress(!address)} />
                        {address && <ShippingAddress />}
                    </div>
                </section>

            </div >
        </>
    )
}

export default Customer;
