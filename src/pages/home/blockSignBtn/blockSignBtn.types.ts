import React from "react";

import { LinkProps } from "react-router-dom";

import { ButtonVariant } from "@shared/types/common.types";

export interface BlockSignBtnLinkStyleProps {
  as?:
    | React.ForwardRefExoticComponent<
        LinkProps & React.RefAttributes<HTMLAnchorElement>
      >
    | undefined;
  to: string;
  $variant: ButtonVariant;
}
