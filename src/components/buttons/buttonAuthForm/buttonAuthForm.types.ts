import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { ButtonVariant } from "@/types/types";

export interface ButtonAuthFormProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  onClick?: () => React.MouseEventHandler<HTMLButtonElement>;
}

export interface StyledButtonProps {
  $variant: ButtonVariant;
}
