import React from 'react';

import { ActiveSlideDiv, SlideContent, SlideImage } from '../styles/Presentation';
import tweet from '../assets/images/sahil.png';
import experience from '../assets/images/experience.png';
import install from '../assets/images/sc1.png';
import stats from '../assets/images/stats.png';
import fb from '../assets/images/fb.png';
import otherLibraries from '../assets/images/otherLib.png';
import sid from '../assets/images/sid.png';

// Theme Images

import theme from '../assets/images/theme/theme.png';
import outsideComponent from '../assets/images/theme/outside.png';
import themeObject from '../assets/images/theme/themeObject.png';
import defaultThemeOne from '../assets/images/theme/default1.png';
import defaultThemeTwo from '../assets/images/theme/default2.png';
import defaultThemeThree from '../assets/images/theme/default3.png';
import whiteOne from '../assets/images/theme/white1.png';
import whiteTwo from '../assets/images/theme/white2.png';
import whiteThree from '../assets/images/theme/white3.png';

// ********************************************* //

const mainSlidesData = [
  {
    topic: 'Introduction to CSS-in-Js',
    id: 0,
    componentName: 'example',
  },
  {
    topic: 'How I started with Styled-Components',
    id: 1,
    componentName: 'experience',
  },
  {
    topic: 'Styled-Components',
    id: 2,
    componentName: 'overview',
  },
  {
    topic: 'How Styled-Components works behind the scenes',
    id: 3,
    componentName: 'example',
  },
  {
    topic: 'Theming: Creating Themes with Styled-Components',
    id: 4,
    componentName: 'theming',
  },
  {
    topic: 'Props: The real power of Styled-Components',
    id: 5,
    componentName: 'example',
  },
  {
    topic: 'Extensible Styling Systems: Extending Styles',
    id: 6,
    componentName: 'example',
  },
  {
    topic: 'Helpers in Styled-Components: Global Styles',
    id: 7,
    componentName: 'example',
  },
  {
    topic: 'CSS-in-Js: Other Libraries',
    id: 8,
    componentName: 'other',
  },
  {
    topic: "It's all about Developer Experience",
    id: 9,
    componentName: 'developerExperience',
  },
  {
    topic: 'Thank you Hasura Team 🙌',
    id: 10,
    componentName: 'lastSlide',
  },
];

// ********************************************* //

const Test = () => <p>Test</p>;

// 2. My Personal Experiece

const Experience = () => (
  <SlideContent>
    <h2>Major Product Requirements</h2>
    <ul>
      <li>Styles Abstraction for White Label & Default Version</li>
      <li>Next.js ~ Server Side Rendering</li>
    </ul>
    <SlideImage src={experience} alt="My Experience" />
    <p>
      Me right after two weeks of working with Styled-Components ~ Sharing my experience with my
      teammates in Slack{' '}
      <span role="img" aria-label="play">
        😀
      </span>
    </p>
    <p style={{ marginTop: '0' }}>
      Ignore null (ternary operator) in the above code snippet btw :P
    </p>
  </SlideContent>
);

// 3. Styled Components Overview

const Overview = () => (
  <SlideContent>
    <SlideImage src={stats} alt="Install" rounded />
    <p>Easier to install with no dev setup</p>
    <SlideImage src={install} alt="Install" />
  </SlideContent>
);

// 5. Theming in Styled-Components

const Theming = () => (
  <SlideContent>
    <h2>Dark Theme Example: React Tic-Tac-Toe</h2>
    <p>
      Game Link ~{' '}
      <a
        href="https://lastnamearya-hasura-tic-tac-toe.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://lastnamearya-hasura-tic-tac-toe.netlify.com/
      </a>
    </p>
    <SlideImage src={theme} alt="img" />
    <p>{`<ThemeProvider> wrapper component`}</p>
    <SlideImage src={outsideComponent} alt="img" />
    <p>Use case: For example abstracting network loader color with theme</p>
    <h2>Theme Object</h2>
    <SlideImage src={themeObject} alt="img" />
    <p>{`We have to explicity pass a theme object as a theme prop to the <ThemeProvider />  `}</p>
    <h2>Default Theme of our Dashboard</h2>
    <SlideImage src={defaultThemeOne} alt="img" width="60%" />
    <SlideImage src={defaultThemeTwo} alt="img" width="60%" />
    <SlideImage src={defaultThemeThree} alt="img" width="60%" />
    <h2>WhiteLabel version Theme</h2>
    <SlideImage src={whiteOne} alt="img" width="60%" />
    <SlideImage src={whiteTwo} alt="img" width="60%" />
    <SlideImage src={whiteThree} alt="img" width="60%" />
  </SlideContent>
);

// 9. Other Libraries

const OtherLibraries = () => (
  <SlideContent>
    <SlideImage src={fb} alt="Facebook CSS-in-Js" />
    <p>
      React Team built a new CSS-in-Js Library for the new Facebook{' '}
      <span role="img" aria-label="play">
        👨‍🎨
      </span>
    </p>
    <SlideImage src={otherLibraries} alt="Other Libraries" />
    <p>
      Resource Link:{'  '}
      <a
        href="https://github.com/tuchk4/awesome-css-in-js"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github ~ Awesome CSS-in-Js
      </a>
    </p>
  </SlideContent>
);

// 10. Developer Experience

const DeveloperExperience = () => (
  <SlideContent>
    <SlideImage src={sid} alt="Sid" rounded />
    <p>A new trick that I recenlty learned by Sid</p>
  </SlideContent>
);

// 11. Last Slide

const LastSlide = () => (
  <SlideContent>
    <SlideImage src={tweet} alt="Sahil Lavinga" rounded />
    <p>
      Also I want to thank Kamlesh Chandnani for his project ~{'  '}
      <a href="https://awesomeinterviewprocess.tech/" target="_blank" rel="noopener noreferrer">
        Awesome Interview Process
      </a>
    </p>
  </SlideContent>
);

// ********************************************* //

const ActiveSlide = ({ componentName }) => {
  const components = {
    example: Test,
    experience: Experience,
    overview: Overview,
    theming: Theming,
    other: OtherLibraries,
    developerExperience: DeveloperExperience,
    lastSlide: LastSlide,
  };

  const TagName = components[componentName];

  return <TagName />;
};

// ********************************************* //

const CurrentSlide = ({ currentActiveSlide }) => {
  return (
    <React.Fragment>
      {mainSlidesData
        .filter(({ id }) => {
          return id === currentActiveSlide;
        })
        .map(({ topic, id, componentName }) => (
          <ActiveSlideDiv key={id}>
            <h1>{topic}</h1>
            <ActiveSlide componentName={componentName} />
          </ActiveSlideDiv>
        ))}
    </React.Fragment>
  );
};

export default CurrentSlide;
