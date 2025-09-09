import { SkeletonStyle } from "./skeleton.style";
import { SkeletonProps } from "./skeleton.types";

export const Skeleton = ({
  width = "17.5rem",
  height = "1.75rem",
  marginBEnd = "0.75rem",
  ...props
}: SkeletonProps) => {
  return (
    <SkeletonStyle
      $width={width}
      $height={height}
      $marginBEnd={marginBEnd}
      {...props}
    />
  );
};
