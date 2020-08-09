import React from 'react';
import TeamMember from './TeamMember';
import Button from '../Button';
import './index.scss';

import billyPicture from '../../assets/images/team/billyCropped.jpg';
import danielPicture from '../../assets/images/team/DanielMutiaCropped.jpg';
import eliePicture from '../../assets/images/team/elieCropped.jpg';
import willyPicture from '../../assets/images/team/willyCropped.png';
import alainPicture from '../../assets/images/team/alainCropped.jpg';
import brendaPicture from '../../assets/images/team/brendaCropped2.jpg';
import ivyPicture from '../../assets/images/team/ivyCropped.jpg';
import elysePicture from '../../assets/images/team/elyseCropped.jpeg';

const Team = () => (
  <div className="team">
    <h1 className="team__title">Our Team</h1>
    <div className="team__list">
      <TeamMember
        titles="CO-FOUNDER"
        email="xx@theBuniTek.com"
        name="BILLY BYIRINGIRO"
        profileUrl={billyPicture}
      />

      <TeamMember
        titles="CO-FOUNDER"
        email="xx@theBuniTek.com"
        name="DANIEL MUTIA"
        profileUrl={danielPicture}
      />

      <TeamMember
        titles="SOFTWARE DEVELOPER"
        email="XX@theBuniTek.com"
        name="ELIE MUGENZI"
        profileUrl={eliePicture}
      />

      <TeamMember
        titles="SOFTWARE DEVELOPER"
        email="xx@theBuniTek.com"
        name="WILLY SERGE IRADUKUNDA"
        profileUrl={willyPicture}
      />
      <TeamMember
        titles="UI/UX DEVELOPER"
        email="xx@BuniTek.site"
        name="ALAIN EROS PRESTIGE"
        profileUrl={alainPicture}
      />
      <TeamMember
        titles="UI/UX DEVELOPER"
        email="xx@BuniTek.site"
        name="ADWOA KONADU"
        profileUrl="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
      <TeamMember
        titles="CONTENT CREATOR"
        email="xx@BuniTek.site"
        name="BRENDA NYARINGITA"
        profileUrl={brendaPicture}
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
        profileUrl={ivyPicture}
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
        name="ABIGAIL AGYEMANG"
        profileUrl="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
       <TeamMember
        titles="DESIGNER"
        email="xx@BuniTek.site"
        name="ELYSE UWIMPAYE"
        profileUrl={elysePicture}
      />
    </div>
    <div className="join__team-button">
      <Button>Join Team</Button>
    </div>
  </div>
);

export default Team;
