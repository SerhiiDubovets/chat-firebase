import { IconStyle } from "./icon.style";
import { IconProps } from "./icon.types";

export const Icon = ({
  children,
  width = "1rem",
  height = "1rem",
  color = "#000",
  size,
  ...props
}: IconProps) => {
  return (
    <IconStyle
      {...props}
      $width={size || width}
      $height={size || height}
      $color={color}>
      {children}
    </IconStyle>
  );
};
