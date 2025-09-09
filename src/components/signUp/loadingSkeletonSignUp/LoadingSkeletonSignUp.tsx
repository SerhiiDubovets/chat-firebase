import { Skeleton } from "@/components/skeleton/Skeleton";
import {
  AvatarSkeletonStyle,
  FormSkeletonStyle,
  SingUpSkeletonStyle,
  TitleBlockSkeletonStyle,
} from "./loadingSkeletonSignUp.style";

export const LoadingSkeletonSignUp = () => {
  return (
    <SingUpSkeletonStyle>
      <TitleBlockSkeletonStyle>
        <Skeleton width="17.5rem" height="1.75rem" marginBEnd="0.75rem" />
        <Skeleton width="15.625rem" height="1rem" marginBEnd="1.875rem" />

        <AvatarSkeletonStyle />
      </TitleBlockSkeletonStyle>
      <FormSkeletonStyle>
        <Skeleton width="6.25rem" height="1.125rem" marginBEnd="0.625rem" />
        <Skeleton width="19.688rem" height="2.5rem" marginBEnd="1.125rem" />
        <Skeleton width="6.25rem" height="1.125rem" marginBEnd="0.625rem" />
        <Skeleton width="19.688rem" height="2.5rem" marginBEnd="1.125rem" />
        <Skeleton width="6.25rem" height="1.125rem" marginBEnd="0.625rem" />
        <Skeleton width="19.688rem" height="2.5rem" marginBEnd="1.125rem" />
      </FormSkeletonStyle>
      <Skeleton width="19.688rem" height="2.5rem" marginBEnd="1.125rem" />
    </SingUpSkeletonStyle>
  );
};
