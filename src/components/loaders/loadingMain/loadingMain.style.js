import styled from "styled-components";

export const LoadingBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
export const StyledLoading = styled.div`
  place-self: center;
  background: linear-gradient(90deg, #014513, #00ffad, #014513) 100%/ 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font: 900 clamp(2em, 10vw, 10em) exo, sans-serif;
  animation: shimmer 2.5s linear infinite;

  @keyframes shimmer {
    to {
      background-position: -100%;
    }
  }
`;
