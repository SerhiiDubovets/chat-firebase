import styled from "styled-components";

import { flex } from "@shared/styles/mixins/mixins";

export const SingInWrap = styled.div`
  position: absolute;
  /* width: 270px; */
  width: 100%;
  /* ${flex.column}

  @media (min-width: 768px) {
    width: clamp(19.375rem, 28vw, 21.25rem);
  }
  @media (min-width: 1200px) {
    width: 23.75rem;
  } */
`;

export const TitleWrap = styled.div`
  ${flex.column}
  align-items: center;
  gap: 1.25rem;

  margin-block-end: clamp(1.75rem, 2vw, 1.875rem);
  margin-inline: auto;
`;

export const Form = styled.div`
  ${flex.column}
  justify-content: center;
  margin-block-end: 2.25rem;
`;

export const Separate = styled.div`
  ${flex.column}
  align-items: center;
  margin-block-end: 2rem;
`;

export const BtnWrap = styled.div`
  ${flex.center}
  gap: 1rem;
`;
