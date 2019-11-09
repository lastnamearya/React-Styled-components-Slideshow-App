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
  SlideTopic,
} from '../styles/Presentation';

const slidesData = [
  {
    slide: 1,
    topic: 'Introduction to CSS-in-Js',
  },
  {
    slide: 2,
    topic: 'Styled-Components',
  },
  {
    slide: 3,
    topic: 'How I started with CSS-in-Js',
  },
  {
    slide: 4,
    topic: 'How Styled-Components Work',
  },
  {
    slide: 5,
    topic: 'Theming in Styled-Components',
  },
  {
    slide: 6,
    topic: 'Props: Writing Conditional-CSS',
  },
  {
    slide: 7,
    topic: 'Extensible Systems',
  },
  {
    slide: 8,
    topic: 'Global Styles',
  },
  {
    slide: 9,
    topic: 'Other Alternatives',
  },
  {
    slide: 10,
    topic: 'Developer Experience',
  },
  {
    slide: 11,
    topic: 'Thanks you Tanmai',
  },
];

const Lastnamearya = () => (
  <AboutMe>
    <img src={Profile} alt="lastnamearya" />
    <h3>Jigyasu Arya</h3>
    <h4>Self-taught Frontend | React.js Developer</h4>
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
                  {slidesData.map(({ slide, topic }, index) => (
                    <Slide
                      key={slide}
                      active={index === currentActiveSlide && true}
                      onClick={() => changeCurrentActiveSlide(index)}
                    >
                      <p>{`${index + 1}. Slide`}</p>
                      <SlideTopic>
                        <h2>{topic}</h2>
                        <img src={Logo} alt="styled-components" />
                      </SlideTopic>
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
