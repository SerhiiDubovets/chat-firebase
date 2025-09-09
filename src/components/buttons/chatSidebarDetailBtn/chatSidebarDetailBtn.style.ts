import styled from "styled-components";

import { flexSpaceBetween } from "@/styles/mixins";

export const ChatSidebarDetailBtnStyle = styled.button`
  ${flexSpaceBetween}
  padding-inline: 0.75rem;
  padding-block: 0.5rem;
  border-radius: 0.25rem;

  background-color: hsl(231, 8.4%, 16.3%);
`;

export const ChatSidebarDetailBtnTitleBlockStyle = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const ChatSidebarDetailBtnTitleStyle = styled.h3`
  font-weight: 400;
  font-size: 0.875rem;

  line-height: 1.43;
`;
