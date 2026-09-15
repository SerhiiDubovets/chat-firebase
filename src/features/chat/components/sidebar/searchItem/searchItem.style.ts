import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { ellipsisText, flex, layout } from "@shared/styles/mixins/mixins";

export const ItemWrap = styled.li`
  list-style: none;
`;

export const ItemLink = styled(NavLink)`
  ${layout.section}
  ${flex.spaceBetween}

  border-start-start-radius: ${({ theme }) => theme.radii.full};
  border-end-start-radius: ${({ theme }) => theme.radii.full};

  color: var(--text-primary);

  transition: all ${({ theme }) => theme.transition.normal};

  &:hover,
  &:focus {
    background-color: var(--hover-primary);
    color: var(--text-primary);
  }

  &.active {
    background-color: var(--bg-primary);
    color: var(--text-secondary);
  }
`;

export const UserDetail = styled.div`
  ${flex.row}
  gap: 0.5rem;
`;

export const UserName = styled.p`
  flex: 1;

  min-width: 0;

  ${ellipsisText}
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.md};
`;
