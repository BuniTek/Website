import React from 'react';
import { List } from 'semantic-ui-react';
import { List as AntList, Typography } from 'antd';
import PropTypes from 'prop-types';

const MemberInfo = ({ email, phoneNumber, titles }) => (
  <div className="team__info">
    <List divided verticalAlign="middle">
      <List.Item>
        <List.Content>
          <p>
            <strong>Email:</strong>
            <span>{email}</span>
          </p>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <Typography.Text>
            <strong>Phone Number: </strong>
            <p>{phoneNumber}</p>
          </Typography.Text>
        </List.Content>
      </List.Item>
      <AntList
        dataSource={titles}
        header="Titles"
        renderItem={(item) => (
          <AntList.Item>
            <Typography.Text mark>{item}</Typography.Text>
          </AntList.Item>
        )}
      />
    </List>
  </div>
);

MemberInfo.propTypes = {
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  titles: PropTypes.instanceOf(Array).isRequired,
};

export default MemberInfo;
