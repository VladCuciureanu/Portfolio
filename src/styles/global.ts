import { createGlobalStyle } from "styled-components"
import { darkTheme, lightTheme } from "./theme"
import { cssVariables } from "./variables"

const GlobalStyle = createGlobalStyle`
  /*
  1. Use a more-intuitive box-sizing model.
  */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /*
    2. Remove default margin
  */
  * {
    margin: 0;
  }

  /*
    3. Allow percentage-based heights in the application
  */
  html,
  body {
    min-height: 100%;
  }

  /*
    5. Improve text rendering
  */
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /*
    6. Improve media defaults
  */
  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  /*
    7. Remove built-in form typography styles
  */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }
  a {
    text-decoration: none;
  }

  /*
    8. Avoid text overflows
  */
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  /*
    9. Create a root stacking context
  */
  #root,
  #__next {
    isolation: isolate;
  }

  /*
    10. Apply theme styles
  */
  :root {
    ${cssVariables}
    ${lightTheme}
  }

  [data-theme="dark"] {
    ${darkTheme}
  }

  body {
    color: rgb(var(--colors-highContrast));
    background-color: rgb(var(--colors-bg));
    transition: background var(--theme-transition), color var(--theme-transition);
    font-family: var(--fonts-body);
  }
`

export default GlobalStyle
