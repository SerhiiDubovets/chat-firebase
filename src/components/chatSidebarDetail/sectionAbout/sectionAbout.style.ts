import styled from "styled-components";

import { containerBlockInfo, flexColumn } from "@/styles/mixins";

export const SectionAboutStyle = styled.div`
  ${containerBlockInfo}
  ${flexColumn}

  border-bottom: 1px solid hsla(0, 0%, 86.7%, 0.21);
`;

export const SectionAboutTitleStyle = styled.h3`
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5;
`;

export const SectionAboutTextStyle = styled.p`
  font-weight: 400;
  font-size: 0.875rem;

  color: hsl(220, 1.7%, 64.9%);
`;
