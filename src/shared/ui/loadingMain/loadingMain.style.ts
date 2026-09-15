import styled from "styled-components";

export const LoadingBlockStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  background-color: #1c1d22;
`;

export const LoadingStyle = styled.div`
  background: linear-gradient(90deg, #014513, #00ffad, #014513) 100%/ 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font: 900 clamp(2em, 6vw, 4em) exo, sans-serif;

  animation: shimmer 2.5s linear infinite;

  place-self: center;

  @keyframes shimmer {
    to {
      background-position: -100%;
    }
  }
`;
