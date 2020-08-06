/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import Slick from "react-slick"
import DanielsAvatar from "../../assets/images/about-image2.jpg"

import Testimony from "./Testimony"
import "./index.scss"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#363333",borderRadius:"100%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#363333",borderRadius:"100%" }}
      onClick={onClick}
    />
  );
}


const Testimonies = () => {
  const settings = {
    infinite: true,
    fade: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 8000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div className="testimonies">
      <h2 className="testimonies__title">What Others Think</h2>
      <div className="testimonies__slider">
        <Slick {...settings}>
          <Testimony
            avatar={DanielsAvatar}
            author="Daniel"
            text="Before starting Africa-I, I had always felt technology wasn’t for me. A month down the lane, I am a proficient web developer and have built my mom a small website for her clothing business. 
I want to study Software Engineering at the university, a course I previously didn’t even know existed."
            country="Kenya"
          />
          <Testimony
            avatar={DanielsAvatar}
            author="Clementine"
            text="Before starting Africa-I, I had always felt technology wasn’t for me. A month down the lane, I am a proficient web developer and have built my mom a small website for her clothing business. 
I want to study Software Engineering at the university, a course I previously didn’t even know existed."
            country="Unknown"          

          />
        </Slick>
      </div>
    </div>
  )
}

export default Testimonies
