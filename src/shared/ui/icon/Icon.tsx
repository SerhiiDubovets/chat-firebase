import { getIconSize } from "@shared/styles/theme/resolvers/iconSize";

import * as S from "./icon.style";
import { IconProps } from "./icon.types";

export const Icon = ({ children, colorIcon, size, ...props }: IconProps) => {
  const iconSize = getIconSize(size);

  return (
    <S.Wrap {...props} $size={iconSize} $color={colorIcon}>
      {children}
    </S.Wrap>
  );
};
