/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useRef } from 'react';
import styled from 'styled-components';

// Importing assets
import ArduinoImage from '../../assets/images/arduino.png';
import CodingImage from '../../assets/images/coding.png';
import SchoolImage from '../../assets/images/school.png';
import './more.scss';
import LinkAnchor from '../Link';

import aboutBg from '../../assets/images/about-us-1_middle-right.svg';


const MainImage = styled.img`
  height: 300px;
  width: 100%;
  border-radius: 8px;
  animation: zoomIn 1s ease-out;

  @keyframes zoomIn {
    0%{
      transform: translateY(10px);
    }

    100%{
      transform: translateY(0);
    }
  }
`;

const AboutUsMore = () => {
  const [state, setState] = useState({
    activeImage: ArduinoImage,
  });

  const firstImgRef = useRef();
  const secondImgRef = useRef();
  return (
    <div className="about__more">
      <div
        className="about__overlay--1"
        style={{
          backgroundImage: `url(${aboutBg})`,
        }}
      />
      <div className="about__more--grid">
        <div className="about__more--item">
          <div className="about__image image--main">
            <MainImage src={state.activeImage} alt="Main" />
          </div>
          <div className="about__image image--grid">
            <img
              src={CodingImage}
              alt=""
              onClick={(e) => {
                setState({
                  activeImage: CodingImage,
                });
                e.preventDefault();
              }}
              ref={firstImgRef}
            />
            <img
              src={SchoolImage}
              alt=""
              onClick={(e) => {
                setState({
                  activeImage: SchoolImage,
                });
                e.preventDefault();
              }}
              ref={secondImgRef}
            />
          </div>
        </div>
        <div className="about__more--item">
          <div className="more__item--overlay" />
          <h2 className="about__more--title">A Purpose-Driven Company </h2>
          <p className="about__more--description">

            Create, offer, skills, simplified, fun, movement, technology, future relavant 
          </p>

          <LinkAnchor to="/about/#more">
            Learn more &nbsp;
            <span>{'>'}</span>
          </LinkAnchor>
        </div>
      </div>
    </div>
  );
};

export default AboutUsMore;
