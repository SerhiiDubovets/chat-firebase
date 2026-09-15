import { avatarSizes } from "@shared/styles/theme/tokens/avatarSizes";
import { CSSLength } from "@shared/types/css.types";

export type AvatarSize = keyof typeof avatarSizes;

export type AvatarProp = AvatarSize | CSSLength;

export interface AvatarProps {
  url: string | null | undefined;

  size?: AvatarProp;
  alt?: string;
}

export interface AvatarStyleProps {
  $size?: AvatarProp;
}
