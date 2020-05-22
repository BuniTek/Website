import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Testimony = ({ avatar, author, text }) => (
  <div className="testimony__item">
    <div className="testimony__item--avatar">
      <img src={avatar} alt="" />
      <h1 className="testimony__item--author">{author}</h1>
    </div>
    <div className="testimony__item--info">
      <p className="testimony__item--text">{text}</p>
    </div>

  </div>
);

Testimony.propTypes = {
  avatar: PropTypes.string,
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

Testimony.defaultProps = {
  avatar: 'https://react.semantic-ui.com/images/wireframe/square-image.png',
};

export default Testimony;
