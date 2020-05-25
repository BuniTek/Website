import React from 'react';
import PropTypes from 'prop-types';
import LinkAnchor from '../../Link';

import CodingBootcamp from '../../../assets/images/codingBootCamp.png';
import HeartIcon from '../../../assets/images/heart-regular.png';
import CommentIcon from '../../../assets/images/commentIcon.svg';
import './newsItem.scss';


const NewsItem = ({ title, description }) => (
  <div className="news__item">
    <img src={CodingBootcamp} alt="Like" className="news__image" />
    <div className="news__item--content">
      <div className="news__item--heading">
        <LinkAnchor to="/#">
          <h4 className="news__item--title">{title}</h4>
        </LinkAnchor>
        <div className="news__item--undefined" />
      </div>
      <div className="news__description">
        {description}
      </div>
      <div className="news__item--footer">
        <img src={HeartIcon} alt="Like" className="news__like" />
        <span><b>5 likes</b></span>
        <img src={CommentIcon} alt="Comment" className="news__comment" />
        <span><b>5 comments</b></span>
        <LinkAnchor to="/#"><b>Read More </b></LinkAnchor>
      </div>
    </div>
  </div>
);

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default NewsItem;
