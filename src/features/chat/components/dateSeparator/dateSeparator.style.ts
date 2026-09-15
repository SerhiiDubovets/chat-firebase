import styled from "styled-components";

export const SeparatorWrap = styled.div`
  align-self: center;

  margin-block: 1rem;
  margin-inline: 0;
  padding-inline: 0.75rem;
  padding-block: 0.25rem;

  border-radius: 1rem;

  background: var(--bg-separator);
`;

export const DataText = styled.p`
  color: var(--text-separator-mute);
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
