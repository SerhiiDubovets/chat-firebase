import * as S from "./dateSeparator.style";

interface DateSeparatorProps {
  date: string;
}

export const DateSeparator = ({ date }: DateSeparatorProps) => {
  return (
    <S.SeparatorWrap>
      <S.DataText>{date}</S.DataText>
    </S.SeparatorWrap>
  );
};
