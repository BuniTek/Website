/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Quote from '../../assets/images/quote-right-solid.svg';

import './index.scss';

const NewsCard = ({ title, description, link }) => (
  <div className="news__card">
    <img src={Quote} alt="Quote" className="news__card--quote" />
    <h3 className="news__card--title">
      <Link to={link}>
        <a className="news__card--title-link">{title}</a>
      </Link>
    </h3>
    <div className="news__card--description">
      <p>
        {description}
      </p>
    </div>
    <Link to={link}>
      <a className="news__card--link">Read More</a>
    </Link>
  </div>
);

NewsCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default NewsCard;
