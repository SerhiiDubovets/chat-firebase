import { useState } from "react";

import { Icon } from "@/components/icon/Icon";
import { AngleRightIcon } from "@/icons/icons";
import {
  SectionMediaBtnStyle,
  SectionMediaStyle,
  SectionMediaTitleStyle,
} from "./sectionMedia.style";

export const SectionMedia = () => {
  const [open, setOpen] = useState(false);
  return (
    <SectionMediaStyle>
      <SectionMediaBtnStyle
        $open={open}
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}>
        <SectionMediaTitleStyle>
          Media, Links and Documents
        </SectionMediaTitleStyle>
        <Icon size="0.625rem" color="#a4a5a7">
          <AngleRightIcon aria-hidden={true} />
        </Icon>
      </SectionMediaBtnStyle>
      {open && <div>open</div>}
    </SectionMediaStyle>
  );
};
