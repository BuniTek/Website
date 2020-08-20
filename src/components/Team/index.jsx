import React from 'react';
import TeamMember from './TeamMember';
import Button from '../Button';
import './index.scss';

const Team = ({
  billyPicture, danielPicture, eliePicture, willyPicture, alainPicture, brendaPicture, ivyPicture, elysePicture, abbyPicture, penielPicture, kettyPicture, adwoaPicture,
}) => (
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
        profileUrl={adwoaPicture}
      />
      <TeamMember
        titles="Course Developer"
        email="xx@BuniTek.site"
        name="BRENDA NYARINGITA"
        profileUrl={brendaPicture}
      />
      <TeamMember
        titles="Course Developer"
        email="xx@BuniTek.site"
        name="KETTY PENDO"
        profileUrl={kettyPicture}
      />
      <TeamMember
        titles="Course Developer"
        email="xx@BuniTek.site"
        name="IVY KALEGI"
        profileUrl={ivyPicture}
      />
      <TeamMember
        titles="Course Developer"
        email="xx@BuniTek.site"
        name="PENIEL MUBITA"
        profileUrl={penielPicture}
      />
      <TeamMember
        titles="Graphic Designer"
        email="xx@BuniTek.site"
        name="ABIGAIL AGYEMANG"
        profileUrl={abbyPicture}
      />
      <TeamMember
        titles="Content Developer"
        email="xx@BuniTek.site"
        name="ELYSE UWIMPAYE"
        profileUrl={elysePicture}
      />
    </div>
    <div className="join__team-button">
      <a href="https://forms.gle/ogvg6Ym45GA5p5ks7" target="_blank">
        <Button>Join Team</Button>
      </a>
    </div>
  </div>
);

export default Team;
