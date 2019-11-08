import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';

import Logo from '../styles/logo.png';
import {
  AppWrapper,
  PresentationWrapper,
  SlidesWrapper,
  SlidesDiv,
  Slide,
} from '../styles/Presentation';

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
      <SlidesWrapper>
        <SlidesDiv>
          <Slide />
          <Slide />
          <Slide />
          <Slide />
          <Slide />
          <Slide />
        </SlidesDiv>
      </SlidesWrapper>
    </PresentationWrapper>
  </AppWrapper>
);

export default App;
