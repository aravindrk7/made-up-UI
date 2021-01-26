import React, { useContext, useState } from 'react';
import './Header.css';
import RouteContext from '../../contexts/RouteContext';
import SearchIcon from '../../assets/SVG/SearchIcon';
import CartIcon from '../../assets/SVG/CartIcon';
import HeartIcon from '../../assets/SVG/HeartIcon';
import UserIcon from '../../assets/SVG/UserIcon';
import BarIcon from '../../assets/SVG/BarIcon';
import SideMenu from './SideMenu';

function Menu() {
    const { currentRoute, setCurrentRoute } = useContext(RouteContext);
    const [showSideMenu, setShowSideMenu] = useState(false);

    return (
        <div className="menu">
            <div className="menu__icon search">
                <SearchIcon />
            </div>
            <div className="menu__icon cart" onClick={() => setCurrentRoute('myOrders')}>
                <CartIcon />
            </div>
            <div className="menu__icon heart">
                <HeartIcon />
            </div>
            <div className="menu__icon user" onClick={() => setCurrentRoute('myProfile')}>
                <UserIcon />
            </div>
            <div className="menu__icon bar" onClick={() => setShowSideMenu(true)}>
                <BarIcon />
            </div>
            {showSideMenu &&
                <SideMenu
                    close={setShowSideMenu}
                    navigateTo={setCurrentRoute}
                    currentRoute={currentRoute}
                />}

        </div >
    )
}

export default Menu;
