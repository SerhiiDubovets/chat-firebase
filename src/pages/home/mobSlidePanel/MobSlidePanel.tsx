import { AnimatePresence } from "framer-motion";

import { LogoGreen } from "@shared/ui/logo/Logo";

import BlockSignBtn from "../blockSignBtn/BlockSignBtn";

import {
  BlurOverlay,
  LeavesBottomStyle,
  LeavesTopStyle,
  SlideBlockStyle,
  SlideLogoStyle,
  SlideTextStyle,
  SlideWrapper,
} from "./mobSlidePanel.style";
import { MobSlidePanelProps } from "./mobSlidePanel.types";

const MobSlidePanel = ({ open = false, onOpenChange }: MobSlidePanelProps) => {
  const close = () => onOpenChange?.(false);

  return (
    <AnimatePresence>
      {open && (
        <>
          <BlurOverlay
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          />
          <SlideWrapper
            key="slide"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}>
            <LeavesTopStyle />
            <SlideBlockStyle>
              <SlideLogoStyle>
                <LogoGreen />
              </SlideLogoStyle>
              <SlideTextStyle>
                Never forget to go green everyday, because the greener you go
                the higher you get
              </SlideTextStyle>
              <BlockSignBtn />
            </SlideBlockStyle>
            <LeavesBottomStyle />
          </SlideWrapper>
        </>
      )}
    </AnimatePresence>
  );
};
export default MobSlidePanel;
