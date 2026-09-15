import styled from "styled-components";

export const Status = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.regular};

  color: var(--text-primary-mute);
`;
