import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

// eslint-disable-next-line object-curly-newline
const Textarea = ({
  value,
  onChange,
  label,
  placeholder,
  cols,
  rows,
  name,
}) => (
  <div className="form__textarea">
    <label htmlFor={label}>{label}</label>
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      cols={cols}
      rows={rows}
      name={name}
    />
  </div>
);

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  cols: PropTypes.string,
  rows: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Textarea.defaultProps = {
  cols: '30',
  rows: '20',
};

export default Textarea;
