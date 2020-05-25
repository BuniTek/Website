/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

function Chip({ filter }) {
  const [style, setStyle] = useState(false);

  function handleClick() {
    setStyle(!style);
  }

  function changeChipColor() {
    if (style) {
      return 'chip__filter';
    }
    return '';
  }
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div className={`chip ${changeChipColor()}`} onClick={handleClick}>
      <span>{filter}</span>
    </div>
  );
}

Chip.propTypes = {
  filter: PropTypes.string.isRequired,
};

export default Chip;
