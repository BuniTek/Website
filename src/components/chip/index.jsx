/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function Chip({
  label, index, toggleActiveFilter, toggleActiveStyles,
}) {
  function handleClick() {
    toggleActiveFilter(index);
  }
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={`chip ${toggleActiveStyles(index)}`} onClick={handleClick}>
      <span>{label}</span>
    </div>
  );
}

Chip.propTypes = {
  index: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  toggleActiveFilter: PropTypes.func.isRequired,
  toggleActiveStyles: PropTypes.func.isRequired,
};

export default Chip;
