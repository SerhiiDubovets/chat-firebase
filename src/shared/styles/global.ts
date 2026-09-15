import { createGlobalStyle } from "styled-components";

import bgEndlessConstellation from "@shared/assets/images/endless-constellation.png";

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
   margin: 0;
   padding: 0;
  }
  
  
  body {
    position: relative;

    min-height: 100dvh;

    background-color: var(--bg-primary);
    
    
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.regular};
    line-height: 1.3;

    color: var(--text-primary);

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

body::before {
 content: "";
  position: fixed;
  inset: 0;

  background-image: url(${bgEndlessConstellation});
  background-repeat: repeat;
  background-size: 200px auto;

  opacity: 0.8;

  pointer-events: none;

}

h1,h2,h3,h4,h5,h6 {
    line-height: 1.3
}

 img {
    max-width: 100%;
    height: auto;
  }

button, input, textarea, select {
  
  border: none;
  outline: none;
   color: inherit;
   background: none;
}

 button, a {
    cursor: pointer;
  }

a {
  color: inherit;
  text-decoration: none;
}

video, canvas, iframe {
  display: block;
  
  max-width: 100%;
  height: auto;
}

:focus {
  outline: none;
}

:focus-visible {
  outline: 2px solid hsl(230, 100%, 70%);
  outline-offset: 2px;
}

::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

::-webkit-scrollbar-thumb {
    background: hsl(230, 5%, 30%);
    border-radius: 4px;
  }

 ::-webkit-scrollbar-track {
    background: transparent;
  }

  #root {
  position: relative;
  z-index: 1;
}
`;
