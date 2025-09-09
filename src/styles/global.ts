import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
   "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}


body {
   min-height: 100vh;
   background-color:hsl(230, 9.70%, 12.20%);
   
   color: #ffffff;
   
   font-size: 1rem;
   font-weight: 400;
   line-height: 1.43;

     -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

 img {
    max-width: 100%;
    height: auto;
  }

button, input, textarea, select {
   font: inherit;
   color: inherit;
   background: none;
   border: none;
   outline: none;
}

 button {
    cursor: pointer;
  }

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
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
`;
