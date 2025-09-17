import { CSSLength } from "@/types/css.types";

export interface SkeletonProps {
  width?: CSSLength;
  height?: CSSLength;
  marginBEnd?: CSSLength;
  radius?: CSSLength;
  variant?: "rect" | "circle" | "text";
  fullWidth?: boolean;
  speed?: string;
}
export interface SkeletonStyleProps {
  $width?: CSSLength;
  $height?: CSSLength;
  $marginBEnd?: CSSLength;
  $radius?: CSSLength;
  $variant?: "rect" | "circle" | "text";
  $fullWidth?: boolean;
  $speed?: string;
}
