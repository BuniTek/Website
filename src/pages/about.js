import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useDispatch } from 'react-redux';
import Img from 'gatsby-image';

import Team from '../components/Team';
import Layout from '../layouts/layout';
import SEO from '../components/seo';
import InfoCard from '../components/InfoCard';
import Line from '../components/VerticalLine';
import { setLogoUrl, setFooterVisible } from '../redux/actions';

import '../assets/styles/pages/about.scss';
import logo from '../assets/images/africai_dark.png';
import quoteImage from '../assets/images/quote-right-solid.svg';


import edinburghLogo from '../assets/images/edinburgh.png';
import msLogo from '../assets/images/ms.png';
import ibmLogo from '../assets/images/ibm.png';
import armLogo from '../assets/images/arm.png';


const AboutUs = ({ data: { storyImage, schoolImage, missionImage } }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.remove('home');

    dispatch(setLogoUrl({
      logo,
    }));
    setFooterVisible({ visible: true })(dispatch);
  }, []);


  return (
    <Layout>
      <SEO title="About Us" />
      <div className="about">
        <div className="about__container">


          <section>
            <div className="about__first-section">
              <div className="first-section__image">
                <Img fluid={storyImage.childImageSharp.fluid} alt="Our story" style={{ border: '2px solid black' }} />
              </div>
              <div className="section__content">
                <div className="about__shadow rounded absolute-right" />
                <div className="section__sub-content">
                  <div className="section__title--container">
                    <span className="section__title">Who Are WE ?</span>
                    <img src={quoteImage} alt="quote" />
                  </div>
                  <div>
                    <p>
                      Africa-I is a digital literacy venture  working to createa movement
                      that will inspire and introduce new technology to young people and demonstrate
                      its potential through hands-on and cutting-edge technologies
                    </p>
                    <p>
                      We are creating a community of confident technologists, creative thinkers,
                      and thoughtful learners of our increasingly tech-enabled future
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="about__second-section-container">
            <div className="about__second-section">
              <div className="section__content">
                <div className="about__shadow circle absolute-left" />
                <div className="section__sub-content">
                  <div className="section__title--container">

                    <img src={quoteImage} alt="quote" className="quote__heading-rotated" />
                    <span className="section__title">Our Mission ?</span>
                  </div>
                  <div className="section__content-description " style={{ paddingLeft: 90, paddingTop: 60 }}>
                    <p>
                      To inspire, encourage and give African high school students a fair
                      shot at discovering technology potential and provide ground for them
                      to explore and employ their skills to solve problems and invent the future.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <Img fluid={storyImage.childImageSharp.fluid} alt="Our story" style={{ border: '2px solid black' }} />
              </div>
            </div>
          </section>


          <div className="about__third-section-container">
            <div className="about__third-section">
              <div className="section__title--container" style={{ textAlign: 'center' }}>
                <span className="section__title">Why Are We Doing This?</span>
                <img src={quoteImage} alt="quote" />
              </div>
              <div className="about__flex--description flex-right">
                <div className="about__shadow rounded absolute-right" />

                <div>
                  <ol className="imglist">

                    <li>
                      <span>
                        To give students a chance to discover or explore their passion in technology
                        and to experiment on its possibilities at a younger age so that it doesn't feel
                        like an exotic concept.
                      </span>
                    </li>
                    <li>
                      <span>
                        To enable you africans to optimise on the benefits of industry 4.0 during which over
                        25% of jobs will come from the technology sector.
                      </span>
                    </li>
                  </ol>

                </div>
              </div>
            </div>
          </div>


          <section className="about__fourth--section-container">

            <div className="about__fourth--section">
              <div className="section__title--container" style={{ textAlign: 'center' }}>
                <img src={quoteImage} className="quote__heading-rotated" alt="quote" />
                <span className="section__title">About Our Courses</span>
              </div>

              <div className="section__three-grid">
                <div className="section__grid-item">
                  <InfoCard
                    title="Simplified and Insightful"
                    description="Our courses are simple and tought at a higher level
                   focusing on introducing concepts while providing the bigger picture rather than
                   the fine,low level details
                   "
                  />
                  <InfoCard
                    title="Online Courses"
                    description="We wil offer you the material, guidance and support to satisy
                    your tech curiosity online throgh a series of lectures, demonstrations and challenges
                    with immediate feedback.
                   "
                  />
                </div>
                <div className="section__grid-line-divider"><Line color="black" /></div>
                <div className="section__grid-item">
                  <InfoCard
                    title="Tailer Made For You"
                    description="Our courses are simple and tought at a higher level
                   focusing on introducing concepts while providing the bigger picture rather than
                   the fine,low level details
                   "
                  />
                  <InfoCard
                    title="Online Courses"
                    description="Our courses are simple and tought at a higher level
                   focusing on introducing concepts while providing the bigger picture rather than
                   the fine,low level details
                   "
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="about__fifth--section-container">

            <div className="about__fifth--section">
              <div className="section__title--container" style={{ textAlign: 'center' }}>

                <span className="section__title">Content Delivery</span>
                <img src={quoteImage} alt="quote" />
              </div>

              <div className="section__three-grid">
                <div className="section__grid-item">
                  <InfoCard
                    title="Simplified and Insightful"
                    description="Our courses are simple and tought at a higher level
                   focusing on introducing concepts while providing the bigger picture rather than
                   the fine,low level details
                   "
                  />
                  <InfoCard
                    title="Simplified and Insightful"
                    description="Our courses are simple and tought at a higher level
                   focusing on introducing concepts while providing the bigger picture rather than
                   the fine,low level details
                   "
                  />
                </div>
                <div className="section__grid-line-divider"><Line color="black" /></div>
                <div className="section__grid-item">
                  <InfoCard
                    title="Simplified and Insightful"
                    description="Our courses are simple and tought at a higher level
                   focusing on introducing concepts while providing the bigger picture rather than
                   the fine,low level details
                   "
                  />
                  <InfoCard
                    title="Simplified and Insightful"
                    description="Our courses are simple and tought at a higher level
                   focusing on introducing concepts while providing the bigger picture rather than
                   the fine,low level details
                   "
                  />
                </div>
              </div>
            </div>
          </section>


        </div>
        <Team />
        <div className="partners">
          <div className="partners__container">
            <h1 className="partners__title">They will trust us</h1>
            <div className="partners__grid">
              <img className="partners__grid--item" src={edinburghLogo} />
              <img className="partners__grid--item" src={msLogo} />
              <img className="partners__grid--item" src={armLogo} />
              <img className="partners__grid--item" src={ibmLogo} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
query {
  storyImage: file(relativePath: { eq: "arduino.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }

  schoolImage: file(relativePath: { eq: "school.png" }){
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }

  missionImage: file(relativePath : { eq: "coding.png" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;


export default AboutUs;
