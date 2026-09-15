import styled from "styled-components";

import { flex } from "@shared/styles/mixins/mixins";

export const Wrap = styled.div`
  ${flex.row}
  gap: 1.25rem;
`;
export const InfoWrap = styled.div`
  ${flex.column}
  gap: 0.25rem;
`;
