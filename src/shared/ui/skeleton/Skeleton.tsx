import { SkeletonStyle } from "./skeleton.style";
import { SkeletonProps } from "./skeleton.types";

export const Skeleton = ({
  width = "100%",
  height = "1rem",
  marginBEnd = "0rem",
  speed = "1.5s",
  radius = "0.25rem",
  marginBStart = "0rem",
  ...props
}: SkeletonProps) => {
  return (
    <SkeletonStyle
      $width={width}
      $height={height}
      $marginBEnd={marginBEnd}
      $marginBStart={marginBStart}
      $radius={radius}
      $speed={speed}
      {...props}
    />
  );
};
