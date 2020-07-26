/* eslint-disable jsx-a11y/control-has-associated-label */
import React from "react"
import { Link } from "gatsby"
import { useSelector } from "react-redux"
import "./index.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import logo from '../../assets/images/BuniTek.png';


const Footer = () => {
  const footerVisible = useSelector(state => state.ui.footerVisible)
  return (
    footerVisible && (
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__subcontainer">
            <Link to="/" className="brand-logo">
              <img src={logo} alt="Africa I" className="footer-logo" />
            </Link>
            <span className="footer-phrase">Our mission is to introduce high school students to technology 
            concepts and to inspire them to explore and use their imagination to 
            solve local problems.</span>
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
              <a href="https://fb.me/buniteki/" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
            </li>
            <li>
              <a href="https://twitter.com/buni_tek/" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
            </li>
            <li>
              <a href="https://www.instagram.com/buni_tek/" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
            </li>
            <li>
              <a href="https://www.youtube.com/channel/UCWDD2ng7wAvEGgsZrnRDBcA/" target="_blank"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
            </li>
          </ul>
          </div>
        </div>

      
      <hr className="footer__divider" />
      <div className="footer__container--low">
        <a href="/"><span>@Copyright BuniTek 2020</span></a>
        <a href="/"><span>BuniTek</span></a>
        <a href="/"><span>Terms and conditions</span></a>
        <a href="/"><span>Emergency policy</span></a>
  
      </div>
    </footer>)
 )
}

export default Footer
