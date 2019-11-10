import React from 'react';

import Shahidh from '../assets/images/shahidh.png';
import Rajoshi from '../assets/images/rajoshi.png';
import Rishi from '../assets/images/rishi.png';
import Tanmai from '../assets/images/tanmai.png';
import Rikin from '../assets/images/rikin.png';
import Karthik from '../assets/images/karthik.png';
import Hasura from '../assets/images/hasura.png';

import { WelcomeWrapper, WelcomeDiv, TeamMember } from '../styles/Presentation';

const teamData = [
  {
    img: Shahidh,
    name: 'Shahidh',
  },
  {
    img: Rajoshi,
    name: 'Rajoshi',
  },
  {
    img: Rishi,
    name: 'Rishi',
  },
  {
    img: Tanmai,
    name: 'Tanmai',
  },
  {
    img: Rikin,
    name: 'Rikin',
  },
  {
    img: Karthik,
    name: 'Karthik',
  },
  {
    img: Hasura,
    name: 'Hasura',
  },
];

const WelcomeSlide = () => (
  <WelcomeWrapper>
    <h1>
      Hello Everyone{' '}
      <span role="img" aria-label="play">
        👋
      </span>
    </h1>
    <p>
      Thanks for joining{' '}
      <span role="img" aria-label="play">
        🙌
      </span>
    </p>
    <WelcomeDiv>
      {teamData.map(({ img, name }, index) => (
        <TeamMember src={img} key={name} index={index} />
      ))}
    </WelcomeDiv>
  </WelcomeWrapper>
);

export default WelcomeSlide;
