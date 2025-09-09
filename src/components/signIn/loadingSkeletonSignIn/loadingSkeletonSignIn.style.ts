import styled from "styled-components";

export const SingUpSkeletonStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 1.25rem;
  padding-inline: 1.25rem;
  margin-inline: auto;
  margin-block: 0;

  z-index: 10;
  @media (min-width: 768px) {
    width: clamp(19.375rem, 2vw, 21.25rem);
  }
  @media (min-width: 1200px) {
    width: 23.75rem;
  }
`;

export const TitleBlockSkeletonStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-block-end: 1rem;
  margin-inline: auto;
`;

export const FormSkeletonStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-block-end: 2rem;
`;

export const SkeletonBlockBtn = styled.div`
  display: flex;
  gap: 1rem;
`;
