import * as S from "./authHeader.style";
import { AuthHeaderProps } from "./authHeader.types";

const AuthHeader = ({ title, children }: AuthHeaderProps) => {
  return (
    <S.Header>
      <S.Title>{title}</S.Title>
      {children && <S.SubTitle>{children}</S.SubTitle>}
    </S.Header>
  );
};

export default AuthHeader;
