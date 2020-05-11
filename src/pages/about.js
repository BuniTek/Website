import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Team from '../components/Team';
import Layout from '../layouts/layout';
import SEO from '../components/seo';
import AboutMore from '../components/About/More';
import { setLogoUrl } from '../redux/actions';

import '../assets/styles/pages/about.scss';
import logo from '../assets/images/africai_dark.png';

const AboutUs = () => {
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
