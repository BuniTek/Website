import React, { useEffect } from 'react';
import Team from '../components/Team';
import Layout from '../layouts/layout';
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
          <div className="about__intro" id="more">
            <h3 className="about__heading">Changing The Ordinary </h3>
            <p className="about__description">
            At AfricaI, We are working to create a movement that will inspire and introduce cutting-edge technologies to young people and demonstrate the potential of those technologies through hands-on, fun and simple scheme. We aim to inspire young people to start solving local problems at a young age and to pursue technology-related fields. We envisage to create a community of confident technologists, creative thinkers, and thoughtful learners of our increasingly tech-enabled future.
proprietary curriculum curated to be hands-on, fun and Africa specific; through clubs in various schools across Africa at which the community will start; seasonal boot-camps; private tutoring; hackathons and challenges; and Africa-I invent lab which will be creating education-empowering tools to be shared with education institutions.

            </p>
          </div>

          <div className="about__intro" id="more">
            <h3 className="about__heading"> Africa-specific Services </h3>
            <p className="about__description">
              We developed proprietary curriculum curated to be hands-on, fun and Africa specific; through clubs in various schools across Africa at which the community will start; seasonal boot-camps; private tutoring; hackathons and challenges; and Africa-I invent lab which will be creating education-empowering tools to be shared with education institutions.

            </p>
          </div>

          


          <div className="about__intro">
            <h3 className="about__heading">Why African-I</h3>
            <p className="about__description">
            We realised that most young persons do not get a chance to discover or explore their passion in technology and to experiment on its possibilities since a young age; an occurrence that has made technology remain an alien concept to most of our young people in Africa.
-   	We realise that as industry 4.0 approaches, over 25% of jobs will come from the technology sector. Economic advancements will also be fully anchored on this sector. Therefore, if we are to create enough jobs for our growing working population, we need as many people as possible gaining tech mastery through specialising in areas that they love – this can only happen if they are given a fair chance to sample and experience and imagine what’s possible.
            </p>
          </div>
          <div className="about__intro" id="more">
            <h3 className="about__heading">Who We Are</h3>
            <p className="about__description">
              proprietary curriculum curated to be hands-on, fun and Africa specific; through clubs in various schools across Africa at which the community will start; seasonal boot-camps; private tutoring; hackathons and challenges; and Africa-I invent lab which will be creating education-empowering tools to be shared with education institutions.
              We are a group of young, African, tech-passionate folks with interdispinary backgrounds. We have assorted those rich backgrounds to create teams that produce high quality resources that will make change the course of African in technology realm.
              We also work with.
            </p>
          </div>

          <div className="about__intro" id="more">
            <h3 className="about__heading">Our partners Logo</h3>
            <ul>
              <li>Edinburgh Innovations - https://edinburgh-innovations.ed.ac.uk/</li>
              <li>Embeded and Robotics Society (Ears) - http://ears-edi.com/</li>
              <li>Turing Trust - https://turingtrust.co.uk/</li>
            </ul>
          </div>
          <Team />
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
