import React from 'react';
import PropTypes from 'prop-types';
import LinkAnchor from '../Link';

import './blogitem.scss';

const BlogItem = ({
  title, description, readMore, featured,
}) => (
  <div className="blog__item">
    <div className={featured ? 'blog__item--grid' : ''}>
      {featured && (
      <div className="blog__item--grid-item">
        <img className="blog__item--featured" src={featured} alt="Featured" />
      </div>
      )}

      <div className="blog__item--grid-item">
        <div className="blog__item--heading">
          <LinkAnchor to={readMore}>
            <h4 className="blog__item--title">{title}</h4>
          </LinkAnchor>
          <div className="blog__item--undefined" />
        </div>
        <div className="blog__description">
          {description}
        </div>
        <div className="blog__item--footer">
          {/* <div className="blog__item--footer--reaction">
            <img src={HeartIcon} alt="Like" className="blog__like" />
            <span>22</span>
          </div> */}
          <LinkAnchor to={readMore}>Read more</LinkAnchor>
        </div>
      </div>
    </div>

  </div>
);

BlogItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  readMore: PropTypes.string.isRequired,
  featured: PropTypes.bool.isRequired,
};

export default BlogItem;
