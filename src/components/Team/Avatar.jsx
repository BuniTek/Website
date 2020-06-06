import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.scss';

const Avatar = ({ url }) => {
  console.log('URL', url);
  return (
    <>
      <img src={url} size={64} className="team__avatar" />
    </>
  );
  
}
Avatar.propTypes = {
  url: PropTypes.string,
};

Avatar.defaultProps = {
  url:
    '../../assets/images/user-profile.png',
};

export default Avatar;
