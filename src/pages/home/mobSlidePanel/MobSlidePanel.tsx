import { AnimatePresence, motion } from "framer-motion";

import { LogoGreen } from "@/components/logo/Logo";
import {
  LeavesBottomStyle,
  LeavesTopStyle,
  SlideBlockStyle,
  SlideLogoStyle,
  SlideTextStyle,
} from "./mobSlidePanel.style";

import { MobSlidePanelProps } from "./mobSlidePanel.types";

import BlockSignBtn from "../blockSignBtn/BlockSignBtn";

const MobSlidePanel = ({ show }: MobSlidePanelProps) => (
  <AnimatePresence>
    {show && (
      <motion.div
        key="slide"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: "100%", opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          zIndex: 10,
          backgroundColor: "#fff",
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
          overflow: "hidden",
        }}>
        <LeavesTopStyle />
        <SlideBlockStyle>
          <SlideLogoStyle>
            <LogoGreen />
          </SlideLogoStyle>
          <SlideTextStyle>
            Never forget to go green everyday, because the greener you go the
            higher you get
          </SlideTextStyle>
          <BlockSignBtn />
        </SlideBlockStyle>
        <LeavesBottomStyle />
      </motion.div>
    )}
  </AnimatePresence>
);

export default MobSlidePanel;
