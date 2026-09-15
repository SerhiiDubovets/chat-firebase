import styled from "styled-components";

import { flex } from "@shared/styles/mixins/mixins";

export const SingUpWrap = styled.div`
  ${flex.column}
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

export const TitleWrap = styled.div`
  ${flex.column}
  align-items: center;
  gap: 1rem;

  margin-block-end: 1.5rem;
`;

export const Avatar = styled.div`
  ${flex.column}
  align-items: center;
  margin-block-end: 0.25rem;
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

export const ButtonWrap = styled.div`
  ${flex.column};
  align-items: center;
`;
