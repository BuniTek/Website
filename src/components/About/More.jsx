import React from 'react';

// Importing assets
import ArduinoImage from '../../assets/images/arduino.png';
import CodingImage from '../../assets/images/coding.png';
import SchoolImage from '../../assets/images/school.png';
import './more.scss';
import LinkAnchor from '../Link';

import aboutBg from '../../assets/images/about-us-1_middle-right.svg';

const AboutUsMore = () => (
  <div className="about__more">
    <div
      className="about__overlay--1"
      style={{
        backgroundImage: aboutBg,
      }}
    />
    <div className="about__more--grid">
      <div className="about__more--item">
        <div className="about__image image--main">
          <img src={ArduinoImage} alt="" />
        </div>
        <div className="about__image image--grid">
          <img src={CodingImage} alt="" />
          <img src={SchoolImage} alt="" />
        </div>
      </div>
      <div className="about__more--item">
        <div className="more__item--overlay" />
        <h2 className="about__more--title">AfricaI Community</h2>
        <p className="about__more--description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          aliquam nam cum earum. Ad tempore deleniti voluptate facilis
          sapiente quos.
        </p>

        <LinkAnchor to="/signup">
          Join the Community now &nbsp;
          <span>{'>'}</span>
        </LinkAnchor>
      </div>
    </div>
  </div>
);

export default AboutUsMore;
