import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import './Avatar.scss';

const Avatar = ({ url }) => (
  <>
    <Img fluid={url.childImageSharp.fluid} className="team__avatar" />
  </>
);
Avatar.propTypes = {
  url: PropTypes.string,
};

Avatar.defaultProps = {
  url:
    '../../assets/images/user-profile.png',
};

export default Avatar;
