import React from 'react';
import './Collections.css';

import model6 from './../../../assets/images/models/model6.jpg'
import model7 from './../../../assets/images/models/model7.jpg'

import Slider from '../../../components/slider/Slider';
import CollectionsItem from './CollectionsItem';

import collectionsData from '../../../data/collections.json'

function Collections() {
    return (
        <div className="collections">
            <div className="collections__heading">
                <h1>Latest Collections</h1>
            </div>
            <Slider scrollDistance={200}>
                <main>
                    {collectionsData?.map(collection => (
                        <CollectionsItem
                            key={collection.id}
                            image={collection.id % 2 === 0 ? model6 : model7}
                            name={collection.name}
                            price={collection.price}
                            currency={'₹'} />
                    ))}
                </main>
            </Slider>
        </div>
    )
}

export default Collections;
