import React from 'react';

import { ActiveSlideDiv, SlideContent, SlideImage } from '../styles/Presentation';
import tweet from '../assets/images/sahil.png';
import experience from '../assets/images/experience.png';
import install from '../assets/images/sc1.png';
import stats from '../assets/images/stats.png';
import fb from '../assets/images/fb.png';
import otherLibraries from '../assets/images/otherLib.png';
import sid from '../assets/images/sid.png';

// ********************************************* //

const Test = () => <p>Test</p>;

// 2. My Personal Experiece

const Experience = () => (
  <SlideContent>
    <SlideImage src={experience} alt="My Experience" />
    <p>
      I shared my experience of using Styled-Components with my teammates in Slack right just after
      first two weeks{' '}
      <span role="img" aria-label="play">
        😀
      </span>
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
    <SlideImage src={sid} alt="Sid" />
    <p>A new trick that I recenlty learned by Sid</p>
  </SlideContent>
);

// 11. Last Slide

const LastSlide = () => (
  <SlideContent>
    <SlideImage src={tweet} alt="Sahil Lavinga" rounded />
    <p>
      Also I want to thank Kamlesh Chandnani for this project ~{'  '}
      <a href="https://awesomeinterviewprocess.tech/" target="_blank" rel="noopener noreferrer">
        Awesome Interview Process
      </a>
    </p>
  </SlideContent>
);

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
    topic: 'Theming: Creating Themes in Styled-Components',
    id: 4,
    componentName: 'example',
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

const ActiveSlide = ({ componentName }) => {
  const components = {
    example: Test,
    experience: Experience,
    overview: Overview,
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
        .map(({ topic, id, description, componentName }) => (
          <ActiveSlideDiv key={id}>
            <h1>{topic}</h1>
            <p>{description}</p>
            <ActiveSlide componentName={componentName} />
          </ActiveSlideDiv>
        ))}
    </React.Fragment>
  );
};

export default CurrentSlide;
