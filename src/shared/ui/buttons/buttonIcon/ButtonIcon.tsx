import { forwardRef } from "react";

import { getButtonSize } from "@shared/styles/theme/resolvers/buttonIconSize";
import { Icon } from "@shared/ui/icon/Icon";

import * as S from "./buttonIcon.style";
import { ButtonIconProps } from "./buttonIcon.types";

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  (
    {
      children,
      onClick,
      disabled,
      color,
      sizeIcon,
      size,
      type = "button",
      ...props
    },
    ref,
  ) => {
    const buttonSize = getButtonSize(size);

    return (
      <S.Button
        ref={ref}
        type={type}
        onClick={onClick}
        $size={buttonSize}
        $color={color}
        disabled={disabled}
        {...props}>
        <Icon size={sizeIcon}>{children}</Icon>
      </S.Button>
    );
  },
);

ButtonIcon.displayName = "ButtonIcon";
