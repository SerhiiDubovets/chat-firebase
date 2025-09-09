import { ReactNode } from "react";

import { CSSLength } from "@/types/css.types";

export type IconProps = {
  children: ReactNode;
  width?: CSSLength;
  height?: CSSLength;
  size?: CSSLength;
  color?: string;
};

export type IconStyleProps = {
  $size?: CSSLength;
  $width?: CSSLength;
  $height?: CSSLength;
  $color?: string;
};
