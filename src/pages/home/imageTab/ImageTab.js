import React, { useContext } from 'react';
import './ImageTab.css';

import tab1 from './../../../assets/images/tabs/tab1.png';
import tab2 from './../../../assets/images/tabs/tab2.png';
import tab3 from './../../../assets/images/tabs/tab3.png';
import tab4 from './../../../assets/images/tabs/tab4.png';
import tab5 from './../../../assets/images/tabs/tab5.png';
import ImageTabItem from './ImageTabItem';

import RouteContext from '../../../contexts/RouteContext';

function ImageTab() {
    const { currentRoute, setCurrentRoute } = useContext(RouteContext);
    const isActiveSection = (section) => {
        return section === currentRoute;
    }
    return (
        <div className="imageTab">
            <ImageTabItem image={tab1} active={isActiveSection('home')} onClick={() => setCurrentRoute('home')} title={'For me'} id={1} />
            <ImageTabItem image={tab2} title={'Jeans'} id={2} />
            <ImageTabItem image={tab3} title={'T-Shirts'} id={3} />
            <ImageTabItem image={tab4} title={'Shirts'} id={4} />
            <ImageTabItem image={tab5} title={'Trousers'} id={5} />
            <ImageTabItem image={tab5} title={'Joggers'} id={6} />
            <ImageTabItem image={tab5} title={'Shorts'} id={7} />
        </div>
    )
}

export default ImageTab;
