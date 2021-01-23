import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import './Header.css';
import Navbar from './Navbar';
import IconTray from './IconTray';

function Header() {
    const [style, setStyle] = useState()
    function listenScrollEvent(e) {
        if (window.scrollY > 60) {
            setStyle({
                height: '70px',
                boxShadow: '0 0 5px gainsboro'
            })
        } else {
            setStyle()
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)
    }, [])
    return (
        <header className="header" style={style}>
            <Logo />
            <Navbar />
            <IconTray />
        </header>
    )
}

export default Header;
