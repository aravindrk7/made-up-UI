import React from 'react';
import './Header.css';
import Navbar from './Navbar';
import Logo from '../logo/Logo';
import Menu from './Menu';

function Header() {
    return (
        <header className="header" >
            <Logo />
            <Navbar />
            <Menu />
        </header>
    )
}

export default Header;
