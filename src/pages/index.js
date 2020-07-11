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
        <div className="home__overlay">
          <div
            className="home__overlay--2"
            style={{
              backgroundImage: `url(${Overlay2Bg})`,
            }}
          />
        </div>
        <div className="home__news">
          <h1 className="home__news--title">Read more about what's coming</h1>

          <div className="home__news--grid">
            <NewsCard
              title="Summer Hackathon 2020"
              description="JC Billy, Alain Eros Prestige are organizing a dope stuff the next summer guys. Just be ready"
              link="/blog"
            />
            <Line />
            <NewsCard
              title="Summer Hackathon 2020"
              description="JC Billy, Alain Eros Prestige are organizing a dope stuff the next summer guys. Just be ready"
              link="/blog"
            />
          </div>
          <div className="home__newsletter">
            <Form onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Enter your email"
              />
              <Button
                type="submit"
                style={{
                  width: 160,

                  height: 40,
                  marginTop: -5,
                  backgroundColor: '#363333',
                  display: 'grid',
                  placeContent: 'center',
                }}
              >
              Subscribe
              </Button>
            </Form>
          </div>
        </div>
         <div className="home__overlay">
          <div
            className="home__overlay--3"
            style={{
              backgroundImage: `url(${Overlay3Bg})`,
            }}
          />
        </div>
        <div className="home__topics">
          <div className="home__topics--container">
            <h1 className="home__topics--title">Some of the things we offer</h1>
            <div className="home__topics--grid">
              <Topic caption="testing" link="/testing" />
              <Topic caption="courses" link="/courses" />
              <Topic caption="electronics" link="/electronics" />
              <Topic caption="school clubs" link="/school-clubs" />
              <Topic caption="science" link="/science" />
            </div>
          </div>
        </div>
        <div className="home__overlay">
          <div
            className="home__overlay--4"
            style={{
              backgroundImage: `url(${Overlay4Bg})`,
            }}
          />
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
