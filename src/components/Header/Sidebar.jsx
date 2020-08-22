import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { CloseOutlined } from '@ant-design/icons';

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
          <CloseOutlined style={{
            textAlign: 'center',
            display: 'inline-block',
            fontSize: 23
          }} />
        </div>
      </button>

      <ul className="sidebar__menu">
      <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/courses">Courses</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/blog">Posts</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
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
