import styled from "styled-components";

import { flexCenter } from "@/styles/mixins";
import { ButtonIconStyleProps } from "./buttonIcon.types";

export const ButtonIconStyle = styled.button<ButtonIconStyleProps>`
  ${flexCenter}
  width: ${(p) => p.$width};
  height: ${(p) => p.$height};

  text-decoration: none;

  background-color: transparent;

  &:disabled {
    cursor: not-allowed;
  }
`;
