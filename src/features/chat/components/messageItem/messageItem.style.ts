import styled from "styled-components";

import { flex } from "@shared/styles/mixins/mixins";
import { ButtonIcon } from "@shared/ui/buttons/buttonIcon/ButtonIcon";

import { MessageStyleProps } from "./messageItemProps.types";

export const MessageWrap = styled.div<MessageStyleProps>`
  position: relative;

  ${flex.column}
  gap: 0.625rem;
  max-width: 70%;
  align-self: ${({ $own }) => ($own ? "flex-end;" : "flex-start;")};
`;

export const ImageWrap = styled.div`
  max-width: 12.5rem;
  border-radius: ${({ theme }) => theme.radii.md};
  overflow: hidden;
`;

export const ButtonMenuOption = styled(ButtonIcon)<MessageStyleProps>`
  position: absolute;
  inset-inline-end: 0.125rem;
  inset-block-start: 0.25rem;

  padding: 0.25rem;
`;

export const OptionsWrap = styled.div`
  z-index: 10;

  ${flex.column}
  gap: 0.125rem;
  min-width: 12.5rem;
  padding: 0.375rem;

  background-color: var(--bg-secondary);
  border-radius: ${({ theme }) => theme.radii.lg};

  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export const ButtonCloseOptions = styled(ButtonIcon)`
  position: absolute;
  inset-inline-end: 0;
  inset-block-start: 0;
`;

export const ButtonOption = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  width: 100%;
  min-height: 2.5rem;
  padding-inline: 0.75rem;
  padding-block: 0.5rem;

  border: 0;
  border-radius: ${({ theme }) => theme.radii.lg};

  background-color: transparent;
  color: var(--text-primary);

  font: inherit;
  text-align: start;

  transition:
    background-color ${({ theme }) => theme.transition.fast},
    color ${({ theme }) => theme.transition.fast};

  &:hover,
  &:focus-visible {
    background-color: var(--hover-primary);
    outline: none;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const TimeMessage = styled.span<MessageStyleProps>`
  position: absolute;
  right: 0.3rem;
  bottom: 0.063rem;

  display: block;
  text-align: end;
  font-size: ${({ theme }) => theme.fontSizes.xs};

  color: ${({ $own }) =>
    $own ? "var(--bubble-data-outgoing)" : "var(--bubble-data-incoming)"};
`;
