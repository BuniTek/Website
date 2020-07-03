import React from 'react';
import { Popover, Button } from 'antd';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import MemberInfo from './MemberInfo';

import defaultProfile from '../../assets/images/user-profile.png';
import './TeamMember.scss';

const TeamMember = ({
  profileUrl,
  titles,
  name,
}) => {
  const content = (
    <MemberInfo
      name={name}
      title={titles}
    />
  );
  return (
    <div className="team__member">
      <Popover placement="bottom" trigger="hover" content={content} title={name}>
        <Button className="avatar__button">
           <Avatar url={profileUrl} />
        </Button>   
      </Popover>
    </div>
  );
};

TeamMember.propTypes = {
  profileUrl: PropTypes.string,
  titles: PropTypes.instanceOf(Array).isRequired,
  name: PropTypes.string.isRequired,
};

TeamMember.defaultProps = {
  profileUrl:
    defaultProfile,
};

export default TeamMember;
