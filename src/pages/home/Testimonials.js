import React from 'react';
import './Home.css';
import Star from '../../assets/SVG/Star';
import model9 from './../../assets/images/models/model9.jpg'
function Testimonials() {
    return (
        <div className="home__testimonials">
            <h1>Testimonials</h1>
            <div className="home__testimonialsItems">
                <div className="home__testimonialsItem">
                    <img src={model9} alt="" />
                    <div>
                        <p className="home__testimonialName">Vikas</p>
                        <div className="home__testimonialRating">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                        </div>
                    </div>
                    <p className="home__testimonialQuote">
                        Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.
               </p>
                </div>
                <div className="home__testimonialsItem">
                    <img src={model9} alt="" />
                    <div>
                        <p className="home__testimonialName">Vikas</p>
                        <div className="home__testimonialRating">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                        </div>
                    </div>
                    <p className="home__testimonialQuote">
                        Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.
               </p>
                </div>
                <div className="home__testimonialsItem">
                    <img src={model9} alt="" />
                    <div>
                        <p className="home__testimonialName">Vikas</p>
                        <div className="home__testimonialRating">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                        </div>
                    </div>
                    <p className="home__testimonialQuote">
                        Love the cloth material! So breezy and comfortable. Really durable as well. I must say the jeans I bought was worth the price.
               </p>
                </div>
            </div>
        </div>

    )
}

export default Testimonials;
