import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { MdClose } from 'react-icons/md'
import '../styles/layout/Navbar.scss';

const Navbar = () => {
  return (
    <nav className="header">
      <div className="header__logo">
        {/* <img src="" alt="" className="header__logo-img" /> */}
        Choopka
      </div>

      <ul className="header__links">
        <li><a href="/">Sell on Shopka</a></li>
        <li><a href="/">Register</a></li>
      </ul>

      <div className="header__search">
        <div>
          <FiSearch className="searchIcon" />
          <input type="text" className="header__search-input" placeholder="Search" />
        </div>
        <MdClose className="closeIcon" />
      </div>

      <div className="header__catygories">
        Consumer Electronics
      </div>

      <ul className="header__userOptions">
        <li><a href="/" className="btn btn-primary">sign in</a></li>
        <li><a href="/" className="btn btn-secondary">my account</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
