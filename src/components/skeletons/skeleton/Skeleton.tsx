import { SkeletonStyle } from "./skeleton.style";
import { SkeletonProps } from "./skeleton.types";

export const Skeleton = ({
  width = "100%",
  height = "1.75rem",
  marginBEnd = "0.75rem",
  variant = "rect",
  speed = "1.5s",
  fullWidth = false,
  radius = "0.25rem",
  ...props
}: SkeletonProps) => {
  return (
    <SkeletonStyle
      $width={fullWidth ? "100%" : width}
      $height={height}
      $marginBEnd={marginBEnd}
      $radius={variant === "circle" ? "50%" : radius}
      $speed={speed}
      {...props}
    />
  );
};
