import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(90deg, rgb(219, 112, 147), rgb(218, 163, 87));
  box-sizing: border-box;

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  
 }

 code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
 }
  `;

export default GlobalStyles;
