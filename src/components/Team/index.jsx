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
import abbyPicture from '../../assets/images/team/AbbyCropped.jpg';
import penielPicture from '../../assets/images/team/penielCropped.jpg';
import kettyPicture from '../../assets/images/team/kettyCropped.jpg';
import adwoaPicture from '../../assets/images/team/AdwoaCropped.jpg';
import luluPicture from '../../assets/images/team/luluCropped.jpg';
import { Link } from "gatsby"

const Team = () => (
  <div className="team">
    <h1 className="team__title">Our Team</h1>
    <div className="team__list">
      <TeamMember
        titles="CO-FOUNDER"
        email="Billy.Byiringiro@buni.tech"
        name="BILLY BYIRINGIRO"
        profileUrl={billyPicture}
      />

      <TeamMember
        titles="CO-FOUNDER"
        email="Mutia.Daniel@buni.tech"
        name="DANIEL MUTIA"
        profileUrl={danielPicture}
      />

      <TeamMember
        titles="SOFTWARE DEVELOPER"
        email="Team@buni.tech"
        name="ELIE MUGENZI"
        profileUrl={eliePicture}
      />

      <TeamMember
        titles="SOFTWARE DEVELOPER"
        email="Team@buni.tech"
        name="WILLY SERGE IRADUKUNDA"
        profileUrl={willyPicture}
      />
      <TeamMember
        titles="UI/UX DEVELOPER"
        email="Team@buni.tech"
        name="ALAIN EROS PRESTIGE"
        profileUrl={alainPicture}
      />
      <TeamMember
        titles="UI/UX DEVELOPER"
        email="Team@buni.tech"
        name="ADWOA KONADU"
        profileUrl={adwoaPicture}
      />
      <TeamMember
        titles="COURSE DEVELOPER"
        email="Team@buni.tech"
        name="BRENDA NYARINGITA"
        profileUrl={brendaPicture}
      />
       <TeamMember
        titles="COURSE DEVELOPER"
        email="Team@buni.tech"
        name="KETTY PENDO"
        profileUrl={kettyPicture}
      />
      <TeamMember
        titles="COURSE DEVELOPER"
        email="Team@buni.tech"
        name="IVY KALEGI"
        profileUrl={ivyPicture}
      />
       <TeamMember
        titles="COURSE DEVELOPER"
        email="Team@buni.tech"
        name="PENIEL MUBITA"
        profileUrl={penielPicture}
      />
     <TeamMember
        titles="GRAPHIC DESIGNER"
        email="Team@buni.tech"
        name="ABIGAIL AGYEMANG"
        profileUrl={abbyPicture}
      />
       <TeamMember
        titles="CONTENT DEVELOPER"
        email="Team@buni.tech"
        name="ELYSE UWIMPAYE"
        profileUrl={elysePicture}
      />
      <TeamMember
        titles="Social Media Coordinator"
        email="Team@buni.tech"
        name="Lorraine Francis"
        profileUrl={luluPicture}
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
