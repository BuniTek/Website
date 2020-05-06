/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link } from 'gatsby';
import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../../assets/images/africai.png';

const Footer = () => (
  <footer>
    <div className="flex_container">
      <div className="col">
        <img src={logo} alt="Africa I" className="footer_logo" />
      </div>
      <div className="col">
        <h4 className="sub_heading">Quick links</h4>
        <ul className="links__list">
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
      <div className="col">
        <h4 className="sub_heading">Follow us</h4>
        <ul className="inline">
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
    <hr className="footer_divider" />
    <div className="flex_low">
      <a href="/"><span>@Copyright Africai 2020</span></a>

      <a href="/"><span>Africai</span></a>
      <a href="/"><span>Terms and conditions</span></a>
      <a href="/"><span>Emergency policy</span></a>

    </div>
  </footer>
);

export default Footer;
