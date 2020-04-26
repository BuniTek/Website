import React from 'react';
import PropTypes from 'prop-types';
import { Avatar as AntAvatar } from 'antd';

import './Avatar.scss';

const Avatar = ({ url }) => (
  <>
    {url ? (
      <AntAvatar src={url} size={64} />
    ) : (
      <AntAvatar icon="user" size={64} />
    )}
  </>
);

Avatar.propTypes = {
  url: PropTypes.string,
};

Avatar.defaultProps = {
  url:
    'https://react.semantic-ui.com/images/wireframe/square-image.png',
};

export default Avatar;
