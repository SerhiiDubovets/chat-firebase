import styled from "styled-components";

export const Title = styled.h2`
  padding-inline: 24px;
  padding-block: 12px;

  font-size: 20px;
  font-weight: 400;
  line-height: 1.33;
  font-family: ${({ theme }) => theme.fonts.heading};
`;
