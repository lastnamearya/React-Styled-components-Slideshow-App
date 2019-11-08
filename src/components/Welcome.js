import React from 'react';

import Shahidh from '../styles/images/shahidh.png';
import Rajoshi from '../styles/images/rajoshi.png';
import Rishi from '../styles/images/rishi.png';
import Tanmai from '../styles/images/tanmai.png';
import Rikin from '../styles/images/rikin.png';
import Karthik from '../styles/images/karthik.png';
import Hasura from '../styles/images/hasura.png';

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
