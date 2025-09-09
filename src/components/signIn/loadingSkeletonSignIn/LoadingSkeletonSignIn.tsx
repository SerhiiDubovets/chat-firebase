import { Skeleton } from "@/components/skeleton/Skeleton";
import {
  FormSkeletonStyle,
  SingUpSkeletonStyle,
  SkeletonBlockBtn,
  TitleBlockSkeletonStyle,
} from "./loadingSkeletonSignIn.style";

export const LoadingSkeletonSignIn = () => {
  return (
    <SingUpSkeletonStyle>
      <TitleBlockSkeletonStyle>
        <Skeleton width="17.5rem" height="1.75rem" marginBEnd="0.75rem" />
        <Skeleton width="15.625rem" height="1rem" marginBEnd="1.875rem" />
      </TitleBlockSkeletonStyle>
      <FormSkeletonStyle>
        <Skeleton width="6.25rem" height="1.125rem" marginBEnd="0.625rem" />
        <Skeleton width="100%" height="2.5rem" marginBEnd="1.125rem" />
        <Skeleton width="6.25rem" height="1.125rem" marginBEnd="0.625rem" />
        <Skeleton width="100%" height="2.5rem" marginBEnd="1.125rem" />
      </FormSkeletonStyle>
      <Skeleton width="100%" height="2.5rem" marginBEnd="2rem" />
      <Skeleton width="100%" height="0.8rem" marginBEnd="2rem" />
      <SkeletonBlockBtn>
        <Skeleton width="100%" height="3rem" marginBEnd="0rem" />
        <Skeleton width="100%" height="3rem" marginBEnd="0rem" />
        <Skeleton width="100%" height="3rem" marginBEnd="0rem" />
      </SkeletonBlockBtn>
    </SingUpSkeletonStyle>
  );
};
