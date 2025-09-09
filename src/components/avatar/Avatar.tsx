import defaultAvatar from "@/assets/avatar.png";
import { AvatarStyle } from "./avatar.style";
import { AvatarProps } from "./avatar.types";

export const Avatar = ({
  url,
  alt = "User avatar",
  width = "80px",
  height = "80px",
  size,
  ...props
}: AvatarProps) => {
  const finalWidth = size || width;
  const finalHeight = size || height;
  return (
    <AvatarStyle
      {...props}
      loading="lazy"
      width={finalWidth}
      height={finalHeight}
      $width={finalWidth}
      $height={finalHeight}
      src={url || defaultAvatar}
      alt={alt || "User avatar"}
      title={alt}
      aria-label={alt}
    />
  );
};
