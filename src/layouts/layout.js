import React from 'react';
import PropTypes from 'prop-types';
import 'materialize-css/dist/css/materialize.min.css';
import 'semantic-ui-css/semantic.min.css';
import 'antd/dist/antd.css';
import SEO from '../components/seo';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SiteHeader from '../components/Header/index';
import Footer from '../components/Footer/index';
import './layout.css';


const Layout = ({ children }) => (
  <>
    <div>
      <SEO />
      <SiteHeader />
      <main>{children}</main>
      <Footer />
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
