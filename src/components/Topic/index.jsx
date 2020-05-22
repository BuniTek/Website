/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { Popover } from 'antd';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import './index.scss';

import atomIcon from '../../assets/images/atom-solid.svg';
import laptopIcon from '../../assets/images/laptop-code-solid.svg';
import electronicsIcon from '../../assets/images/microscope-solid.svg';
import scienceIcon from '../../assets/images/vial-solid.svg';
import usersIcon from '../../assets/images/users-solid.svg';

const Topic = ({ caption, link }) => {
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
      case 'school clubs':
        return usersIcon;
      default:
        return atomIcon;
    }
  };
  const popOver = (
    <div className="topic__popover">
      <Link to={link}>
        <a>Visit</a>
      </Link>
    </div>
  );
  return (
    <Popover placement="bottom" content={popOver} trigger="hover">
      <div className="topic">
        <div className="topic__icon">
          <img src={getIcon(caption)} alt="Atom" />
        </div>
        <h3 className="topic__caption">{caption}</h3>
      </div>
    </Popover>

  );
};

Topic.propTypes = {
  caption: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Topic;
