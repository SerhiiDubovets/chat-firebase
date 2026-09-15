import { css } from "styled-components";

export const layout = {
  page: css`
    display: flex;
    flex-direction: column;

    min-height: 100dvh;
  `,

  container: css`
    width: min(95%, ${({ theme }) => theme.sizes.container});

    margin-inline: auto;
  `,

  infoSection: css`
    padding-inline: 1.5rem;
    padding-block: 1.5rem;
  `,

  section: css`
    padding-inline: 1rem;
    padding-block: 0.75rem;
  `,
};

export const typography = {
  sectionTitle: css`
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  `,

  emptyState: css`
    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: ${({ theme }) => theme.fontWeights.medium};
  `,

  entityTitle: css`
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  `,
};

export const scrollContainer = css`
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
`;

export const flex = {
  row: css`
    display: flex;
    align-items: center;
  `,

  start: css`
    display: flex;
    align-items: flex-start;
  `,

  end: css`
    display: flex;
    align-items: flex-end;
  `,

  center: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  column: css`
    display: flex;
    flex-direction: column;
  `,

  columnCenter: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  columnSpaceBetween: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,

  spaceBetween: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
  `,
};

export const ellipsisText = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const lineClamp = (lines: number) => css`
  display: -webkit-box;
  -webkit-line-clamp: ${lines};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const form = {
  messageForm: css`
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;

    width: 100%;
  `,
};
