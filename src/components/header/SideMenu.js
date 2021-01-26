import React from 'react';
import './Header.css';
import CloseIcon from '../../assets/SVG/CloseIcon';

function SideMenu(props) {
    return (
        <div className="sideMenu">
            <div className="sideMenu__close" onClick={() => props.close(false)} >
                <CloseIcon />
            </div>
            <div className="sideMenu__top">
                <p className={props.currentRoute === 'myProfile' ? 'activeSideMenu' : null}
                    onClick={() => props.navigateTo('myProfile')}>My Profile</p>
                <p>My Wishlist</p>
                <p className={props.currentRoute === 'myOrders' ? 'activeSideMenu' : null}
                    onClick={() => props.navigateTo('myOrders')}>My Orders</p>
                <p className={props.currentRoute === 'myAddress' ? 'activeSideMenu' : null}
                    onClick={() => props.navigateTo('myAddress')}>My Addresses</p>
            </div>
            <div className="sideMenu__bottom">
                <p>The Brand</p>
                <p>The made up Story</p>
                <p>Franchise and Supplieds</p>
                <p>Store Locator</p>
            </div>
        </div >
    )
}

export default SideMenu;
