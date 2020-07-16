/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { graphql, navigate } from 'gatsby';
import { useDispatch } from 'react-redux';
import Typed from 'react-typed';
import Img from 'gatsby-image';
import Layout from '../layouts/layout';
import SEO from '../components/seo';
import Button from '../components/Button';
import NewsCard from '../components/News';
import Form from '../components/Form';
import Input from '../components/Form/Input';
import Topic from '../components/Topic';
import Testimonies from '../components/Testimonies';
import Line from '../components/VerticalLine';
import { setLogoUrl, setFooterVisible } from '../redux/actions';

import homeBanner from '../assets/images/undraw_web_developer_p3e5.svg';

import lightLogo from '../assets/images/africai.png';
import background from '../assets/images/home_top-left.svg';
import Overlay2Bg from '../assets/images/home_bottom-middle.svg';
import Overlay3Bg from '../assets/images/home-middle_second.png';
import Overlay4Bg from '../assets/images/home-middle_third.png';
import ImgSecond from '../assets/images/IMG_2390.jpg';
import IllustrationThird from '../assets/images/undraw_having_fun_iais.svg';
import IllustrationFourth from '../assets/images/undraw_researching_22gp.svg';
import point from '../assets/images/point.svg';
import plus from '../assets/images/plus-solid-1.png';
import homeMiddleThird from '../assets/images/homeMiddleThird.svg';

import '../assets/styles/pages/home.scss';

const IndexPage = ({ data: { videoPreview } }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setLogoUrl({
        logo: lightLogo,
      }),
    );
    setFooterVisible({
      visible: true,
    })(dispatch);
  }, []);

  return (
    <Layout>
      <SEO title="Home" />

      <div className="home">
          <div className="home__overlay">
            <div
              className="home__overlay--1"
              style={{
                backgroundImage: `url(${background})`,
              }}
            />
          </div>

          <div className="home__container">
            <div className="home__grid">
              <div className="home__grid--item">
                <Typed
                  className="home__typed"
                  strings={["Africa-Imagination", "Africa-Invent", "Africa-Intelligence", "Africa-Impact", "Africa-I can", "Africa-I"]}
                  typeSpeed={40}
                />
                <span>
                  <Button type="primary" onClick={(e) => {
                    e.preventDefault();
                    navigate('/signup/');
                }}>
                      Get involved
                    </Button>
                </span>
              </div>
              <div className="home__grid--item">
                <Img fluid={videoPreview.childImageSharp.fluid} alt="Hero" className="hero__image" />
              </div>
            </div>
          </div>
          <div className="home__second">
            <div className="home__second__left">
              <div className="home__second__left--item">
                <div
                  className="point"
                  style={{
                    backgroundImage: `url(${point})`,
                  }}
                />
              <p>Give every young person a glimpse of what's possible</p>
              </div>
              <div className="home__second__left--item">
                 <div
                  className="point"
                  style={{
                    backgroundImage: `url(${point})`,
                  }}
                />
                <p>Give you a chance to interact with and create technology</p>
              </div>
            </div>
            <Line />
            <div className="home__second__right">
              <div className="home__second__right--image"
                style={{
                    backgroundImage: `url(${ImgSecond})`,
                  }}
              />
            </div>
          </div>  
        </div>
        <div className="home__overlay">
          <div
            className="home__overlay--3"
            style={{
              backgroundImage: `url(${homeMiddleThird})`,
            }}
          />
        </div>
        <div className="home__third">
          <div className="home__third__left">

            <h1 className="home__third__left--title">A project for students by the students</h1>
            <div className="home__third__left--item">
               <div
                className="point"
                style={{
                  backgroundImage: `url(${point})`,
                }}
              />
              <p>An EdTech Venture by STEM students and young draduates from various universities across the world.</p>
            </div>
            <div className="home__third__left--item">
               <div
                className="point"
                style={{
                  backgroundImage: `url(${point})`,
                }}
              />
              <p>Commited to introducing every young African to technology in a relatable way.</p>
            </div>

            <h1 className="home__third__left--title">Technology Doesn't Have To sound Exotic</h1>
            <div className="home__third__left--item">
              <div
                className="point"
                style={{
                  backgroundImage: `url(${point})`,
                }}
              />
              <p>Technology relates to our everyday life, wherever we are from.</p>
            </div>
            <div className="home__third__left--item">
               <div
                className="point"
                style={{
                  backgroundImage: `url(${point})`,
                }}
              />
              <p>We are offering you simplified, carefully selected, hands on and contextualised technology course.</p>
            </div>
          </div>

          <div className="home__third__right">
            <div className="home__third__right--image"
              style={{
                  backgroundImage: `url(${IllustrationThird})`,
                }}
            />
          </div>

        </div>

        <div className="home__fourth">
          <div className="home__fourth__left">

            <div className="home__fourth__left--item">
               <div className="home__fourth__left--item--header">
                  <div
                    className="plus"
                    style={{
                      backgroundImage: `url(${plus})`,
                    }}
                  />
                  <h2>Learn at your convinience</h2>
               </div>
               <div className="home__fourth__left--item--body">
                  <p>We have various innovation ways to support your learning regardless of you circumstances.</p>
               </div>
            </div>
            <div className="home__fourth__left--item">
               <div className="home__fourth__left--item--header">
                  <div
                    className="plus"
                    style={{
                      backgroundImage: `url(${plus})`,
                    }}
                  />
                  <h2>Learn from your future selves</h2>
               </div>
               <div className="home__fourth__left--item--body">
                  <p>An EdTech Venture by STEM students and young draduates from various universities across the world.</p>
               </div>
            </div>
            <div className="home__fourth__left--item">
               <div className="home__fourth__left--item--header">
                  <div
                    className="plus"
                    style={{
                      backgroundImage: `url(${plus})`,
                    }}
                  />
                  <h2>Learn to imagine and create</h2>
               </div>
               <div className="home__fourth__left--item--body">
                  <p>An EdTech Venture by STEM students and young draduates from various universities across the world.</p>
               </div>
            </div>

          </div>

          <div className="home__fourth__right">
            <div className="home__fourth__right--image"
              style={{
                  backgroundImage: `url(${IllustrationFourth})`,
                }}
            />
          </div>

        </div>

        <div className="home__topics">
          <div className="home__topics--container">
            <h1 className="home__topics--title">Our courses</h1>
            <div className="home__topics--grid">
              <Topic caption="testing" link="/testing" />
              <Topic caption="courses" link="/courses" />
              <Topic caption="electronics" link="/electronics" />
              <Topic caption="school clubs" link="/school-clubs" />
              <Topic caption="science" link="/science" />
            </div>
          </div>
        </div>
        
      <Testimonies />

    </Layout>
  );
};

export const query = graphql`
{
  videoPreview: file(
    relativePath: {
      eq: "video-preview.png"
    }
  ) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;

export default IndexPage;
