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
    height: 100%;
  }

  /*
    5. Improve text rendering
  */
  body {
    -webkit-font-smoothing: antialiased;
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
    10. Load up fonts
  */
    @font-face {
      font-weight: 600;
      font-family: Magnat Poster;
      src: url(/assets/fonts/MagnatPoster-Semibold.otf) format("opentype");
      font-display: swap;
    }
    @font-face {
      font-weight: 600;
      font-family: Magnat Head;
      src: url(/assets/fonts/MagnatHead-Semibold.otf) format("opentype");
      font-display: swap;
    }
    @font-face {
      font-weight: 400;
      font-family: Magnat Text;
      src: url(/assets/fonts/MagnatText-Regular.otf) format("opentype");
      font-display: swap;
    }
    @font-face {
      font-weight: 500;
      font-family: Magnat Text;
      src: url(/assets/fonts/MagnatText-Medium.otf) format("opentype");
      font-display: swap;
    }
    @font-face {
      font-weight: 500;
      font-family: Magnat Text;
      font-style: italic;
      src: url(/assets/fonts/MagnatText-MediumItalic.otf) format("opentype");
      font-display: swap;
    }
    @font-face {
      font-weight: 400;
      font-family: Magnat Text;
      font-style: italic;
      src: url(/assets/fonts/MagnatText-RegularItalic.otf) format("opentype");
      font-display: swap;
    }

  /*
    11. Apply theme styles
  */
  :root {
    ${cssVariables}
    ${lightTheme}
  }

  [data-theme="dark"] {
    ${darkTheme}
  }

  body {
    color: var(--colors-highContrast);
    background-color: var(--colors-gray1);
    transition: background var(--theme-transition), color var(--theme-transition);
    -moz-osx-font-smoothing: grayscale;
    font-family: Magnat Text;
  }
`

export default GlobalStyle
