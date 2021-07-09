import React from 'react';
import Navbar from '../Layout/Navbar.js';
import Categories from '../Components/Categories';
import '../styles/pages/Homepage.scss';

const Homepage = () => {
  return (
    <div className="home">
      {/* Header */}
      <header>
        <Navbar />
      </header>
      
      {/* Categories */}
      <section>
        <Categories />
      </section>
    </div>
  )
}

export default Homepage
