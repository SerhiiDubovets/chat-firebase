import { CSSLength } from "@shared/types/css.types";

import { AvatarProp } from "../avatar/avatar.types";

export interface SkeletonProps {
  width?: CSSLength;
  height?: CSSLength;
  marginBStart?: CSSLength;
  marginBEnd?: CSSLength;
  radius?: CSSLength;
  speed?: string;
  size?: AvatarProp | CSSLength;
}
export interface SkeletonStyleProps {
  $width?: CSSLength;
  $height?: CSSLength;
  $marginBStart?: CSSLength;
  $marginBEnd?: CSSLength;
  $radius?: CSSLength;
  $speed?: string;
  $size?: CSSLength;
}
