import React from 'react';
import PropTypes from 'prop-types';
import LinkAnchor from '../../Link';

import CodingBootcamp from '../../../assets/images/codingBootCamp.png';
import './newsItem.scss';


const NewsItem = ({ title, description , readMore }) => (
  <div className="news__item">
    <img src={CodingBootcamp} alt="Like" className="news__image" />
    <div className="news__item--content">
      <div className="news__item--heading">
        <LinkAnchor to={readMore}>
          <h4 className="blog__item--title">{title}</h4>
        </LinkAnchor>
        <div className="news__item--undefined" />
      </div>
      <div className="news__description">
        {description}
      </div>
      <div className="news__item--footer">
        <LinkAnchor to={readMore}><b>Read More</b> </LinkAnchor>
      </div>
    </div>
  </div>
);

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default NewsItem;
