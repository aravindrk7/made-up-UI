import React from 'react';
import EnvelopeIcon from '../../assets/SVG/EnvelopeIcon';
import FacebookIcon from '../../assets/SVG/FacebookIcon';
import InstagramIcon from '../../assets/SVG/InstagramIcon';
import PhoneIcon from '../../assets/SVG/PhoneIcon';
import YoutubeIcon from '../../assets/SVG/YoutubeIcon';
import Logo from '../logo/Logo';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__list">
                <p>About Us</p>
                <p>Delivery Information</p>
                <p>Returns & Exchange</p>
                <p>Technical & Privacy</p>
                <p>Order Status</p>
            </div>
            <div className="footer__links">
                <div className="footer__logo">
                    <Logo />
                </div>
                <p>Stay in touch with us</p>
                <div className="footer__socialLinks">
                    <FacebookIcon />
                    <InstagramIcon />
                    <YoutubeIcon />
                </div>
            </div>
            <div className="footer__contact">
                <h1>Our Corporate Office</h1>
                <p>No: 7,A2B road, Adayar Rajpuram, T-Nagar, Chennai - 642002.</p>
                <div>
                    <EnvelopeIcon />
                    <p>sales@madeup.com</p>
                </div>
                <div>
                    <PhoneIcon />
                    <p>044 9999 9999</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
