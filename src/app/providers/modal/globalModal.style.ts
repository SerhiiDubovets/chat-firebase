import { motion } from "framer-motion";
import styled from "styled-components";

import { flex } from "@shared/styles/mixins/mixins";
import { ButtonIcon as ButtonClose } from "@shared/ui/buttons/buttonIcon/ButtonIcon";

export const Overlay = styled(motion.div)<{ $background?: string }>`
  position: fixed;
  inset: 0;
  z-index: ${({ theme }) => theme.zIndex.modal};

  ${flex.center}

  background-color: ${({ $background }) => $background || "rgba(0, 0, 0, 0.6)"};
`;

export const Content = styled(motion.div)<{ $background?: string }>`
  position: relative;

  min-width: 18.75rem;

  padding-inline: 1.5rem;
  padding-block: 1.5rem;
  border-radius: ${({ theme }) => theme.radii.surface};

  background-color: ${({ $background }) =>
    $background || "var(--bg-secondary)"};
  color: var(--text-primary);
`;

export const CloseBtn = styled(ButtonClose)`
  position: absolute;
  inset-block-start: 0.25rem;
  inset-inline-end: 0.25rem;
`;
