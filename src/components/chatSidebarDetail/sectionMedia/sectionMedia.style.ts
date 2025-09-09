import styled from "styled-components";

import {
  containerBlockInfo,
  flexColumn,
  flexSpaceBetween,
} from "@/styles/mixins";

export const SectionMediaStyle = styled.section`
  ${containerBlockInfo}
  ${flexColumn}

  border-bottom: 1px solid hsla(0, 0%, 86.7%, 0.21);
`;

export const DetailMediaBlockTitleStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const SectionMediaBtnStyle = styled.button<{ $open: boolean }>`
  ${flexSpaceBetween}
  gap: 0.25rem;
  width: 100%;

  & svg {
    transform: ${({ $open }) => ($open ? "rotate(90deg)" : "rotate(0deg)")};
  }
`;

export const SectionMediaTitleStyle = styled.h3`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5;
  color: hsl(220, 1.7%, 64.9%);
`;
