import { ButtonStyle } from "./button.style";
import { ButtonProps } from "./button.types";

export const Button = ({
  children,
  variant = "primary",
  onClick,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <ButtonStyle type={type} onClick={onClick} $variant={variant} {...props}>
      {children}
    </ButtonStyle>
  );
};
