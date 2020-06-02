import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Title = styled.h3`
  font-weight: bolder;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Subtitle = styled.p`
  margin-top: -7px;
`;

const MemberInfo = ({ name, title }) => (
  <div className="team__info">
    <Title className="team__info--name">{name}</Title>
    <Subtitle className="team__info--title">{title}</Subtitle>
  </div>
);

MemberInfo.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default MemberInfo;
