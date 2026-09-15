import styled from "styled-components";

import {
  ellipsisText,
  flex,
  layout,
  typography,
} from "@shared/styles/mixins/mixins";

export const HeaderWrap = styled.div`
  position: absolute;
  inset-inline-start: 50%;
  transform: translateX(-50%);
  z-index: 10;
  ${layout.container}
  ${layout.section}
  ${flex.spaceBetween}
  min-height: 4rem;

  background-color: var(--bg-secondary);
  border-end-end-radius: ${({ theme }) => theme.radii.surface};
  border-end-start-radius: ${({ theme }) => theme.radii.surface};
  filter: drop-shadow(${({ theme }) => theme.shadows.lg});
`;

export const UserWrap = styled.div`
  ${flex.row}
  gap: 1.25rem;
`;

export const InfoWrap = styled.div`
  ${flex.column}
`;

export const UserName = styled.p`
  max-width: 14.5rem;
  min-width: 0;

  ${typography.entityTitle}

  color: var(--text-primary);

  ${ellipsisText}
`;
