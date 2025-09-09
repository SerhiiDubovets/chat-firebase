import React, { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonAuthSocialProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
