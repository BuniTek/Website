/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
  type,
  onClick,
  children,
  style,
  bgColor,
}) => (
  <button
    type="button"
    className={`button is-${type} has-bg-${bgColor}`}
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
  bgColor: PropTypes.string,
};

Button.defaultProps = {
  type: 'primary',
  style: {},
  bgColor: 'primary',
};

export default Button;
