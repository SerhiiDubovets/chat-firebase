import styled from "styled-components";

import { flex, form, layout } from "@shared/styles/mixins/mixins";

export const Wrap = styled.div`
  position: absolute;
  inset-block-end: 0;
  inset-inline-start: 50%;
  transform: translateX(-50%);
  z-index: 10;
  ${layout.container}
  ${layout.section}
  padding-block: 0.25rem;
  ${flex.spaceBetween}
  min-height: 4rem;

  background-color: var(--bg-secondary);
  border-start-end-radius: ${({ theme }) => theme.radii.surface};
  border-start-start-radius: ${({ theme }) => theme.radii.surface};
  filter: drop-shadow(${({ theme }) => theme.shadows.lg});
`;

export const Form = styled.form`
  ${form.messageForm}
`;

export const IconsWrap = styled.div`
  ${flex.end}
  gap: 0.25rem;

  padding-block: 0.125rem;

  & label {
    cursor: pointer;
  }
`;
