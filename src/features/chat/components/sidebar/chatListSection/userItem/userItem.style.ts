import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { ellipsisText, flex, layout } from "@shared/styles/mixins/mixins";

import { UserItemStyleProps } from "./userItem.types";

export const ItemWrap = styled.li`
  list-style: none;
`;

export const ItemLink = styled(NavLink)<UserItemStyleProps>`
  ${layout.section}
  display: flex;
  gap: 0.5rem;

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

export const DialogWrap = styled.div`
  ${flex.column}
  gap: 0.25rem;
  width: 100%;
  min-width: 0;
`;

export const TitleNameWrap = styled.div`
  ${flex.spaceBetween}
`;

export const TitleName = styled.p`
  flex: 1;

  min-width: 0;

  ${ellipsisText}
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.md};
`;

export const MessageTime = styled.p`
  flex-shrink: 0;

  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 0.875rem;

  color: var(--text-primary-mute);
`;

export const LastMessageWrap = styled.div`
  ${flex.row}
  gap: 0.25rem;
`;

export const Subtitle = styled.p`
  display: block;
  max-width: 100%;

  ${ellipsisText}
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-size: 0.875rem;

  color: var(--text-primary-mute);
`;

export const DraftTitle = styled.span`
  font-size: 0.875rem;

  color: hsl(0, 100%, 50%);
`;
