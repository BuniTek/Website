/* eslint-disable no-console */
import React from 'react';
import { Link } from 'gatsby';
import { Button as Btn } from 'antd';
import Layout from '../layouts/layout';
import SEO from '../components/seo';
import Button from '../components/Button';
import NewsCard from '../components/News';
import Form from '../components/Form';
import Input from '../components/Form/Input';
import Topic from '../components/Topic';

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
          <div className="home__grid--item" />
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
      <div className="home__news">
        <h1 className="home__news--title">Latest News</h1>

        <div className="home__news--grid">
          <NewsCard
            title="Summer Hackathon 2020"
            description="JC Billy, Alain Eros Prestige are organizing a dope stuff the next summer guys. Just be ready"
            link="/blog"
          />
          <NewsCard
            title="Summer Hackathon 2020"
            description="JC Billy, Alain Eros Prestige are organizing a dope stuff the next summer guys. Just be ready"
            link="/blog"
          />
        </div>
        <div className="home__newsletter">
          <Form onSubmit={(e) => e.preventDefault()}>
            <Input type="email" placeholder="Enter your email" style={{ width: '200px', marginRight: 20 }} />
            <Btn type="primary" ghost htmlType="submit">Subscribe</Btn>
          </Form>
        </div>


      </div>

      <div className="home__topics">
        <h1 className="home__topics--title">Topics</h1>
        <div className="home__topics--grid">
          <Topic
            caption="testing"
          />
          <Topic
            caption="courses"
          />
          <Topic
            caption="electronics"
          />
          <Topic
            caption="science"
          />
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
