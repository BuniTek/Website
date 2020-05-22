import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const SearchInput = ({ onChange, value, placeholder }) => (
  <input className="content__search--input" type="search" placeholder={placeholder} value={value} onChange={onChange} />
);

SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default SearchInput;
