import { getAvatarSize } from "@shared/styles/theme/resolvers/avatarSize";

import { Skeleton } from "../Skeleton";
import { SkeletonProps } from "../skeleton.types";

export const SkeletonAvatar = ({
  size = "3.25rem",
  ...props
}: SkeletonProps) => {
  const avatarSize = getAvatarSize(size);

  return (
    <Skeleton width={avatarSize} height={avatarSize} radius="50%" {...props} />
  );
};
