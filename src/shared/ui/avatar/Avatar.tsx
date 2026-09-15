import { useEffect, useState } from "react";

import defaultAvatar from "@shared/assets/images/avatar.png";
import { getAvatarSize } from "@shared/styles/theme/resolvers/avatarSize";

import * as S from "./avatar.style";
import { AvatarProps } from "./avatar.types";

export const Avatar = ({
  url,
  alt = "User avatar",
  size,
  ...props
}: AvatarProps) => {
  const [imgSrc, setImgSrc] = useState(url || defaultAvatar);

  useEffect(() => {
    setImgSrc(url || defaultAvatar);
  }, [url]);

  const avatarSize = getAvatarSize(size);

  return (
    <S.Avatar
      {...props}
      loading="lazy"
      $size={avatarSize}
      src={imgSrc}
      alt={alt || "User avatar"}
      title={alt}
      onError={() => setImgSrc(defaultAvatar)}
    />
  );
};
