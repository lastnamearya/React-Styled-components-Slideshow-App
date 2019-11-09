import React from 'react';
import GlobalStyles from '../styles/GlobalStyles';
import { FaHome, FaReact, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { StoreProvider, StoreConsumer } from '../store';
import WelcomeSlide from './Welcome';
import Logo from '../styles/images/logo.png';
import Profile from '../styles/images/profile.png';
import {
  AppWrapper,
  PresentationWrapper,
  ActiveSlideWrapper,
  ActiveSlideDiv,
  SlidesNavigationSection,
  AboutMe,
  FootPrint,
  SocialSection,
  SlidesWrapper,
  SlidesDiv,
  Slide,
  SlideTopic,
} from '../styles/Presentation';

// ********************************************* //

const slidesNavigationData = [
  {
    slide: 0,
    topic: 'Introduction to CSS-in-Js',
  },
  {
    slide: 1,
    topic: 'Styled-Components',
  },
  {
    slide: 2,
    topic: 'My experience with CSS-in-Js',
  },
  {
    slide: 3,
    topic: 'How Styled-Components Work',
  },
  {
    slide: 4,
    topic: 'Theming in Styled-Components',
  },
  {
    slide: 5,
    topic: 'Props: Writing Conditional-CSS',
  },
  {
    slide: 6,
    topic: 'Extensible Systems',
  },
  {
    slide: 7,
    topic: 'Global Styles',
  },
  {
    slide: 8,
    topic: 'Other Alternatives',
  },
  {
    slide: 9,
    topic: 'Developer Experience',
  },
  {
    slide: 10,
    topic: 'Thank you Tanmai',
  },
];

// ********************************************* //

const Lastnamearya = () => (
  <AboutMe>
    <img src={Profile} alt="lastnamearya" />
    <h3>Jigyasu Arya</h3>
    <h4>Self-taught Frontend | React.js Developer</h4>
    <FaReact id="react" />
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

// ********************************************* //

const mainSlidesData = [
  {
    topic: 'Introduction to CSS-in-Js',
    id: 0,
  },
  {
    topic: 'Styled-Components',
    id: 1,
  },
  {
    topic: 'How I started with Styled-Components',
    id: 2,
  },
  {
    topic: 'How Styled-Components works behind the scenes',
    id: 3,
  },
  {
    topic: 'Theming: Creating Themes in Styled-Components',
    id: 4,
  },
  {
    topic: 'Props: The real power of Styled-Components',
    id: 5,
  },
  {
    topic: 'Extensible Styling Systems',
    id: 6,
  },
  {
    topic: 'Helpers in Styled-Components: Global Styles',
    id: 7,
  },
  {
    topic: 'CSS-in-Js: Other Alternatives',
    id: 8,
  },
  {
    topic: "It's all about Developer Experience",
    id: 9,
  },
  {
    topic: 'Thank you Hasura Team',
    id: 10,
  },
];

const CurrentActiveSlide = ({ currentActiveSlide }) => {
  return (
    <React.Fragment>
      {mainSlidesData
        .filter(({ id }) => {
          return id === currentActiveSlide;
        })
        .map(({ topic, id, description }) => (
          <ActiveSlideDiv key={id}>
            <h1>{topic}</h1>
            <p>{description}</p>
          </ActiveSlideDiv>
        ))}
    </React.Fragment>
  );
};

// ********************************************* //

const App = () => (
  <StoreProvider>
    <StoreConsumer>
      {({ isWelcomeSlideActive, currentActiveSlide, changeCurrentActiveSlide }) => (
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
              {isWelcomeSlideActive ? (
                <WelcomeSlide />
              ) : (
                <CurrentActiveSlide currentActiveSlide={currentActiveSlide} />
              )}
            </ActiveSlideWrapper>
            <SlidesNavigationSection>
              <Lastnamearya />
              <SlidesWrapper>
                <SlidesDiv>
                  {slidesNavigationData.map(({ slide, topic }, index) => (
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
