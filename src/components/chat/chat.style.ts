import styled from "styled-components";

import { flexCenter, flexSpaceBetween } from "@/styles/mixins";
import { ContainerBlockStyle } from "@/styles/sharedStyles";
import { ButtonIcon } from "../buttons/buttonIcon/ButtonIcon";

export const ChatStyle = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  height: 100vh;

  border-right: 1px solid hsla(0, 0%, 86.7%, 0.21);
`;

export const TopChatStyle = styled(ContainerBlockStyle)`
  ${flexSpaceBetween}
  height: 4rem;

  border-bottom: 1px solid hsla(0, 0%, 86.7%, 0.21);
`;

export const UserStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 1.25rem;
`;

export const TextStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.313rem;

  & span {
    font-size: 1.125rem;
    font-weight: bold;
  }
  & p {
    font-size: 0.875rem;
    font-weight: 300;
    color: hsl(0, 0%, 64.7%);
  }
`;

export const IconsStyle = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const MessageBlockStyle = styled.div`
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
  padding-block: 1.25rem;
  padding-inline: 2.375rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const CenterChatStyle = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  flex: 1;

  border-bottom: 1px solid hsla(0, 0%, 86.7%, 0.21);

  overflow: auto;
`;

export const CloseButtonIconStyle = styled(ButtonIcon)`
  position: absolute;
  inset-block-start: 0.625rem;
  inset-inline-end: 0.625rem;

  z-index: 10;
`;

export const SelectChatStyle = styled.div`
  ${flexCenter}
  margin-block: auto;
  padding-inline: 3.125rem;

  text-align: center;

  & p {
    font-size: 3.125rem;
    font-weight: 300;
    color: hsl(0, 0%, 64.7%);
  }
`;
