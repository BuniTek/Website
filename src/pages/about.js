import React, { useEffect } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useDispatch } from 'react-redux';
import Img from 'gatsby-image';
import Team from '../components/Team';
import Layout from '../layouts/layout';
import SEO from '../components/seo';
import Link from '../components/Link';
import { setLogoUrl } from '../redux/actions';

import '../assets/styles/pages/about.scss';
import logo from '../assets/images/africai_dark.png';
import quoteImage from '../assets/images/quote-right-solid.svg';
import edinburghLogo from '../assets/images/edinburgh.png';
import msLogo from '../assets/images/ms.png';
import ibmLogo from '../assets/images/ibm.png';
import armLogo from '../assets/images/arm.png';

const AboutUs = ({ data: { storyImage, schoolImage, missionImage} }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.remove('home');

    dispatch(setLogoUrl({
      logo,
    }));
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
                <h1>The story behind</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              </div>
            </div>
          </div>
          <div className="about__community">
            <img src={quoteImage} className="about__community--quote" />
            <div className="about__flex">
              <div className="about__flex--description flex-left">
                <div className="about__shadow circle absolute-left" />
                <h1>Community we want to build</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                <Link to="/signup">Join the community now ></Link>
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
                <h1>Our Mission in short words</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              </div>
            </div>
          </div>
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
