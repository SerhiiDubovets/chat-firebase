import { motion } from "framer-motion";
import styled from "styled-components";

import { flex } from "@shared/styles/mixins/mixins";

export const Sidebar = styled.aside`
  position: relative;
  ${flex.column}

  height: 100dvh;

  border-start-end-radius: ${({ theme }) => theme.radii.surface};
  border-end-end-radius: ${({ theme }) => theme.radii.surface};

  background-color: var(--bg-secondary);
  overflow: hidden;
`;

export const Screen = styled(motion.div)`
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;

  background: var(--bg-secondary);
  will-change: transform;
`;

export const ListWrap = styled.div`
  ${flex.column}
  overflow: auto;
  height: 100%;
`;

export const SidebarWrap = styled.div`
  position: absolute;
  height: 80%;
  width: 100%;
`;

export const Settings = styled.div`
  position: absolute;
  left: 0;
  top: 40px;
  background-color: aqua;
  height: 80dvh;
  width: 100%;
`;
