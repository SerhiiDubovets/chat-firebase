import { SkeletonAvatar } from "@shared/ui/skeleton/presets/SkeletonAvatar";
import { SkeletonText } from "@shared/ui/skeleton/presets/SkeletonText";

import * as S from "./userItemSkeleton.style";

export const UserItemSkeleton = () => {
  return (
    <S.ItemWrap>
      <SkeletonAvatar size="3rem" />
      <S.TextWrap>
        <SkeletonText width="5.5rem" height="0.75rem" />
        <SkeletonText width="7.5rem" height="0.75rem" />
      </S.TextWrap>
    </S.ItemWrap>
  );
};
