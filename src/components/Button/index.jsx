/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
  type, onClick, children, style,
}) => (
  <button
    type="button"
    className={`button is-${type}`}
    onClick={onClick}
    style={style}
  >
    {children}
    <span className="btn__overlay" />
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.instanceOf(Object),
};

Button.defaultProps = {
  type: 'primary',
  style: {},
};

export default Button;
