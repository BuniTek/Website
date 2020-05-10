import React from 'react';
import { List } from 'semantic-ui-react';
import { List as AntList, Typography, Tag } from 'antd';
import PropTypes from 'prop-types';

const MemberInfo = ({ email, phoneNumber, titles }) => (
  <div className="team__info">
    <List divided verticalAlign="middle">
      <List.Item>
        <List.Content>
          <p>
            <strong>Email: &nbsp;</strong>
            <Tag color="processing">{email}</Tag>
          </p>
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <Typography.Text>
            <strong>Phone: &nbsp; </strong>
            <Tag color="processing">{phoneNumber}</Tag>
          </Typography.Text>
        </List.Content>
      </List.Item>
      <AntList
        dataSource={titles}
        header="Titles"
        renderItem={(item) => (
          <Tag color="success">{item}</Tag>
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
