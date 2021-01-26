import React, { useContext } from 'react';
import './Logo.css';
import RouteContext from '../../contexts/RouteContext';

function Logo() {
    const { setCurrentRoute } = useContext(RouteContext);
    return (
        <div className="logo" onClick={() => setCurrentRoute('home')}>
            <h1>Made Up</h1>
        </ div>
    )
}

export default Logo;
