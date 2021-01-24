import React from 'react';
import './Home.css';
import model2 from './../../assets/images/models/model2.jpg'
import model3 from './../../assets/images/models/model3.jpg'
import model4 from './../../assets/images/models/model4.jpg'
import model5 from './../../assets/images/models/model5.jpg'

function Gallery() {
    return (
        <div className="home__gallery">
            <div className="home__photo1 photo">
                <img src={model2} alt="" />
                <div className="home__galleryInfo">
                    <p>Clothes that <span>respire</span> </p>
                    <p>for men who <span>aspire</span> </p>
                    <button>Browse Collections</button>
                </div>
            </div>
            <div className="home__photo2 photo" >
                <img src={model3} alt="" />
                <div className="home__galleryInfo">
                    <p><span>Summer </span>is here and </p>
                    <p>so is our <span>Collection</span> </p>
                </div>
            </div>
            <div className="home__photo3 photo">
                <img src={model4} alt="" />
                <div className="home__galleryInfo">
                    <p><span>Wrinke-free </span>t-shirts</p>
                </div>
            </div>
            <div className="home__photo4 photo" >
                <img src={model5} alt="" />
                <div className="home__galleryInfo">
                    <p><span>Stain-free </span>denim shirts</p>
                </div>
            </div>
        </div >
    )
}

export default Gallery;
