import styled, { keyframes } from "styled-components";
import { SkeletonStyleProps } from "./skeleton.types";

const shimmer = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`;

export const SkeletonStyle = styled.div<SkeletonStyleProps>`
  width: ${(p) => p.$width};
  height: ${(p) => p.$height};
  margin-block-end: ${(p) => p.$marginBEnd};

  background: linear-gradient(90deg, #c7c7c7 25%, #e3e3e3 50%, #c7c7c7 75%);
  background-size: 200% 100%;
  border-radius: 4px;

  animation: ${shimmer} 1.5s ease-in-out infinite;

  opacity: 0.7;
`;
