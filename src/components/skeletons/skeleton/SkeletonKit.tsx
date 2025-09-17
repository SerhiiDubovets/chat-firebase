import { Skeleton } from "./Skeleton";

export const SkeletonText = (props: any) => (
  <Skeleton variant="text" height="1rem" marginBEnd="0.5rem" {...props} />
);

export const SkeletonAvatar = (props: any) => (
  <Skeleton
    variant="circle"
    width="3.25rem"
    height="3.25rem"
    marginBEnd="1rem"
    {...props}
  />
);

export const SkeletonButton = (props: any) => (
  <Skeleton
    variant="rect"
    width="100%"
    height="2.5rem"
    marginBEnd="1rem"
    {...props}
  />
);

export const SkeletonInput = ({ label = false }, props: any) => (
  <>
    {label && (
      <SkeletonText width="6.25rem" height="1rem" marginBEnd="0.5rem" />
    )}
    <Skeleton fullWidth height="2.5rem" marginBEnd="1.125rem" {...props} />
  </>
);
