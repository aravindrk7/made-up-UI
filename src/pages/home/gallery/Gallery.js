import React from 'react';
import './Gallery.css';
import model2 from './../../../assets/images/models/model2.jpg'
import model3 from './../../../assets/images/models/model3.jpg'
import model4 from './../../../assets/images/models/model4.jpg'
import model5 from './../../../assets/images/models/model5.jpg'

function Gallery() {
    return (
        <div className="gallery">
            <div className="gallery__photo1 gallery__photo">
                <img src={model2} alt="" />
                <div className="gallery__info">
                    <p>Clothes that <span>respire</span> </p>
                    <p>for men who <span>aspire</span> </p>
                    <button>Browse Collections</button>
                </div>
            </div>
            <div className="gallery__photo2 gallery__photo" >
                <img src={model3} alt="" />
                <div className="gallery__info">
                    <p><span>Summer </span>is here and </p>
                    <p>so is our <span>Collection</span> </p>
                </div>
            </div>
            <div className="gallery__photo3 gallery__photo">
                <img src={model4} alt="" />
                <div className="gallery__info">
                    <p><span>Wrinke-free </span>t-shirts</p>
                </div>
            </div>
            <div className="gallery__photo4 gallery__photo" >
                <img src={model5} alt="" />
                <div className="gallery__info">
                    <p><span>Stain-free </span>denim shirts</p>
                </div>
            </div>
        </div >
    )
}

export default Gallery;
