/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slick from 'react-slick';

import Testimony from './Testimony';

import nextArrowIcon from '../../assets/images/angle-right-solid.svg';
import prevArrowIcon from '../../assets/images/angle-left-solid.svg';
import './index.scss';

const Testimonies = () => {
  const settings = {
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 3000,
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
      <h2 className="testimonies__title">What Others Think</h2>
      <div className="testimonies__slider">
        <Slick {...settings}>
          <Testimony
            avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            author="Elie"
            text="Before starting Africa-I, I had always felt technology wasn’t for me. A month down the lane, I am a proficient web developer and have built my mom a small website for her clothing business. 
I want to study Software Engineering at the university, a course I previously didn’t even know existed."
          />
        </Slick>

      </div>
    </div>
  );
};

export default Testimonies;
