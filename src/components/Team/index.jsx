import React from 'react';
import TeamMember from './TeamMember';

import './index.scss';

const Team = () => (
  <div className="team">
    <h2 className="team__title">Our Team</h2>
    <div className="team__list">
      <TeamMember
        titles={['Engineer', 'CEO', 'Founder']}
        email="elie@theafricai.com"
        phoneNumber="+250785844487"
        name="Elie Mugenzi"
        profileUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />

      <TeamMember
        titles={['Engineer', 'CEO', 'Founder']}
        email="alain@theafricai.com"
        phoneNumber="+250785844487"
        name="Alain Eros Prestige"
      />

      <TeamMember
        titles={['Engineer', 'CEO', 'Founder']}
        email="billy@theafricai.com"
        phoneNumber="+250785844487"
        name="Billy Jason"
      />

      <TeamMember
        titles={['Engineer', 'CEO', 'Founder']}
        email="willy@theafricai.com"
        phoneNumber="+250785844487"
        name="Willy Serge"
        profileUrl="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
    </div>
  </div>
);

export default Team;
