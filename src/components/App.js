import React from 'react';
import TagManager from 'react-gtm-module';
import GlobalStyles from '../styles/GlobalStyles';
import { FaHome, FaReact, FaTwitter, FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { StoreProvider, StoreConsumer } from '../store';
import WelcomeSlide from './WelcomeSlide';
import CurrentSlide from './CurrentSlide';
import Logo from '../assets/images/logo.png';
import Profile from '../assets/images/profile.png';
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

// ********************************************* //

// Slides Navigation Data

const slidesNavigationData = [
  {
    slide: 0,
    topic: 'Introduction to CSS-in-Js',
  },
  {
    slide: 1,
    topic: 'My experience with CSS-in-Js',
  },
  {
    slide: 2,
    topic: 'Styled-Components',
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
    topic: 'Helper Functions',
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
    topic: 'Thank you Tanmai 🙂',
  },
];

// ********************************************* //

const MySlide = () => (
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
// Google Tag ID

const tagManagerArgs = {
  gtmId: 'UA-152753600-1',
};

// ******************************************* //

class App extends React.Component {
  componentDidMount() {
    // Google Adsense
    TagManager.initialize(tagManagerArgs);
  }

  render() {
    return (
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
                    <CurrentSlide currentActiveSlide={currentActiveSlide} />
                  )}
                </ActiveSlideWrapper>
                <SlidesNavigationSection>
                  <MySlide />
                  <SlidesWrapper>
                    <SlidesDiv>
                      {slidesNavigationData.map(({ slide, topic }, index) => (
                        <Slide
                          key={slide}
                          active={index === currentActiveSlide && true}
                          onClick={() => {
                            window.scrollTo({ top: 200, behavior: 'smooth' });
                            changeCurrentActiveSlide(index);
                          }}
                        >
                          <p>{`${index + 1}. Slide`}</p>
                          <SlideTopic>
                            <h2>{topic}</h2>
                            <img src={Logo} alt="styled-components" />
                          </SlideTopic>
                          <footer>
                            <FootPrint src={Profile} alt="lastnamearya" />
                            <p>lastnamearya</p>
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
  }
}

export default App;
