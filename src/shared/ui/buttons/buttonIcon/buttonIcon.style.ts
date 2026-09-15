import styled from "styled-components";

import { flex } from "@shared/styles/mixins/mixins";

import { ButtonIconStyleProps } from "./buttonIcon.types";

export const Button = styled.button<ButtonIconStyleProps>`
  ${flex.center}

  min-width: ${(p) => p.$size};
  min-height: ${(p) => p.$size};

  padding: ${({ theme }) => theme.space[2]};

  border-radius: 50%;

  color: ${(p) => p.$color ?? "var(--text-primary)"};

  text-decoration: none;

  background-color: transparent;

  transition: all ${({ theme }) => theme.transition.normal};
  &:disabled {
    cursor: not-allowed;
  }
  &:hover,
  &:focus {
    background-color: var(--hover-primary);
  }
`;
