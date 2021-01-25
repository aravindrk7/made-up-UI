import React from 'react';
import './Home.css';


import Gallery from './Gallery';
import Collections from './Collections';
import Testimonials from './Testimonials';
import Subscription from './Subscription';

import tab1 from './../../assets/images/tabs/tab1.png';
import tab2 from './../../assets/images/tabs/tab2.png';
import tab3 from './../../assets/images/tabs/tab3.png';
import tab4 from './../../assets/images/tabs/tab4.png';
import tab5 from './../../assets/images/tabs/tab5.png';
import Slider from '../../components/slider/Slider';

function Home() {
    return (
        <div className="home">
            <div className="tabContainer">
                <Slider scrollDistance={50}>
                    <div className="tab" key={1}>
                        <div className="ImageContainer">
                            <img src={tab1} alt="" />
                        </div>
                        <p>For Me</p>
                    </div>
                    <div className="tab" key={2}>
                        <div className="ImageContainer">
                            <img src={tab2} alt="" />
                        </div>
                        <p>Jeans</p>
                    </div>

                    <div className="tab" key={3}>
                        <div className="ImageContainer">
                            <img src={tab3} alt="" />
                        </div>
                        <p>T-Shirts</p>
                    </div>

                    <div className="tab" key={4}>
                        <div className="ImageContainer">
                            <img src={tab4} alt="" />
                        </div>
                        <p>Shirts</p>
                    </div>

                    <div className="tab" key={5}>
                        <div className="ImageContainer">
                            <img src={tab5} alt="" />
                        </div>
                        <p>Trousers</p>
                    </div>
                    <div className="tab" key={6}>
                        <div className="ImageContainer">
                            <img src={tab5} alt="" />
                        </div>
                        <p>Joggers</p>
                    </div>
                    <div className="tab" key={7}>
                        <div className="ImageContainer">
                            <img src={tab5} alt="" />
                        </div>
                        <p>Shorts</p>
                    </div>

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
