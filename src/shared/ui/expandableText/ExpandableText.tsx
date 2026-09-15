import * as S from "./expandableText.style";
import { ExpandableTextProps } from "./expandableText.types";

export const ExpandableText = ({
  children,
  maxLines = 2,
  expanded = false,
}: ExpandableTextProps) => {
  return (
    <S.Wrap $maxLines={maxLines} $expanded={expanded}>
      {children}
    </S.Wrap>
  );
};
