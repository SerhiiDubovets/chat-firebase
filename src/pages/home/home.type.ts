import React from "react";

import { LinkProps } from "react-router-dom";

import { ButtonVariant } from "@/types/types";

export interface SlideProps {
  $showSlide: boolean;
}

export interface ButtonLinkProps {
  as?:
    | React.ForwardRefExoticComponent<
        LinkProps & React.RefAttributes<HTMLAnchorElement>
      >
    | undefined;
  to: string;
  $variant: ButtonVariant;
}
