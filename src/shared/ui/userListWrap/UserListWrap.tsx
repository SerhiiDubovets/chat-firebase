import * as S from "./userListWrap.style";
import { UserListWrapProps } from "./userListWrap.types";

export const UserListWrap = ({ title, children }: UserListWrapProps) => {
  return (
    <div>
      <S.Title>{title}</S.Title>
      {children}
    </div>
  );
};
