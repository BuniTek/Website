import React, { useState } from 'react';
import { Link } from 'gatsby';
import './index.scss';
import Sidebar from './Sidebar';

import logo from '../../assets/images/logo_words.png';

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <div className="nav-wrapper__container">
            <Link to="/" className="brand-logo">
              <img src={logo} alt="Africa I" className="nav-wrapper__logo" />
            </Link>
            <ul
              id="nav-mobile"
              className="right hide-on-med-and-down"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
            <button
              className="toggle"
              onClick={() => setOpen(!open)}
              type="button"
            >
              <div className="line" />
              <div className="line" />
              <div className="line" />
            </button>
          </div>
        </div>
      </nav>
      <Sidebar open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
