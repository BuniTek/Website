import React from 'react';
import PropTypes from 'prop-types';
import LinkAnchor from '../Link';

import HeartIcon from '../../assets/images/heart-regular.png';

import './blogitem.scss';

const BlogItem = ({ title, description }) => (
  <div className="blog__item">
    <div className="blog__item--heading">
      <LinkAnchor to="/#">
        <h4 className="blog__item--title">{title}</h4>
      </LinkAnchor>
      <div className="blog__item--undefined" />
    </div>
    <div className="blog__description">
      {description}
    </div>
    <div className="blog__item--footer">
      <LinkAnchor to="/#">Read More &gt; </LinkAnchor>
      <img src={HeartIcon} alt="Like" className="blog__like" />
    </div>
  </div>
);

BlogItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default BlogItem;
