import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import './sidebar.scss';

const Sidebar = ({ open, setOpen }) => (
  <>
    <div className={`sidebar ${open ? 'open' : ''}`}>
      <button
        type="button"
        className="close"
        onClick={() => setOpen(!open)}
      >
        <div className="cross">
          <div className="line" />
          <div className="line" />
        </div>
      </button>

      <ul className="sidebar__menu">
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/">Contact Us</Link>
        </li>
      </ul>
    </div>
  </>
);

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default Sidebar;
