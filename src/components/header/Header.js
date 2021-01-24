import React, { useEffect, useState } from 'react';
import './Header.css';
import Navbar from './Navbar';
import Logo from '../logo/Logo';
import Menu from './Menu';

function Header() {
    const [style, setStyle] = useState();

    function listenScrollEvent(e) {
        if (window.scrollY > 60) {
            setStyle({
                height: '70px',
                boxShadow: '0 0 5px gainsboro'
            })
        } else {
            setStyle();
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
    }, [])
    return (
        <header className="header" style={style}>
            <Logo />
            <Navbar />
            <Menu />
        </header>
    )
}

export default Header;
