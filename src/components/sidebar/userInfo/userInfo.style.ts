import styled from "styled-components";

import { flexSpaceBetween } from "@/styles/mixins";
import { ContainerBlockStyle } from "@/styles/sharedStyles";

export const UserInfoStyle = styled(ContainerBlockStyle)`
  ${flexSpaceBetween}
`;

export const UserStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const UserNameStyle = styled.h2`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5;

  color: #fff;
`;

export const BlockBtnStyle = styled.div`
  display: flex;
  gap: 1rem;
`;
