
import React from 'react';
import PropTypes from 'prop-types';

import 'materialize-css/dist/css/materialize.min.css';
import 'semantic-ui-css/semantic.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import 'antd/dist/antd.css';
// import { useStaticQuery, graphql } from 'gatsby';

import SiteHeader from '../components/Header/index';
import Footer from '../components/Footer/index';
import './layout.css';

library.add(fab, faCoffee);

const Layout = ({ children }) => (
  <>
    <div>
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
