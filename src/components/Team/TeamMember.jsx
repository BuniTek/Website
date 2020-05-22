import React from 'react';
import { Popover, Button } from 'antd';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import MemberInfo from './MemberInfo';

import './TeamMember.scss';

const TeamMember = ({
  profileUrl,
  email,
  titles,
  phoneNumber,
  name,
}) => {
  const content = (
    <MemberInfo
      email={email}
      titles={titles}
      phoneNumber={phoneNumber}
    />
  );
  return (
    <div className="team__member">
      <Popover title={name} content={content} placement="bottomLeft">
        <Button className="hover-btn">
          <Avatar url={profileUrl} />
        </Button>
      </Popover>
    </div>
  );
};

TeamMember.propTypes = {
  profileUrl: PropTypes.string,
  email: PropTypes.string.isRequired,
  titles: PropTypes.instanceOf(Array).isRequired,
  phoneNumber: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

TeamMember.defaultProps = {
  profileUrl:
    'https://react.semantic-ui.com/images/wireframe/square-image.png',
};

export default TeamMember;
