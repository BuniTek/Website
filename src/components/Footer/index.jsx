/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link } from 'gatsby';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';


import logo from '../../assets/images/africai.png';

library.add(fab, faCoffee);
const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__subcontainer">
        <Link to="/" className="brand-logo">
          <img src={logo} alt="Africa I" className="footer-logo" />
        </Link> 
      </div>
      <div className="footer__subcontainer">
        <h4 className="sub-heading">Quick links</h4>
        <ul className="footer__subcontainer--list">
          <li>
            <Link to="/">Courses</Link>
          </li>
          <li>
            <Link to="/">Camp Events</Link>
          </li>
          <li>
            <Link to="/">Locations</Link>
          </li>
          <li>
            <Link to="/">News and blogs</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Help/FAQs</Link>
          </li>
        </ul>
      </div>
      <div className="footer__subcontainer">
        <h4 className="sub-heading">Follow us</h4>
        <ul className="footer__subcontainer--list inline">
          <li>
            <a href="/"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
          </li>
          <li>
            <a href="/"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
          </li>
          <li>
            <a href="/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
          </li>
          <li>
            <a href="/"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
          </li>
        </ul>
      </div>
    </div>
    <hr className="footer__divider" />
    <div className="footer__container--low">
      <a href="/"><span>@Copyright Africai 2020</span></a>

      <a href="/"><span>Africai</span></a>
      <a href="/"><span>Terms and conditions</span></a>
      <a href="/"><span>Emergency policy</span></a>

    </div>
  </footer>
);

export default Footer;
