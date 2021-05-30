import { createGlobalStyle } from "styled-components";
import stars from "../assets/background-stars.svg";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: var(--font-family);
  background-color: var(--color-background);
  background-image: url(${stars});
  color: hsl(var(--color-white));
}

/* Remove list styles on ul, ol elements which suggests default styling will be removed */
ul,
ol {
  list-style: none;
}

a {
  text-decoration-skip-ink: auto;
  text-decoration: none;
  color: var(--color-white);
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

//CSS VARIABLES
:root {
  --font-weight-bold: 700;
  --font-weight-medium: 500;
  --font-weight-light: 400;

  --font-family: 'Spartan', sans-serif;
  --font-family-antonio: 'Antonio', sans-serif;

  --color-white: 0, 0%, 100%;
  --color-background: #070724;
  --color-mercury: #DEF4FC;
  --color-venus: #F7CC7F;
  --color-earth: #545BFE;
  --color-mars: #FF6A45;
  --color-jupiter: #ECAD7A;
  --color-saturn: #FCCB6B;
  --color-uranus: #65F0D5;
  --color-neptune: #2d68f0;
}
`;
export default GlobalStyle;
