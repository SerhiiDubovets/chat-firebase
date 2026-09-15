import { SkeletonButton } from "@shared/ui/skeleton/presets/SkeletonButton";
import { SkeletonInput } from "@shared/ui/skeleton/presets/SkeletonInput ";
import { SkeletonText } from "@shared/ui/skeleton/presets/SkeletonText";

import * as S from "./SignInSkeleton.style";

export const SignInSkeleton = () => {
  return (
    <>
      <S.TitleWrap>
        <SkeletonText width="13rem" height="1.75rem" marginBStart="0.25rem" />
        <SkeletonText width="15rem" />
      </S.TitleWrap>
      <S.Form>
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
          marginBEnd="2.75rem"
          lWidth="5.5rem"
        />
        <SkeletonButton radius="1.5rem" height="3rem" />
      </S.Form>
      <S.Separate>
        <SkeletonText width="15rem" />
      </S.Separate>
      <S.BtnWrap>
        <SkeletonButton width="9.25rem" height="3rem" />
      </S.BtnWrap>
    </>
  );
};
