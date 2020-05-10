import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layouts/layout';
import SEO from '../components/seo';
import Button from '../components/Button';

import homeBanner from '../assets/images/undraw_dev_productivity_umsq.png';
import '../assets/styles/pages/home.scss';
import background from '../assets/images/home_top-left.svg';
import Overlay2Bg from '../assets/images/home_bottom-middle.svg';

const IndexPage = () => (
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
          </div>
          <div className="home__grid--item">
            <h1>Let &apos; s create our own future together.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptas adipisci quidem consequuntur commodi
              nam maiores rem tempora repudiandae soluta nobis!
            </p>
            <span>
              <Link to="/signup">
                <Button type="primary" onClick={(e) => e.preventDefault()}>Get involved</Button>
              </Link>
            </span>
          </div>
          <div className="home__grid--item">
            <img src={homeBanner} alt="Hero" className="hero__image" />
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

    </div>
    
  </Layout>
);

export default IndexPage;
