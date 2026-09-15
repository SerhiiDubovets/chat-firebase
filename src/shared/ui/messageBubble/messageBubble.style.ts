import styled, { css } from "styled-components";

import { flex } from "@shared/styles/mixins/mixins";

import { MessageBubbleStyleProps } from "./messageBubble.types";

const getColors = (props: MessageBubbleStyleProps) => {
  if (props.$own) {
    return {
      bg: "var(--bubble-outgoing)",
      text: "var(--text-primary)",
    };
  }

  return {
    bg: "var(--bubble-incoming)",
    text: "var(--text-primary)",
  };
};

export const Wrap = styled.div<MessageBubbleStyleProps>`
  position: relative;

  width: fit-content;
  max-width: clamp(120px, 70%, 500px);

  ${flex.column}

  align-self: ${({ $own }) => ($own ? "flex-end" : "flex-start")};
  gap: 0.313rem;

  padding-inline-end: 2rem;
  padding-inline-start: 1rem;
  padding-block: 1rem;

  font-size: 1rem;
  line-height: 1.5;

  ${({ ...props }) => {
    const colors = getColors(props);

    return css`
      background: ${colors.bg};
      color: ${colors.text};
    `;
  }}

  border-radius: ${({ $own, theme }) =>
    $own ? theme.radii.bubbleOut : theme.radii.bubbleIn};

  word-break: break-word;
  overflow-wrap: anywhere;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;

    width: 0.875rem;
    height: 0.875rem;

    background: inherit;

    ${({ $own }) =>
      $own
        ? css`
            right: -5px;
            border-bottom-left-radius: 0.75rem;
            transform: translateY(50%) rotate(-45deg);
          `
        : css`
            left: -5px;
            border-bottom-right-radius: 0.75rem;
            transform: translateY(50%) rotate(45deg);
          `}
  }
`;
