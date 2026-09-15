import styled from "styled-components";

import { IconStyleProps } from "./icon.types";

export const Wrap = styled.div<IconStyleProps>`
  width: ${(p) => p.$size};
  height: ${(p) => p.$size};

  flex-shrink: 0;

  color: ${(p) => p.$color};

  & svg {
    display: block;

    width: 100%;
    height: auto;

    fill: currentColor;
  }
`;
