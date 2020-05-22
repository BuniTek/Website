/* eslint-disable object-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Input = ({
  type,
  onChange,
  placeholder,
  label,
  value,
  name,
  style,
}) => (
  <div className="form__input">
    <label htmlFor={label}>{label}</label>
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      name={name}
      style={style}
    />
  </div>
);

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  style: PropTypes.instanceOf(Object),
};

Input.defaultProps = {
  type: 'text',
  style: {},
};

export default Input;
