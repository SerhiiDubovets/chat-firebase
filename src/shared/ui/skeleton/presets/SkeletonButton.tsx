import { Skeleton } from "../Skeleton";
import { SkeletonProps } from "../skeleton.types";

export const SkeletonButton = (props: SkeletonProps) => (
  <Skeleton
    width="100%"
    height="2.5rem"
    radius="0.5rem"
    marginBEnd="0rem"
    {...props}
  />
);
