import { ErrorMessage } from "@hookform/error-message";
import { FieldErrors } from "react-hook-form";

import { ErrorMessageTitle } from "@shared/ui/errors/errorMessageTitle/ErrorMessageTitle";

interface ServerErrorMessageProps {
  errors: FieldErrors;
}

export const ServerErrorMessage = ({ errors }: ServerErrorMessageProps) => {
  return (
    <ErrorMessage
      errors={errors}
      name="root.serverError"
      render={({ message }) => <ErrorMessageTitle>{message}</ErrorMessageTitle>}
    />
  );
};
