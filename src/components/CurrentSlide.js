import React from 'react';
import { ActiveSlideDiv } from '../styles/Presentation';
import {
  FirstSlide,
  Experience,
  Overview,
  Workflow,
  Theming,
  ExtensibleSystem,
  PropsSlide,
  OtherLibraries,
  Helper,
  DeveloperExperience,
  LastSlide,
} from './AllSlides';

// ********************************************* //

const ActiveSlide = ({ componentName }) => {
  const components = {
    firstSlide: FirstSlide,
    experience: Experience,
    overview: Overview,
    workflow: Workflow,
    theming: Theming,
    extensible: ExtensibleSystem,
    propsSlide: PropsSlide,
    other: OtherLibraries,
    helper: Helper,
    developerExperience: DeveloperExperience,
    lastSlide: LastSlide,
  };

  const SlideName = components[componentName];

  return <SlideName />;
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

// ********************************************* //

const mainSlidesData = [
  {
    topic: 'Introduction to CSS-in-Js',
    id: 0,
    componentName: 'firstSlide',
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
    componentName: 'workflow',
  },
  {
    topic: 'Theming: Creating Themes with Styled-Components',
    id: 4,
    componentName: 'theming',
  },
  {
    topic: 'Props: The real power of Styled-Components',
    id: 5,
    componentName: 'propsSlide',
  },
  {
    topic: 'Extending Styles with Styled-Components',
    id: 6,
    componentName: 'extensible',
  },
  {
    topic: 'Helper Functions in Styled-Components',
    id: 7,
    componentName: 'helper',
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

export default CurrentSlide;
