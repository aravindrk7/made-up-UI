import React from 'react';
import './Home.css';
import model8 from './../../assets/images/models/model8.jpg';


function Subscription() {
    return (
        <div className="home__subscribe">
            <div className="home__subscribeOverlay"></div>
            <img src={model8} alt="" />
            <div className="home__subscribeInfo">
                <h1>Get Coupons & Style Guides</h1>
                <p>Subscribe to our Newsletter</p>
                <div>
                    <input type="email" />
                    <button>Subscribe</button>
                </div>
            </div>
            <button>
                <svg width="15" height="18" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.501 7C14.501 12.4444 7.50098 17.1113 7.50098 17.1113C7.50098 17.1113 0.500977 12.4444 0.500977 7C0.500977 5.14348 1.23847 3.36301 2.55123 2.05025C3.86398 0.737498 5.64446 0 7.50098 0C9.35749 0 11.138 0.737498 12.4507 2.05025C13.7635 3.36301 14.501 5.14348 14.501 7Z" fill="#E0E0E0" />
                    <path d="M9.83458 7.00005C9.83458 7.46145 9.69776 7.91249 9.44144 8.29614C9.18512 8.67979 8.82079 8.97883 8.39453 9.15544C7.96827 9.33204 7.49921 9.37829 7.04666 9.28834C6.59412 9.19839 6.1784 8.97627 5.85209 8.65006C5.52577 8.32386 5.3035 7.90823 5.21339 7.45571C5.12327 7.0032 5.16936 6.53412 5.34582 6.1078C5.52227 5.68147 5.82118 5.31704 6.20474 5.06058C6.5883 4.80413 7.03929 4.66716 7.50069 4.66699C7.80714 4.66688 8.11062 4.72715 8.39377 4.84435C8.67692 4.96155 8.93422 5.13338 9.15095 5.35004C9.36768 5.56669 9.53961 5.82392 9.6569 6.10704C9.7742 6.39015 9.83458 6.6936 9.83458 7.00005Z" fill="#333333" />
                </svg>
                <span>Locate Us</span>
            </button>
        </div>
    )
}

export default Subscription;
