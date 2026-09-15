import styled from "styled-components";

import { flex, layout } from "@shared/styles/mixins/mixins";

export const SectionWrap = styled.div`
  ${layout.section}
  ${flex.column}

  gap: 0.5rem;
`;

export const ItemWrap = styled.div`
  ${flex.row}
  gap: 1rem;

  padding-inline: 0.75rem;
  padding-block: 0.5rem;

  border-radius: ${({ theme }) => theme.radii.lg};

  cursor: pointer;

  transition: all ${({ theme }) => theme.transition.normal};

  &:hover,
  &:focus {
    background-color: var(--hover-primary);
  }
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};

  color: var(--text-primary);
`;

export const SubText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};

  color: var(--text-primary-mute);
`;
