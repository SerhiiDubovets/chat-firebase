import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Wrap = styled.div`
  display: inline-flex;

  animation: ${spin} 0.8s linear infinite;
`;
