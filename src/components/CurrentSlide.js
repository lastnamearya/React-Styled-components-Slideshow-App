import React from 'react';

import { ActiveSlideDiv, SlideImage } from '../styles/Presentation';
import tweet from '../assets/images/sahil.png';
import experience from '../assets/images/experience.png';
// import install from '../assets/images/sc1.png';
import stats from '../assets/images/stats.png';
import otherLibraries from '../assets/images/otherLib.png';
import sid from '../assets/images/sid.png';

// ********************************************* //

const Test = () => <p>Test</p>;

// 2. My Experiece Slide

const Experience = () => <SlideImage src={experience} alt="My Experience" />;

// 3. Styled Components Overview

const Overview = () => <SlideImage src={stats} alt="Install" rounded />;

// 9. Other Libraries

const OtherLibraries = () => <SlideImage src={otherLibraries} alt="Other Libraries" />;

// 10. Developer Experience

const DeveloperExperience = () => <SlideImage src={sid} alt="Sid" />;

// 11. Last Slide

const LastSlide = () => <SlideImage src={tweet} alt="Sahil Lavinga" rounded />;

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
    topic: 'Thank you Hasura Team',
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
