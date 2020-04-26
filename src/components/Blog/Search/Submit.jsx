import React from 'react';
import PropTypes from 'prop-types';

import SearchIcon from '../../../assets/images/search-solid-1.png';

const Submit = ({ value }) => (
  <button className="blog__search--submit" value={value} type="submit">
    <img src={SearchIcon} alt="Go" />
  </button>
);

Submit.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Submit;
