import styled from "styled-components";

import { flex, layout } from "@shared/styles/mixins/mixins";
import { ButtonIcon } from "@shared/ui/buttons/buttonIcon/ButtonIcon";

export const ChatWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 2;

  height: 100vh;
`;

export const MessageWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.313rem;

  border-radius: 0.25rem;

  & span {
    font-size: 0.875rem;
  }

  & img {
    width: 12.5rem;
    height: 100%;
    object-fit: cover;
  }
`;

export const BlockMessageStyle = styled.div`
  ${layout.container}
  margin-block: 4.75rem;
  ${flex.column}
  gap: 1.25rem;
`;

export const Chat = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  flex: 1;

  overflow: auto;
`;

export const CloseButton = styled(ButtonIcon)`
  position: absolute;
  inset-block-start: 0.625rem;
  inset-inline-end: 0.625rem;

  z-index: 10;
`;

export const SelectChat = styled.div`
  ${flex.center}
  margin-block: auto;
  padding-inline: 3.125rem;

  text-align: center;

  & p {
    font-size: 3.125rem;
    font-weight: 300;
    color: hsl(0, 0%, 64.7%);
  }
`;
