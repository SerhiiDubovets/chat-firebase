import { ButtonAuthSocialStyle } from "./buttonAuthSocial.style";
import { ButtonAuthSocialProps } from "./buttonAuthSocial.types";

export const ButtonAuthSocial = ({
  children,
  onClick,
  type = "button",
  ...props
}: ButtonAuthSocialProps) => {
  return (
    <ButtonAuthSocialStyle type={type} onClick={onClick} {...props}>
      {children}
    </ButtonAuthSocialStyle>
  );
};
