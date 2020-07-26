import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import './index.scss';

const LinkAnchor = ({ children, to }) => (
  <Link to={to} className="link">
    {children}
  </Link>
);

LinkAnchor.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
};

LinkAnchor.defaultProps = {
  to: 'http://theBuniTek.com',
};

export default LinkAnchor;
