import React, { useContext, useEffect } from 'react';
import './Customer.css';
import MyOrders from '../myOrders/MyOrders';
import CustomerInfo from './CustomerInfo';
import CustomerRoute from './CustomerRoute';
import RouteContext from '../../contexts/RouteContext';
import MyProfile from '../myProfile/MyProfile';

function Customer() {
    const { currentRoute, setCurrentRoute } = useContext(RouteContext);
    console.log(currentRoute);
    // useEffect(() => {
    //     setCurrentRoute('myProfile');
    // }, [])
    const navigateTo = (route) => {
        setCurrentRoute(route);
    }
    const getCurrentSection = (section) => {
        if (section === "myProfile") return <MyProfile />
        if (section === "myOrders") return <MyOrders />
    }
    const checkActiveSection = (section) => {
        return (section === currentRoute) ? true : false;
    }
    return (
        <div className="customer">
            <div className="customer__title">
                <p>{currentRoute === "myProfile"
                    ? "Home / My Profile"
                    : "Home / My Orders"}</p>
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
    )
}

export default Customer;
