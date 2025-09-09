import styled from "styled-components";

import { IconStyleProps } from "./icon.types";

export const IconStyle = styled.div<IconStyleProps>`
  & svg {
    display: block;
    height: ${(p) => p.$height};
    width: ${(p) => p.$width};

    fill: ${(p) => p.$color};
  }
`;
