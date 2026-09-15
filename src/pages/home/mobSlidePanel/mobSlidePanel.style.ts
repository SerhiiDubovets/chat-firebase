import { motion } from "framer-motion";
import styled from "styled-components";

import leavesTop from "@shared/assets/images/leaves_mob_1.png";
import leavesBottom from "@shared/assets/images/leaves_mob_2.png";
import { flex } from "@shared/styles/mixins/mixins";

export const SlideWrapper = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;
  height: 80%;
  z-index: 10;

  border-top-left-radius: 24px;
  border-top-right-radius: 24px;

  overflow: hidden;

  background: hsla(0, 0%, 100%);

  border: 1px solid rgba(255, 255, 255, 0.3);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const BlurOverlay = styled(motion.div)`
  position: absolute;
  inset: 0;
  backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.2);
  z-index: 5;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const SlideBlockStyle = styled.div`
  ${flex.columnCenter}

  width: 15.6rem;
  margin: 0 auto;
`;

export const SlideTextStyle = styled.p`
  margin-block-end: 2.5rem;

  font-weight: 400;
  font-size: 0.75rem;
  text-align: center;

  color: #444;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const LeavesTopStyle = styled.div`
  position: absolute;
  top: -5px;
  left: 0;

  width: 55px;
  height: 75px;

  background: url(${leavesTop}) no-repeat center 100% / cover;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const LeavesBottomStyle = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 80px;
  height: 70px;

  background: url(${leavesBottom}) no-repeat center 100% / cover;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const SlideLogoStyle = styled.div`
  margin-block-start: 1rem;
  margin-block-end: 1rem;

  & svg {
    width: 6.25rem;
    height: 6.25rem;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
