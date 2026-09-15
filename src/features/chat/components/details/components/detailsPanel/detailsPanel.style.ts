import { motion } from "framer-motion";
import styled from "styled-components";

import { flex, layout } from "@shared/styles/mixins/mixins";
import { ButtonIcon } from "@shared/ui/buttons/buttonIcon/ButtonIcon";

export const DetailWrap = styled(motion.aside)`
  ${flex.column}

  height: 100dvh;

  border-start-start-radius: ${({ theme }) => theme.radii.surface};
  border-end-start-radius: ${({ theme }) => theme.radii.surface};
  box-shadow: ${({ theme }) => theme.shadows.sideRight};
  background-color: var(--bg-secondary);
  overflow: hidden;

  position: absolute;
  inset-inline-end: 0px;
  inset-block-start: 0px;
  z-index: ${({ theme }) => theme.zIndex.sidebarRight};

  width: ${({ theme }) => theme.sizes.sidePanel};
  will-change: transform;
`;

export const InfoWrap = styled.div`
  ${flex.column}
  flex: 1;
  min-height: 0;
  overflow: auto;
`;

export const CloseBtn = styled(ButtonIcon)`
  position: absolute;
  inset-block-start: 0.75rem;
  inset-inline-end: 1rem;
`;

export const BanBtnWrap = styled.div`
  ${layout.section}
`;

export const BanBtn = styled.button`
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
