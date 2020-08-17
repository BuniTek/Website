/* eslint-disable react/jsx-props-no-spreading */
import React from "react"
import Slick from "react-slick"

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
    
     {/*<h2 className="testimonies__title">What Others Think</h2>*/}
      <div className="testimonies__slider">
        <Slick {...settings}>
          <Testimony
            avatar="https://image.freepik.com/free-vector/young-man-avatar-cartoon-character-profile-picture_18591-55058.jpg"
            author="Zawadi"
            text="I was not able to discover my passion through BuniTek, but also I relised my problem-solving ability. Their hands-on courses are fun and offers an opportunity to learn technology that apply to our daily lives "
            country="Kenya"
          />
          <Testimony
            avatar="https://em.wattpad.com/635b7f9bbbae78567749bfb38695c59f7385f4ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f376e5f544f4643485a626d386e513d3d2d3737333036383637322e31356262393563616165653739376637363438333036353938352e6a7067?s=fit&w=720&h=720"
            author="Clementine"
            text="Before starting BuniTek courses, I had always felt technology wasn’t for me. A month down the lane, I am a proficient web developer and have built my mom a small website for her clothing business. 
I want to study Software Engineering at the university, a course I previously didn’t even know existed."
            country="Rwanda"          

          />
        </Slick>
      </div>
    </div>
  )
}

export default Testimonies
