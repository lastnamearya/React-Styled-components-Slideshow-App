import React from 'react';

import { SlideContent, SlideImage } from '../styles/Presentation';
import tweet from '../assets/images/sahil.png';
import experience from '../assets/images/experience.png';
import install from '../assets/images/sc1.png';
import stats from '../assets/images/stats.png';
import fb from '../assets/images/fb.png';
import otherLibraries from '../assets/images/otherLib.png';
import sid from '../assets/images/sid.png';
import tailwind from '../assets/images/tailwind.png';
import globalStyle from '../assets/images/globalStyle.png';
import css from '../assets/images/css.png';
import extending from '../assets/images/extending.png';
import console from '../assets/images/dev_console.png';
import slideImages from '../assets/images/slideImages.png';

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

// Props ~ Critical CSS

import tictactoeGrid from '../assets/images/props/tictactoeGrid.png';
import tictactoeCode from '../assets/images/props/tictactoe.png';
import welcomeSlide from '../assets/images/props/welcomeslide.png';
import hasuraButtons from '../assets/images/props/hasuraNewUI.png';

// ********************************************* //

export const Test = () => <p>Test</p>;

// 2. My Personal Experiece

export const Experience = () => (
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

export const Overview = () => (
  <SlideContent>
    <h2>One of the most popular CSS-in-Js Libarary</h2>
    <SlideImage src={stats} alt="Install" rounded />
    <ul style={{ marginTop: '1.5rem' }}>
      <li>Easier to install with no dev setup</li>
      <li>Babel Plugin to Support SSR, Smaller Bundles etc</li>
      <li>Theming Support</li>
      <li>Supports writing CSS in a Styled Component ~ id / className</li>
      <li>Scoped Styling ~ No more use of Pre-Processors like SASS</li>
      <li>No className conflicts ~ Supports Global CSS</li>
      <li>Easier Learning Curve</li>
    </ul>
    <SlideImage src={install} alt="Install" />
    <p>
      Other good references:{'  '}
      <a
        href="https://github.com/styled-components/awesome-styled-components"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github ~ awesome-styled-components
      </a>
    </p>
  </SlideContent>
);

// 4. Styled Components ~ Work

export const Workflow = () => (
  <SlideContent>
    <h2>Styled-components utilises tagged template literals to style components</h2>
    <SlideImage src={console} alt="console" width="80%" />
    <p>
      When we create a Styled Component then it really just returning an element with a class i.e
      complete unique and also generates css for that class.
    </p>
  </SlideContent>
);

// 5. Theming in Styled-Components

export const Theming = () => (
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

// 6. Props in Styled Components

export const PropsSlide = () => (
  <SlideContent>
    <h2>The Right Abstraction</h2>
    <ul>
      <li>This is where all React.js developer productivity lives :P</li>
      <li>80 / 20 Principle ~ Writing critical CSS is now no more a procrastinating thought :D</li>
      <li>Being able to manipulate styles based on specific conditions</li>
      <li>CSS is now easier to maintain</li>
    </ul>
    <SlideImage src={tictactoeGrid} alt="Grid" rounded />
    <p>React.js Tic-Tac-Toe Dynamic Grids</p>
    <SlideImage src={tictactoeCode} alt="Grid" />
    <p>That's how I'm generating GridsDiv width based on user grid input</p>
    <SlideImage src={welcomeSlide} alt="Grid" />
    <p>First Welcome Slide ~ Dynamic align-self property based on index</p>
    <SlideImage src={hasuraButtons} alt="Grid" rounded />
    <p>New UI of Hasura ~ Same Button Styling abstraction</p>
    <SlideImage src={slideImages} alt="Slide Images" />
    <p>Images embedded in Slides</p>
  </SlideContent>
);

// 7. Extending Styles

export const ExtensibleSystem = () => (
  <SlideContent>
    <h2>Design System: A food for thought</h2>
    <ul>
      <li>First of all, I dont' use that feature much even it has lot of powers</li>
      <li>When Product Design is completely clear and you're aware of whole PRD</li>
      <li>Automate Frontend Workflow for future</li>
      <li>Powerful abstraction with passing props feature</li>
    </ul>
    <SlideImage src={extending} alt="Extending Styled Component" />
    <p>A very simple example of extending styles using Styled Components</p>
  </SlideContent>
);

// 8. Helper Functions

export const Helper = () => (
  <SlideContent>
    <h2>createGlobalStyle, css function etc</h2>
    <SlideImage src={globalStyle} alt="Global Styles" />
    <p>We can import this GlobalStyle Component anywhere in our application</p>
    <SlideImage src={css} alt="CSS Function" />
    <p>Use Case: When for a single prop, You want to apply multiple styles</p>
  </SlideContent>
);

// 9. Other Libraries

export const OtherLibraries = () => (
  <SlideContent>
    <SlideImage src={fb} alt="Facebook CSS-in-Js" rounded />
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

export const DeveloperExperience = () => (
  <SlideContent>
    <h2>
      <span role="img" aria-label="play">
        🔥
      </span>
    </h2>
    <ul>
      <li>Ability to write CSS-in-Js gives a huge Productivity Boost</li>
      <li>Critical CSS Styling ~ No more procrastination and lesser resistence</li>
      <li>Powerful Abstractions ~ Design Systems</li>
      <li>Faster Prototyping & Better Dynamic Predictablity</li>
      <li>Great Readability ~ Component Structure</li>
      <li>Coloacted within the same React Component File</li>
      <li>It's getting better and more performant with newer versions</li>
      <li>In the end, It felt like a home for a React.js Developer</li>
    </ul>
    <SlideImage src={sid} alt="Sid" rounded />
    <p>A new neat trick that I recenlty learned</p>
    <SlideImage src={tailwind} alt="tailwind" width="90%" />
    <p>Tailwind CSS is all over the Twitter, I'll also give it a try</p>
  </SlideContent>
);

// 11. Last Slide

export const LastSlide = () => (
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
