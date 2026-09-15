import { motion } from "framer-motion";
import styled from "styled-components";

import { layout } from "@shared/styles/mixins/mixins";

export const Screen = styled(motion.div)`
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;

  ${layout.section}

  background: var(--bg-secondary);
  will-change: transform;
`;
