import { SubTitleStyle, TitleStyle } from "./authHeader.style";

import { AuthHeaderProps } from "./authHeader.types";

const AuthHeader = ({ title, children }: AuthHeaderProps) => {
  return (
    <header>
      <TitleStyle>{title}</TitleStyle>
      {children && <SubTitleStyle>{children}</SubTitleStyle>}
    </header>
  );
};

export default AuthHeader;
