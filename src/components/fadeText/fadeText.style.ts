import styled from "styled-components";
import { FadeStyleProps, FadeTextStyleProps } from "./fadeText.types";

export const FadeTextStyle = styled.div<FadeTextStyleProps>`
  position: relative;
  max-height: ${({ $expanded, $maxHeight }) =>
    $expanded ? "none" : $maxHeight};

  overflow: hidden;
  transition: max-height 0.3s ease;
`;

export const Fade = styled.div<FadeStyleProps>`
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2.5rem;
  background: ${({ $expanded, $bgColor }) =>
    $expanded
      ? "transparent"
      : `linear-gradient(to bottom, transparent, ${$bgColor})`};
`;
