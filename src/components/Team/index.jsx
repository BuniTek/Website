import React from 'react';
import TeamMember from './TeamMember';

import './index.scss';

const Team = () => (
  <div className="team">
    <h1 className="team__title">The development Team</h1>
    <div className="team__list">
      <TeamMember
        titles="Engineer"
        email="elie@theafricai.com"
        phoneNumber="+250785844487"
        name="Elie Mugenzi"
        profileUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />

      <TeamMember
        titles="Designer"
        email="alain@theafricai.com"
        phoneNumber="+250785844487"
        name="Alain Eros Prestige"
      />

      <TeamMember
        titles="CEO"
        email="billy@theafricai.com"
        phoneNumber="+250785844487"
        name="Billy Jason"
      />

      <TeamMember
        titles="Engineer"
        email="willy@theafricai.com"
        phoneNumber="+250785844487"
        name="Willy Serge"
        profileUrl="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <TeamMember
        titles="The main man"
        email="daniel@africai.site"
        phoneNumber="+250785844487"
        name="Daniel"
        profileUrl="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <TeamMember
        titles="Retired Member"
        email="willy@theafricai.com"
        phoneNumber="+250785844487"
        name="Erastus"
        profileUrl="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
    </div>
  </div>
);

export default Team;
