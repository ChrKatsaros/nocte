import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Collection from './components/Collection';
import Eyeglasses from './components/Eyeglasses';
import Sunglasses from './components/Sunglasses';
import CookieBanner from './components/CookieBanner';

// import του banner
import ShippingBanner from './components/ShippingBanner';

function App() {
  return (
    <BrowserRouter>
      <ShippingBanner /> {/* 🔼 Βάλε το εδώ, πάνω απ’ το Navbar */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sunglasses" element={<Sunglasses />} />
        <Route path="/eyeglasses" element={<Eyeglasses />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </BrowserRouter>
  );
}

export default App;
