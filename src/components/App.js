import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import { PresentationWrapper, SlidesWrapper, SlidesDiv, Slide } from '../styles/Presentation';

function App() {
  return (
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
  );
}

export default App;
