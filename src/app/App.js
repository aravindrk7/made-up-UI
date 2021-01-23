import React, { useState } from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Home from '../pages/home/Home';
import Customer from '../pages/customer/Customer';
import RouteContext from '../contexts/RouteContext';
import './App.css';

function App() {
  const [currentRoute, setCurrentRoute] = useState('home')
  return (
    <RouteContext.Provider value={{ currentRoute, setCurrentRoute }}>
      <div className="app">
        <Header />
        {currentRoute === 'home'
          ? <Home />
          : <Customer />
        }
        <Footer />
      </div>
    </RouteContext.Provider>
  );
}

export default App;
