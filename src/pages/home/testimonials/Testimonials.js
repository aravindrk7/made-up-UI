import React from 'react';
import './Testimonials.css';
import model9 from './../../../assets/images/models/model9.jpg'
import Slider from '../../../components/slider/Slider';

import testimonialsData from './../../../data/testimonials.json';
import TestimonialsItem from './TestimonialsItem';

function Testimonials() {
    return (
        <div className="testimonials">
            <h1>Testimonials</h1>
            <Slider scrollDistance={200}>
                <main>
                    {testimonialsData?.map(testimonial => (
                        <TestimonialsItem
                            key={testimonial.id}
                            image={model9}
                            name={testimonial.name}
                            quote={testimonial.quote}
                            rating={testimonial.rating}
                        />
                    ))}
                </main>
            </Slider>
        </div>

    )
}

export default Testimonials;
