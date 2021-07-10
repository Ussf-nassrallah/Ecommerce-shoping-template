import React from 'react';
import Navbar from '../Layout/Navbar.js';
import Categories from '../Components/Categories';
import Sidebar from '../Components/Sidebar';
import '../styles/pages/Homepage.scss';

const Homepage = () => {
  return (
    <div className="home">
      {/* Home-Header */}
      <header>
        <Navbar />
      </header>
      
      {/* Home-Categories */}
      <section>
        <Categories />
      </section>

      {/* Home-Body */}
      <main className="home__body">
        <div className="container">
          <div className="flex-container">
            <Sidebar />
            <h1>Products</h1>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Homepage
