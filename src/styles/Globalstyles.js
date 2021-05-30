import { createGlobalStyle } from "styled-components";
import stars from "../assets/background-stars.svg";

const GlobalStyle = createGlobalStyle`
html {
  --color-white: 0, 0%, 100%;
  --color-background: #070724;
  --color-mercury: #419EBB;
  --color-venus: #EDA249;
  --color-earth: #6f2ed6;
  --color-mars: #D14C32;
  --color-jupiter: #D83A34;
  --color-saturn: #CD5120;
  --color-neptune: #1ec2a4;
  --color-pluto: #2d68f0;
}

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
  font-family: 'Spartan', sans-serif;
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
`;

export default GlobalStyle;
