import styled from "styled-components";

import { flex, layout } from "@shared/styles/mixins/mixins";

export const Wrap = styled.header`
  ${flex.spaceBetween}
  ${layout.section}
  height: 4rem;
`;

export const Title = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.md};
`;
