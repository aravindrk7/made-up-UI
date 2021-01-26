import React, { useContext } from 'react';
import './Header.css';
import RouteContext from '../../contexts/RouteContext';

function Navbar() {
    const { currentRoute, setCurrentRoute } = useContext(RouteContext);
    const isActiveSection = (section) => {
        return section === currentRoute;
    }
    return (
        <nav className="navbar">
            <p className={isActiveSection('home') ? 'activeRoute' : null} onClick={() => setCurrentRoute('home')}>For Me</p>
            <p>Jeans</p>
            <p>Shirts</p>
            <p>T-Shirts</p>
            <p>Trousers</p>
            <p>Joggers</p>
            <p>Shorts</p>
        </nav>
    )
}

export default Navbar;
