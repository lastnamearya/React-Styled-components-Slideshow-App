import React from 'react';

import { ActiveSlideDiv } from '../styles/Presentation';

const Test = () => <p>Test</p>;

// ********************************************* //

const mainSlidesData = [
  {
    topic: 'Introduction to CSS-in-Js',
    id: 0,
    componentName: 'example',
  },
  {
    topic: 'Styled-Components',
    id: 1,
    componentName: 'example',
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

// ********************************************* //

const ActiveSlide = ({ componentName }) => {
  const components = {
    example: Test,
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
