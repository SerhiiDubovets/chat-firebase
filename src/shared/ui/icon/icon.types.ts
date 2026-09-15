import { ReactNode } from "react";

import { iconSizes } from "@shared/styles/theme/tokens/iconSizes";
import { CSSLength } from "@shared/types/css.types";

export type IconSize = keyof typeof iconSizes;

export type IconSizeProp = IconSize | CSSLength;

export type IconProps = {
  children: ReactNode;
  size?: IconSizeProp;
  colorIcon?: string;
};

export type IconStyleProps = {
  $size?: IconSizeProp;
  $color?: string;
};
