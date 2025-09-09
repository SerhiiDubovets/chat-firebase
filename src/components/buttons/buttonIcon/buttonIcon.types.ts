import { ButtonHTMLAttributes, ReactNode } from "react";

import { CSSLength } from "@/types/css.types";

export interface ButtonIconProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  width?: CSSLength;
  widthIcon?: CSSLength;
  height?: CSSLength;
  heightIcon?: CSSLength;
  colorIcon?: string;
  sizeIcon?: CSSLength;
  size?: CSSLength;
}

export interface ButtonIconStyleProps {
  $width?: CSSLength;
  $height?: CSSLength;
  disabled?: boolean;
}
