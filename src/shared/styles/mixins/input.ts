// shared/styles/input.ts
import { css } from "styled-components";

export const input = {
  text: css`
    width: 100%;

    padding-block: ${({ theme }) => theme.space[3]};
    padding-inline-start: ${({ theme }) => theme.space[3]};
    padding-inline-end: ${({ theme }) => theme.space[9]};

    border: 1px solid var(--bg-input);
    border-radius: ${({ theme }) => theme.radii.lg};

    background-color: var(--bg-input);
    color: var(--text-primary);

    transition: all ${({ theme }) => theme.transition.normal};

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-text-fill-color: var(--text-primary);
      caret-color: var(--text-primary);

      transition:
        background-color 9999s ease-out,
        color 9999s ease-out;
    }

    &:hover,
    &:focus {
      border-color: var(--bg-primary);
      outline: none;
    }

    &::placeholder {
      color: var(--text-secondary-mute);
      opacity: 1;
    }

    &:focus::placeholder {
      opacity: 0;
    }
  `,

  file: css`
    position: absolute;
    opacity: 0;
    inset-block-start: 0;
    inset-inline-start: 0;
    width: 1px;
    height: 1px;
  `,
};
