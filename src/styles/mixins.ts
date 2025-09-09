import { css } from "styled-components";

export const containerBlock = css`
  padding-inline: 1.5rem;
  padding-block: 0.75rem;
`;

export const containerBlockInfo = css`
  padding-inline: 1.5rem;
  padding-block: 1.5rem;
`;

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const flexSpaceBetween = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const ellipsisText = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
