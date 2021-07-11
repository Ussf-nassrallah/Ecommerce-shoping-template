import React from 'react';
import Navbar from '../Layout/Navbar.js';
import Categories from '../Components/Categories';
import Sidebar from '../Components/Sidebar';
import SelectDropdown from '../Components/SelectDropdown';
import { AiOutlineBars } from 'react-icons/ai';
import { RiLayoutGridFill } from 'react-icons/ri';
import Products from '../Components/Products';
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

            <div className="pr">
              <div className="flex">
                <div className="pr-f__btns">
                  <SelectDropdown defaultOpt="Useless first" />
                  <SelectDropdown defaultOpt="Condition" />
                  <SelectDropdown defaultOpt="Delivery options" />
                </div>
                <div className="flex-f__btns">
                  <ul>
                    <li>Show all</li>
                    <li className="active">Auction</li>
                    <li>Buy now</li>
                  </ul>
                  <ul>
                    <li><AiOutlineBars className="gridIcon" /></li>
                    <li className="active"><RiLayoutGridFill className="gridIcon" /></li>
                  </ul>
                </div>
              </div>

              <ul className="pr-f__links">
                <li><a className="active" href="/">Related</a></li>
                <li><a href="/">worldwide shipping</a></li>
                <li><a href="/">under $50</a></li>
                <li><a href="/">kitten</a></li>
                <li><a href="/">plastic plugs</a></li>
                <li><a href="/">pucker shoes</a></li>
                <li><a href="/">vintage typewriter</a></li>
              </ul>

              <Products />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Homepage
