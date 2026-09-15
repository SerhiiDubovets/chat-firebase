import * as S from "./status.style";
import { StatusProps } from "./status.types";

export const Status = ({ status }: StatusProps) => {
  return <S.Status>{status}</S.Status>;
};
