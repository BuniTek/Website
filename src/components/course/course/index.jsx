import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import './index.scss';


function Course({
  title, image, description, content,
}) {
  const [opacity, setOpacity] = useState(1);
  const styles = {
    opacity,
  };
  function handleOpacityChange() {
    setOpacity(0.5);
  }
  function handleOpacityRevert() {
    setOpacity(1);
  }
  return (
    <Link to={content}>
      <div className="course">
        <div className="course__header">
          <img src={image} alt="couse_image" className="course__image" style={styles} />
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
