import React, { useEffect } from 'react';
import Team from '../components/Team';
import Layout from '../components/layout';
import SEO from '../components/seo';
import AboutMore from '../components/About/More';

import '../assets/styles/pages/about.scss';

const AboutUs = () => {
  useEffect(() => {
    const body = document.querySelector('body');
    body.classList.remove('home');
  }, []);
  return (
    <Layout>
      <SEO title="About Us" />
      <div className="about">
        <div className="about__shadow" />
        <div className="about__container">
          <AboutMore />
          <div className="about__intro">
            <h3 className="about__heading">Africa I</h3>
            <p className="about__description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Animi corrupti minus voluptas, hic accusamus sapiente a
              quod et? Dolor nam corrupti totam consequatur harum.
              Debitis quos iusto similique ad sint. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Animi corrupti
              minus voluptas, hic accusamus sapiente a quod et? Dolor
              nam corrupti totam consequatur harum. Debitis quos iusto
              similique ad sint. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Animi corrupti minus voluptas, hic
              accusamus sapiente a quod et? Dolor nam corrupti totam
              consequatur harum. Debitis quos iusto similique ad sint.
            </p>
          </div>
          <Team />
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
