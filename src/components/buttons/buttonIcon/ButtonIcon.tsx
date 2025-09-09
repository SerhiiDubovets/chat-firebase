import { Icon } from "@/components/icon/Icon";

import { ButtonIconStyle } from "./buttonIcon.style";

import { ButtonIconProps } from "./buttonIcon.types";

export const ButtonIcon = ({
  children,
  onClick,
  width = "24px",
  widthIcon,
  height = "24px",
  heightIcon,
  disabled,
  colorIcon,
  sizeIcon,
  size,
  type = "button",
  ...props
}: ButtonIconProps) => {
  return (
    <ButtonIconStyle
      type={type}
      onClick={onClick}
      $width={width || size}
      $height={height || size}
      disabled={disabled}
      {...props}>
      <Icon
        width={widthIcon}
        height={heightIcon}
        size={sizeIcon}
        color={colorIcon}>
        {children}
      </Icon>
    </ButtonIconStyle>
  );
};
