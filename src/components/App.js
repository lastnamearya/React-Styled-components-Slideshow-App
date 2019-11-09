import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import { FaHome, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { StoreProvider, StoreConsumer } from '../store';
import WelcomeSlide from './Welcome';
import Logo from '../styles/images/logo.png';
import Profile from '../styles/images/profile.png';
import {
  AppWrapper,
  PresentationWrapper,
  ActiveSlideWrapper,
  SlidesNavigationSection,
  AboutMe,
  FootPrint,
  SocialSection,
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

const Lastnamearya = () => (
  <AboutMe>
    <img src={Profile} alt="lastnamearya" />
    <h3>Jigyasu Arya</h3>
    <h4>Self-taught Frontend Developer</h4>
    <SocialSection>
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://lastnamearya.github.io/"
          style={{ textDecoration: 'none' }}
        >
          <FaHome />
        </a>
      </p>
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/lastnamearya/"
          style={{ textDecoration: 'none' }}
        >
          <FaTwitter />
        </a>
      </p>
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/lastnamearya/"
          style={{ textDecoration: 'none' }}
        >
          <FaGithub />
        </a>
      </p>
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/lastnamearya/"
          style={{ textDecoration: 'none' }}
        >
          <FaLinkedinIn />
        </a>
      </p>
    </SocialSection>
  </AboutMe>
);

const App = () => (
  <StoreProvider>
    <StoreConsumer>
      {({ currentActiveSlide, changeCurrentActiveSlide }) => (
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
            {/* Active Slide */}
            <ActiveSlideWrapper>
              <WelcomeSlide />
            </ActiveSlideWrapper>
            <SlidesNavigationSection>
              <Lastnamearya />
              <SlidesWrapper>
                <SlidesDiv>
                  {slidesData.map(({ slide }, index) => (
                    <Slide
                      key={slide}
                      active={index === currentActiveSlide && true}
                      onClick={() => changeCurrentActiveSlide(index)}
                    >
                      <h2>Slide</h2>
                      <footer>
                        <FootPrint src={Profile} alt="lastnamearya" />
                        <p>1x Developer</p>
                      </footer>
                    </Slide>
                  ))}
                </SlidesDiv>
              </SlidesWrapper>
            </SlidesNavigationSection>
          </PresentationWrapper>
        </AppWrapper>
      )}
    </StoreConsumer>
  </StoreProvider>
);

export default App;
