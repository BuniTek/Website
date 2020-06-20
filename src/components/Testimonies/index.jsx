/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slick from 'react-slick';

import Testimony from './Testimony';

import nextArrowIcon from '../../assets/images/angle-right-solid.svg';
import prevArrowIcon from '../../assets/images/angle-left-solid.svg';
import './index.scss';

const Testimonies = () => {
  const nextArrow = (
    <button type="button" className="testimonies__control--next">
      <img src={nextArrowIcon} alt="" />
    </button>
  );

  const prevArrow = (
    <button type="button" className="testimonies__control--prev">
      <img src={prevArrowIcon} alt="" />
    </button>
  );
  const settings = {
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow,
    prevArrow,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      }
    ],
  };
  return (
    <div className="testimonies">
      <h2 className="testimonies__title">What others think</h2>
      <div className="testimonies__slider">
        <Slick {...settings}>
          <Testimony
            author="John Doe"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
          <Testimony
            avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            author="Siebel"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
          <Testimony
            avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            author="Jeremy"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
          <Testimony
            avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            author="Casey"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
          <Testimony
            avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            author="Billy"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
          <Testimony
            avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            author="Eros Alain"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
          <Testimony
            avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            author="Daniel Mutia"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
          <Testimony
            avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            author="Willy Serge"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
          <Testimony
            author="Erastus"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
          <Testimony
            avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            author="Elie"
            text="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
          />
        </Slick>

      </div>
    </div>
  );
};

export default Testimonies;
