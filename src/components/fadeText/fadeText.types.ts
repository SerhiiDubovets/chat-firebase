import { ReactNode } from "react";

import { CSSLength } from "@/types/css.types";

export interface FadeTextProps {
  children: ReactNode;
  maxHeight?: CSSLength;
  color?: string;
  bgColor?: string;
}

export interface FadeTextStyleProps {
  $maxHeight?: CSSLength;
  $color?: string;
  $expanded?: boolean;
}

export interface FadeStyleProps {
  $bgColor?: string;
  $expanded?: boolean;
}
