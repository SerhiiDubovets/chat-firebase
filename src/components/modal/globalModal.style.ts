import styled from "styled-components";

import { ButtonIcon as ButtonClose } from "@/components/buttons/buttonIcon/ButtonIcon";

export const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;

  background-color: rgba(0, 0, 0, 0.6);
`;

export const ContentStyle = styled.div`
  position: relative;
  padding-inline: 1.75rem;
  padding-block: 1.75rem;
  border-radius: 0.75rem;
  min-width: 18.75rem;

  background: white;
`;

export const ButtonCloseStyle = styled(ButtonClose)`
  position: absolute;
  inset-block-start: 0.25rem;
  inset-inline-end: 0.25rem;
`;
