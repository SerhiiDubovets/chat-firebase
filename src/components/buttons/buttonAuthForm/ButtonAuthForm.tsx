import { ButtonAuthFormStyle } from "./buttonAuthForm.style";
import { ButtonAuthFormProps } from "./buttonAuthForm.types";

export const ButtonAuthForm = ({
  children,
  variant = "primary",
  onClick,
  type = "button",
  ...props
}: ButtonAuthFormProps) => {
  return (
    <ButtonAuthFormStyle
      type={type}
      onClick={onClick}
      variant={variant}
      {...props}>
      {children}
    </ButtonAuthFormStyle>
  );
};
