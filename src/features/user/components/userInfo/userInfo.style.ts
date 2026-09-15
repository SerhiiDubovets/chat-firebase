import styled from "styled-components";

import { ContainerBlockStyle } from "@shared/styles/common";
import { flexSpaceBetween } from "@shared/styles/mixins/mixins";

export const Header = styled(ContainerBlockStyle).attrs({
  as: "header",
})`
  ${flexSpaceBetween}
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const UserName = styled.h2`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5;

  color: #fff;
`;

export const BtnWrap = styled.div`
  display: flex;
  gap: 1rem;
`;
