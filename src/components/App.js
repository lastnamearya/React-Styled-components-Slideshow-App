import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';

import Logo from '../styles/logo.png';
import Profile from '../styles/profile.png';
import {
  AppWrapper,
  PresentationWrapper,
  SlidesNavigationSection,
  AboutMe,
  SlidesWrapper,
  SlidesDiv,
  Slide,
} from '../styles/Presentation';

const slidesData = [
  {
    slide: 1,
  },
  {
    slide: 2,
  },
  {
    slide: 3,
  },
  {
    slide: 4,
  },
  {
    slide: 5,
  },
  {
    slide: 6,
  },
];

const App = () => (
  <AppWrapper>
    <img src={Logo} alt="styled-components" id="logo" />
    <iframe
      src="https://ghbtns.com/github-btn.html?user=styled-components&repo=styled-components&type=star&count=true"
      frameBorder="0"
      scrolling="0"
      width="170px"
      height="20px"
      title="styled-components"
    ></iframe>
    <PresentationWrapper>
      <GlobalStyles />
      <SlidesNavigationSection>
        <AboutMe>
          <img src={Profile} alt="lastnamearya" />
        </AboutMe>
        <SlidesWrapper>
          <SlidesDiv>
            {slidesData.map(({ slide }) => (
              <Slide key={slide} />
            ))}
          </SlidesDiv>
        </SlidesWrapper>
      </SlidesNavigationSection>
    </PresentationWrapper>
  </AppWrapper>
);

export default App;
