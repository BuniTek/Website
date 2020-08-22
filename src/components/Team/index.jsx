/* eslint-disable react/prop-types */
import React from 'react';
import TeamMember from './TeamMember';
import Button from '../Button';
import './index.scss';

const Team = ({ members }) => (
  <div className="team">
    <h1 className="team__title">Our Team</h1>
    <div className="team__list">

      {members.map(({ name, titles, profileUrl }) => (
        <TeamMember
          titles={titles}
          name={name}
          profileUrl={profileUrl}
        />
      ))}
    </div>
    <div className="join__team-button">
      <a href="https://forms.gle/ogvg6Ym45GA5p5ks7" target="_blank">
        <Button>Join Team</Button>
      </a>
    </div>
  </div>
);

export default Team;
