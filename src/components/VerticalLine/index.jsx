import * as React from 'react';
import PropTypes from 'prop-types';

import './index.scss';


const Line = ({ color }) => (
  <div className="line">
    <div className="line__dot" style={{ background: color }} />
    <div className="line__main" />
    <div className="line__dot" style={{ background: color }} />
  </div>
);

Line.propTypes = {
  color: PropTypes.string.isRequired,
};
export default Line;
