import React from 'react';
import TeamMember from './TeamMember';
import Button from '../Button';
import './index.scss';

const Team = () => (
  <div className="team">
    <h1 className="team__title">Our Team</h1>
    <div className="team__list">
      <TeamMember
        titles="CO-FOUNDER"
        email="xx@theBuniTek.com"
        name="BILLY BYIRINGIRO"
        profileUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />

      <TeamMember
        titles="CO-FOUNDER"
        email="xx@theBuniTek.com"
        name="DANIEL MUTIA"
      />

      <TeamMember
        titles="SOFTWARE DEVELOPER"
        email="XX@theBuniTek.com"
        phoneNumber="+250785844487"
        name="ELIE MUGENZI"
      />

      <TeamMember
        titles="SOFTWARE DEVELOPER"
        email="xx@theBuniTek.com"
        name="WILLY SERGE IRADUKUNDA"
        profileUrl="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <TeamMember
        titles="UI/UX DEVELOPER"
        email="xx@BuniTek.site"
        name="ALAIN EROS PRESTIGE"
        profileUrl="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <TeamMember
        titles="UI/UX DEVELOPER"
        email="xx@BuniTek.site"
        name="ABIGAIL AGYEMANG"
        profileUrl="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <TeamMember
        titles="CONTENT CREATOR"
        email="xx@BuniTek.site"
        name="BRENDA NYARINGITA"
        profileUrl="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
       <TeamMember
        titles="CONTENT CREATOR"
        email="xx@BuniTek.site"
        name="KETTY PENDO"
        profileUrl="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <TeamMember
        titles="CONTENT CREATOR"
        email="xx@BuniTek.site"
        name="IVY KALEGI"
        profileUrl="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
       <TeamMember
        titles="CONTENT CREATOR"
        email="xx@BuniTek.site"
        name="PENIEL MUBITA"
        profileUrl="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
     <TeamMember
        titles="DESIGNER"
        email="xx@BuniTek.site"
        name="ADWOA KONADU"
        profileUrl="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
       <TeamMember
        titles="DESIGNER"
        email="xx@BuniTek.site"
        name="ELYSE UWIMPAYE"
        profileUrl="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
    </div>
    <div className="join__team-button">
      <Button>Join Team</Button>
    </div>
  </div>
);

export default Team;
