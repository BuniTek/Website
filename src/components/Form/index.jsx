import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, children }) => (
  <div className="form">
    <div className="form__container">
      <form onSubmit={onSubmit}>{children}</form>
    </div>
  </div>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Form;
