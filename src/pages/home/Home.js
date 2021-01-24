import React from 'react';
import './Home.css';


import Gallery from './Gallery';
import Collections from './Collections';
import Testimonials from './Testimonials';
import Subscription from './Subscription';

function Home() {
    return (
        <div className="home">
            <Gallery />
            <Collections />
            <Testimonials />
            <Subscription />
        </div >
    )
}

export default Home;
