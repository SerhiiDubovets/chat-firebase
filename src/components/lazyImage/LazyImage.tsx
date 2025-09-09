import { useState } from "react";
import { StyledImg } from "./lazyImage.style";
import { LazyImageProps } from "./lazyImageProps";

export const LazyImage = ({ src, alt = "", ...props }: LazyImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <StyledImg
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      $loaded={loaded}
      {...props}
    />
  );
};
