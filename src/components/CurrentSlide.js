import React from 'react';

import { ActiveSlideDiv } from '../styles/Presentation';
import tweet from '../assets/images/sahil.png';

// ********************************************* //

const Test = () => <p>Test</p>;

const LastSlide = () => <img src={tweet} alt="Sahil Lavinga" id="last_slide" />;

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
    componentName: 'example',
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
    topic: 'CSS-in-Js: Other Alternatives',
    id: 8,
    componentName: 'example',
  },
  {
    topic: "It's all about Developer Experience",
    id: 9,
    componentName: 'example',
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
