import React from 'react';
import './Home.css';

import Gallery from './gallery/Gallery';
import Collections from './collections/Collections';
import Testimonials from './testimonials/Testimonials';
import Subscription from './subscription/Subscription';

import Slider from '../../components/slider/Slider';
import ImageTab from './imageTab/ImageTab';

function Home() {
    return (
        <div className="home">
            <div className="home__tab">
                <Slider scrollDistance={50}>
                    <ImageTab />
                </Slider>
            </div>
            <Gallery />
            <Collections />
            <Testimonials />
            <Subscription />
        </div >
    )
}

export default Home;
