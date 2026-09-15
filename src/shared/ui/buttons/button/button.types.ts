import React, { ButtonHTMLAttributes, ReactNode } from "react";

import { ButtonVariant } from "@shared/types/common.types";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface StyledButtonProps {
  $variant: ButtonVariant;
}
