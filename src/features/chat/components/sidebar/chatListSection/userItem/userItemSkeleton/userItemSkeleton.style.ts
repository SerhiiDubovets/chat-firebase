import styled from "styled-components";

import { flex, layout } from "@shared/styles/mixins/mixins";

export const ItemWrap = styled.div`
  ${layout.section}
  ${flex.row}
  gap: 0.5rem;
`;

export const TextWrap = styled.div`
  ${flex.column}
  gap: 0.75rem;
`;
