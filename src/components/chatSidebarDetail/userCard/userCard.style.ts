import styled from "styled-components";

import { containerBlockInfo, flexColumn } from "@/styles/mixins";

export const UserCardStyle = styled.header`
  ${flexColumn}
  ${containerBlockInfo}
  align-items: center;
  gap: 1rem;

  border-bottom: 1px solid hsla(0, 0%, 86.7%, 0.21);
`;

export const UserCardInfoStyle = styled.div`
  text-align: center;
`;

export const UserCardNameStyle = styled.h3`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5;
`;

export const UserCardPhoneStyle = styled.p`
  font-size: 0.875rem;

  color: hsl(220, 1.7%, 64.9%);
`;
