import {
  SkeletonAvatar,
  SkeletonButton,
  SkeletonInput,
  SkeletonText,
} from "@/components/skeletons/skeleton/SkeletonKit";
import {
  ButtonSkeletonStyle,
  FormSkeletonStyle,
  TitleBlockSkeletonStyle,
} from "./SkeletonSignUp.style";

export const SkeletonSignUp = () => {
  return (
    <>
      <TitleBlockSkeletonStyle>
        <SkeletonText width="17.5rem" height="1.75rem" marginBEnd="0.75rem" />
        <SkeletonText width="15.625rem" marginBEnd="1.875rem" />
        <SkeletonAvatar />
      </TitleBlockSkeletonStyle>
      <FormSkeletonStyle>
        <SkeletonInput label />
        <SkeletonInput label />
        <SkeletonInput label />
      </FormSkeletonStyle>
      <ButtonSkeletonStyle>
        <SkeletonButton />
      </ButtonSkeletonStyle>
    </>
  );
};
