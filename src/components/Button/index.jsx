import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ type, onClick, children }) => (
    <button
      type="button"
      className={`button is-${type}`}
      onClick={onClick}
    >
      {children}
      <span className="btn__overlay"></span>
    </button>
);

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'primary',
};

export default Button;
