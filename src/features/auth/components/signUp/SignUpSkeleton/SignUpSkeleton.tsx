import { SkeletonAvatar } from "@shared/ui/skeleton/presets/SkeletonAvatar";
import { SkeletonButton } from "@shared/ui/skeleton/presets/SkeletonButton";
import { SkeletonInput } from "@shared/ui/skeleton/presets/SkeletonInput ";
import { SkeletonText } from "@shared/ui/skeleton/presets/SkeletonText";

import * as S from "./SignUpSkeleton.style";

export const SignUpSkeleton = () => {
  return (
    <>
      <S.TitleWrap>
        <SkeletonText width="16.75rem" height="1.75rem" marginBStart="0.5rem" />
        <SkeletonText width="15.625rem" />
      </S.TitleWrap>
      <S.Avatar>
        <SkeletonAvatar />
      </S.Avatar>
      <S.Form>
        <SkeletonInput
          label
          radius="1.5rem"
          height="3rem"
          marginBEnd="1.5rem"
          lWidth="6rem"
        />
        <SkeletonInput
          label
          radius="1.5rem"
          height="3rem"
          marginBEnd="1.5rem"
          lWidth="8rem"
        />
        <SkeletonInput
          label
          radius="1.5rem"
          height="3rem"
          marginBEnd="2.85rem"
          lWidth="5.5rem"
        />
        <SkeletonButton radius="1.5rem" height="3rem" />
      </S.Form>
      <S.Separate>
        <SkeletonText width="15rem" />
      </S.Separate>
      <S.ButtonWrap>
        <SkeletonButton width="9.25rem" height="3rem" />
      </S.ButtonWrap>
    </>
  );
};
