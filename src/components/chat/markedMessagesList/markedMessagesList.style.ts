import styled from "styled-components";

import { ButtonIcon } from "@/components/buttons/buttonIcon/ButtonIcon";
import { BubbleStyle } from "@/components/messageBubble/messageBubble.style";

export const MarkedMessageStyle = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  gap: 0.313rem;
  max-width: 28.125rem;
`;

export const MarkedMessageBlockStyle = styled(BubbleStyle)`
  border-top-left-radius: 0.25rem;

  &::after {
    display: none;
  }
`;

export const MarkedMessageDeleteIconStyle = styled(ButtonIcon)`
  position: absolute;
  inset-inline-end: -1.875rem;
  inset-block-start: -0.125rem;
`;
