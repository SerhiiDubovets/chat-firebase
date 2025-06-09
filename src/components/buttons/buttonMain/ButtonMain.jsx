import { StyledButton } from "./buttonMain.style";

export const ButtonMain = ({ children, variant = "primary", ...props }) => {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};
