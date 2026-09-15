import { SkeletonAvatar } from "@shared/ui/skeleton/presets/SkeletonAvatar";
import { SkeletonText } from "@shared/ui/skeleton/presets/SkeletonText";

import * as S from "./chatHeaderSkeleton.style";

export const ChatHeaderSkeleton = () => {
  return (
    <>
      <S.Wrap>
        <SkeletonAvatar size="md" />
        <S.InfoWrap>
          <SkeletonText width="5.5rem" height="1rem" />
          <SkeletonText width="7.5rem" height="0.85rem" />
        </S.InfoWrap>
      </S.Wrap>
    </>
  );
};
