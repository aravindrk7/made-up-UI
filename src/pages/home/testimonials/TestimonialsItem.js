import React from 'react';
import './Testimonials.css';
import StarIcon from '../../../assets/SVG/StarIcon';

function TestimonialsItem(props) {
    return (
        <div className="testimonialsItem">
            <img src={props.image} alt={props.name} />
            <div>
                <p className="testimonialsItem__name">{props.name}</p>
                <div className="testimonialsItem__rating">
                    {[...Array(props.rating)].map((num, index) => (
                        <StarIcon key={index} />
                    ))}
                </div>
            </div>
            <p className="testimonialsItem__quote">
                {props.quote}
            </p>
        </div>
    )
}

export default TestimonialsItem;
