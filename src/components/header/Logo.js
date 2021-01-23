import React, { useContext } from 'react';
import './Header.css';
import RouteContext from '../../contexts/RouteContext';

function Logo() {
    const { currentRoute, setCurrentRoute } = useContext(RouteContext);
    const navigateTo = (route) => {
        setCurrentRoute(route);
        console.log(route);
    }
    return (
        <div className="logo" onClick={() => navigateTo('home')}>
            <h1>Made Up</h1>
        </ div>
    )
}

export default Logo;
