
import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';
import { Link } from 'gatsby';

function Chip({ label, url }) {
  return (
    <Link to={url} className="chip" activeClassName="chip__active">
      <div>
        <span>
          {label}
        </span>
      </div>
    </Link>
  );
}

Chip.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Chip;
