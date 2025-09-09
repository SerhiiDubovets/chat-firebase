import { CSSLength } from "@/types/css.types";

export interface AvatarProps {
  url: string | null;
  width?: CSSLength;
  height?: CSSLength;
  size?: CSSLength;
  alt?: string;
}

export interface AvatarStyleProps {
  $width?: CSSLength;
  $height?: CSSLength;
}
