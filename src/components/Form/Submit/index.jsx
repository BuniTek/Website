import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const SubmitButton = ({ value }) => (
  <div className="form__submit">
    <input type="submit" value={value} />
  </div>
);

SubmitButton.propTypes = {
  value: PropTypes.string.isRequired,
};

export default SubmitButton;
