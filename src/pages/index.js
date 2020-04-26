import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Button from '../components/Button';

import homeBanner from '../assets/images/undraw_dev_productivity_umsq.png';
import '../assets/styles/pages/home.scss';
import background from '../assets/images/home_top-left.svg';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home">
      <div className="home__container">
        <div
          className="home__overlay--1"
          style={{
            backgroundColor: background,
          }}
        />
        <div className="home__overlay--2" />
        <div className="home__grid">

          <div className="home__grid--item">
            <h1>Let &apos; s create our own future together.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptas adipisci quidem consequuntur commodi
              nam maiores rem tempora repudiandae soluta nobis!
            </p>
            <span>
              <Button type="primary" onClick={() => console.log('Clicked')}>Get involved</Button>
            </span>
          </div>
          <div className="home__grid--item">
            <img src={homeBanner} alt="Hero" className="hero__image" />
          </div>
        </div>

      </div>
    </div>
  </Layout>
);

export default IndexPage;
