import { motion } from "framer-motion";
import styled from "styled-components";

export const EmojiPicker = styled.div`
  position: relative;
`;

export const PickerWrap = styled.div`
  inset-inline-start: 0;
  z-index: 1;
`;

export const PickerAnimation = styled(motion.div)``;

export const PickerScale = styled.div`
  transform: translateY(-8px) scale(0.85);
  transform-origin: bottom left;

  .EmojiPickerReact {
    --epr-bg-color: var(--bg-secondary);
    --epr-category-label-bg-color: var(--bg-secondary);
    --epr-search-input-bg-color: var(--hover-primary);
  }

  .epr-main {
    border-radius: ${({ theme }) => theme.radii.surface};
  }
`;
