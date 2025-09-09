import styled from "styled-components";

import { Skeleton as SkeletonBlock } from "@/components/skeleton/Skeleton";

export const SingUpSkeletonStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 20px;
  padding-inline: 20px;
  margin-inline: auto;
  margin-block: 0;

  z-index: 10;
  @media (min-width: 768px) {
    width: clamp(310px, 2vw, 340px);
  }
  @media (min-width: 1200px) {
    width: 380px;
  }
`;

export const TitleBlockSkeletonStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block-end: 15px;
  margin-inline: auto;
`;

export const AvatarSkeletonStyle = styled(SkeletonBlock)`
  width: 52px;
  height: 52px;
  border-radius: 50%;
`;

export const FormSkeletonStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 32px;
`;
