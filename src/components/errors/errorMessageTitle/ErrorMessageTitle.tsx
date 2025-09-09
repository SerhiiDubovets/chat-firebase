import { ErrorMessageTitleStyle } from "./errorMessageTitle.style";

import { ErrorMessageTitleProps } from "./errorMessageTitle.types";

export const ErrorMessageTitle = ({ children }: ErrorMessageTitleProps) => {
  return <ErrorMessageTitleStyle>{children}</ErrorMessageTitleStyle>;
};
