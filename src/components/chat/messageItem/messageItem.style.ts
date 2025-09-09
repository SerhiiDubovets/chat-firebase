import styled from "styled-components";

import { ButtonIcon } from "@/components/buttons/buttonIcon/ButtonIcon";
import { MessageStyleProps } from "./messageItemProps.types";

export const MessageStyle = styled.div<MessageStyleProps>`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  max-width: 80%;
  align-self: ${({ $own }) => ($own ? "flex-end;" : "flex-start;")};
`;

export const ButtonMenuOptionIconStyle = styled(ButtonIcon)<MessageStyleProps>`
  position: absolute;
  inset-inline-end: 0.125rem;
  inset-block-start: 0.25rem;
`;

export const MessageBlockOptionsStyle = styled.div`
  position: absolute;
  inset-inline-end: 0.625rem;
  inset-block-start: 0.5rem;
  z-index: 10;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 12.5rem;
  padding-inline-start: 1rem;
  padding-inline-end: 1.5rem;
  padding-block-start: 1.5rem;
  padding-block-end: 1rem;

  background-color: #fff;
  border-radius: 0.25rem;
`;

export const ButtonCloseOptionsStyle = styled(ButtonIcon)`
  position: absolute;
  inset-inline-end: 0;
  inset-block-start: 0;
`;

export const ButtonOptionStyle = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.313rem;
  height: auto;
  width: 100%;
  padding-inline: 0.5rem;
  padding-block: 0.5rem;
  text-decoration: none;

  background-color: hsl(0, 0%, 49%);
  color: hsl(0, 0%, 100%);
  border-radius: 0.25rem;
`;
