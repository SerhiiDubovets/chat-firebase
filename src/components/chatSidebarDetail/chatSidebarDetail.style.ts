import styled from "styled-components";

import { containerBlock, flexSpaceBetween } from "@/styles/mixins";
import { ButtonIcon } from "../buttons/buttonIcon/ButtonIcon";

export const ChatSidebarDetailStyle = styled.aside`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const ChatSidebarDetailTitleBlockStyle = styled.div`
  ${flexSpaceBetween}
  ${containerBlock}
  height: 4rem;
  padding-inline: 1.5rem;

  border-bottom: 1px solid hsla(0, 0%, 86.7%, 0.21);
`;

export const ChatSidebarDetailTitleStyle = styled.h2`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5;
`;

export const ChatSidebarDetailWrapInfoStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: auto;
`;

export const ChatSidebarDetailCloseBtnStyle = styled(ButtonIcon)`
  position: absolute;
  inset-block-start: 1.25rem;
  inset-inline-end: 1.5rem;
`;

export const WrapBanBtnStyle = styled.div`
  ${containerBlock}
`;

export const ChatSidebarDetailBanBtnStyle = styled.button`
  width: 100%;
  padding-block: 0.75rem;
  padding-inline: 0.75rem;

  background-color: rgba(230, 74, 105, 0.553);
  border-radius: 0.25rem;

  &:hover,
  &:focus {
    background-color: rgba(220, 20, 60, 0.796);
  }
`;
