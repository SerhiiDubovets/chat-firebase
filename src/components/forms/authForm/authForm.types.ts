import { FormEventHandler, ReactNode } from "react";

export interface AuthFormProps {
  children: ReactNode;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}
