/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import 'materialize-css/dist/css/materialize.min.css';
import 'semantic-ui-css/semantic.min.css';
// import { useStaticQuery, graphql } from 'gatsby';

import SiteHeader from './Header/index';
import Footer from './Footer/index';
import './app.scss';

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
