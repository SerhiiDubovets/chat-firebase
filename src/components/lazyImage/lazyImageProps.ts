import React from "react";

export interface LazyImageProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt?: string;
}

export interface StyledImgProps {
  $loaded: boolean;
}
