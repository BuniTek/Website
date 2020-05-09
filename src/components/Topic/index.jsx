import * as React from 'react';
import { capitalize } from 'lodash';
import PropTypes from 'prop-types';
import './index.scss';

import atomIcon from '../../assets/images/atom-solid.svg';
import laptopIcon from '../../assets/images/laptop-code-solid.svg';
import electronicsIcon from '../../assets/images/microscope-solid.svg';
import scienceIcon from '../../assets/images/vial-solid.svg';

const Topic = ({ caption }) => {
  const getIcon = (caption) => {
    switch (caption) {
      case 'testing':
        return atomIcon;
      case 'courses':
        return laptopIcon;
      case 'electronics':
        return electronicsIcon;
      case 'science':
        return scienceIcon;
      default:
        return atomIcon;
    }
  };
  return (
    <div className="topic">
      <div className="topic__icon">
        <img src={getIcon(caption)} alt="Atom" />
      </div>
      <h3 className="topic__caption">{capitalize(caption)}</h3>
    </div>
  );
};

Topic.propTypes = {
  caption: PropTypes.string.isRequired,
};

export default Topic;
