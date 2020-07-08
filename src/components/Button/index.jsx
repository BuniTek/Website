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
  htmlType
}) => (
  <button
    type={htmlType}
    className={`button is-${type} has-bg-${bgColor}`}
    onClick={onClick}
    style={style}
  >
  <div className="btn__overlay"></div>
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.instanceOf(Object),
  bgColor: PropTypes.string,
  htmlType: PropTypes.string
};

Button.defaultProps = {
  type: 'primary',
  style: {},
  bgColor: 'primary',
  htmlType: 'button'
};

export default Button;
