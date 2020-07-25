import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useDispatch } from 'react-redux';
import Img from 'gatsby-image';
import Team from '../components/Team';
import Layout from '../layouts/layout';
import SEO from '../components/seo';
import Link from '../components/Link';
import { setLogoUrl, setFooterVisible } from '../redux/actions';

import '../assets/styles/pages/about.scss';
import logo from '../assets/images/BuniTek_dark.png';
import quoteImage from '../assets/images/quote-right-solid.svg';
import earsLogo from '../assets/images/partner-ears.png';
import cgiLogo from '../assets/images/partner-cgi.png';

const AboutUs = ({ data: { storyImage, schoolImage, missionImage} }) => {
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
          <div className="about__story">
          <img src={quoteImage} className="about__story--quote" />
            <div className="about__flex">
              <div className="about__flex--image">
                <Img fluid={storyImage.childImageSharp.fluid} alt="Our story" />
              </div>
              <div className="about__flex--description flex-right">
                <div className="about__shadow rounded absolute-right" />
                <h1>A Purpose-Driven Company</h1>
                <p>We belive everyone can learn tech and can use it to create, and impact his/her community</p>
                <p>We create and deliver hands-On, fun, future-relavant tech courses</p>
              </div>
            </div>
          </div>
          <div className="about__community">
            <img src={quoteImage} className="about__community--quote" />
            <div className="about__flex">
              <div className="about__flex--description flex-left">
                <div className="about__shadow circle absolute-left" />
                <h1>Africa-specific Services</h1>
                <p> 
                We developed proprietary curriculum curated to be hands-on, fun and Africa speci c; through clubs in various schools across Africa at which A Purpose-Driven Company Create, offer, skills, simple, fun, movement, technology, future relavant Learn more > Africa speci c; through clubs in various schools across Africa at which the community will start; seasonal boot-camps; private tutoring; hackathons and challenges; and BuniTek invent lab which will be creating education-empowering tools to be shared with education institutions.
                </p>
                <Link to="/contact">Contact us &gt;</Link>
              </div>
              <div className="about__flex--image">
                <Img fluid={schoolImage.childImageSharp.fluid} alt="Our Community" />
              </div>
            </div>
          </div>
          <div className="about__mission">
          <img src={quoteImage} className="about__story--quote" />
            <div className="about__flex">
              <div className="about__flex--image">
                <Img fluid={missionImage.childImageSharp.fluid} alt="Our Mission" />
              </div>
              <div className="about__flex--description flex-right">
              <div className="about__shadow rounded absolute-right" />
                <h1>Changing The Ordinary</h1>
                <p>
                At BuniTek, We are working to create a movement that will inspire and introduce cutting-edge technologies to young people and demonstrate the potential of those technologies through hands-on, fun and simple scheme. We aim to inspire young people to start solving local problems at a young age and to pursue technology-related  elds. We envisage to create a community of con dent technologists, creative thinkers, and thoughtful learners of our increasingly tech-enabled future. proprietary curriculum curated to be hands-on, fun and Africa speci c; through clubs in various schools across Africa at which the community will start; seasonal boot-camps; private tutoring; hackathons and challenges; and BuniTek invent lab which will be creating educationempowering tools to be shared with education institutions.
                </p>
              </div>
            </div>
          </div>
          <div className="about__community">
            <img src={quoteImage} className="about__community--quote" />
            <div className="about__flex">
              <div className="about__flex--description flex-left">
                <div className="about__shadow circle absolute-left" />
                <h1>Why BuniTek?</h1>
                <p>
                We realised that most young persons do not get a chance to discover or explore their passion in technology and to experiment on its possibilities since a young age; an occurrence that has made technology remain an alien concept to most of our young people in Africa. - We realise that as industry 4.0 approaches, over 25% of jobs will come from the technology sector. Economic advancements will also be fully anchored on this sector. Therefore, if we are to create enough jobs for our growing working population, we need as many people as possible gaining tech mastery through specialising in areas that they love – this can only happen if they are given a fair chance to sample and experience and imagine what’s possible.
                </p>
              </div>
              <div className="about__flex--image">
                <Img fluid={schoolImage.childImageSharp.fluid} alt="Our Community" />
              </div>
            </div>
          </div>
        </div>
        <Team />
        <div className="partners">
          <div className="partners__container">
            <h1 className="partners__title">They will trust us</h1>
            <div className="partners__grid">
              <img className="partners__grid--item" src="https://800664.smushcdn.com/1566666/wp-content/uploads/2018/09/EI-Top-Logo.png?size=500x300" alt="Edinburgh Innovations"/>
              <img className="partners__grid--item" src={earsLogo} alt="Embedded and Robotics Society"/>
              <img className="partners__grid--item" src="https://theturingtrust.files.wordpress.com/2017/08/tt-logo-new-final-300dpi.png?w=500" alt="Turing Trust"/>
              <img className="partners__grid--item" src={cgiLogo} />
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
