import styled from "styled-components";

import { flex, layout } from "@shared/styles/mixins/mixins";

export const Wrap = styled.div`
  ${flex.column}
  ${layout.section}
  align-items: center;
  gap: 1rem;
`;

export const InfoWrap = styled.div`
  text-align: center;
`;

export const UserName = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: ${({ theme }) => theme.fontSizes.md};
`;
