import styled from "styled-components";

import { ellipsisText } from "@/styles/mixins";
import { ContainerBlockStyle } from "@/styles/sharedStyles";
import { UserItemStyleProps } from "./userItem.types";

export const UserItemStyle = styled(ContainerBlockStyle).attrs({
  as: "li",
})<UserItemStyleProps>`
  display: flex;
  gap: 1.25rem;

  background-color: ${(props) =>
    props.$selected ? "hsl(240, 4.80%, 8.20%)" : "transparent"};
  cursor: pointer;
`;

export const UserMessageStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
`;

export const NameUserItemStyle = styled.p`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5;

  color: hsl(0, 0%, 100%);
`;

export const UserMessageItemStyle = styled.p`
  display: block;
  max-width: 100%;

  ${ellipsisText}
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;

  color: hsla(0, 0%, 100%, 0.4);
`;
