import { FormProps } from "@shared/types/common.types";

import { AuthFormStyle } from "./authForm.style";

export const AuthForm = ({ children, onSubmit }: FormProps) => {
  return <AuthFormStyle onSubmit={onSubmit}>{children}</AuthFormStyle>;
};
