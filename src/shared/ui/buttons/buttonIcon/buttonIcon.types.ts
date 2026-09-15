import { ButtonHTMLAttributes, ReactNode } from "react";

import { buttonSizes } from "@shared/styles/theme/tokens/buttonIconSizes";
import { CSSLength } from "@shared/types/css.types";

import { IconSizeProp } from "../../icon/icon.types";

export type ButtonIconSize = keyof typeof buttonSizes;

export type ButtonIconSizeProp = ButtonIconSize | CSSLength;

export interface ButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;

  color?: string;
  size?: ButtonIconSizeProp;
  sizeIcon?: IconSizeProp;
}

export interface ButtonIconStyleProps {
  $size?: ButtonIconSizeProp;
  $color?: string;
  disabled?: boolean;
}
