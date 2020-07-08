import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import './index.scss';


function Course({
  title, image, description, content,
}) {
  return (
    <Link to={content}>
      <div className="course">
        <div className="course__header">
          <img src={image} alt="couse_image" className="course__image" />
        </div>
        <div className="course__card--divider" />
        <div className="course__content">
          <h3 className="course__title">{title}</h3>
          <p>
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
Course.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Course;
