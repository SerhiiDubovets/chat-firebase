import styled from "styled-components";

import { flex } from "@shared/styles/mixins/mixins";

export const Wrap = styled.div`
  ${flex.column}
  gap: 1rem;
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
`;
