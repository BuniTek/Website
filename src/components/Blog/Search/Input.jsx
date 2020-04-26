import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const BlogSearchInput = ({ onChange, value, placeholder }) => (
  <input className="blog__search--input" type="search" placeholder={placeholder} value={value} onChange={onChange} />
);

BlogSearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default BlogSearchInput;
