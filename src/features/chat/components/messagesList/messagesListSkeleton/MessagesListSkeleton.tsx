import { SkeletonText } from "@shared/ui/skeleton/presets/SkeletonText";

import * as S from "./MessagesListSkeleton.style";

export const MessagesListSkeleton = () => {
  return (
    <S.Wrap>
      <SkeletonText width="11.25rem" height="4rem" radius="1.125rem" />
      <SkeletonText width="15rem" height="5.5rem" radius="1.125rem" />
      <S.Right>
        <SkeletonText width="12.5rem" height="4.5rem" radius="1.125rem" />
      </S.Right>
      <SkeletonText width="9.375rem" height="3.5rem" radius="1.125rem" />
      <S.Right>
        <SkeletonText width="17.5rem" height="6rem" radius="1.125rem" />
      </S.Right>
      <SkeletonText width="13.75rem" height="4.75rem" radius="1.125rem" />
    </S.Wrap>
  );
};
