import React from 'react';
import PropTypes from 'prop-types';
import Line from '../VerticalLine';

import './index.scss';


const Testimony = ({ avatar, author, text, country }) => (
  <div className="testimony__item">
    <div className="testimony__item__left">
      <h2 className="testimonies__title">What Others think</h2>
      <p className="testimony__item__left--info">{text}</p>
      <h2 className="testimony__item__left--author"> ~ {author} - {country}</h2>
    </div>
    <Line />
    <div className="testimony__item__right">
      <div className="testimony__item__right--image"
        style={{
            backgroundImage: `url(${avatar})`,
          }}
      />
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
