import styled from "styled-components";

import { flex, layout } from "@shared/styles/mixins/mixins";

export const ListSection = styled.section`
  ${flex.column}
  overflow: auto;

  ${layout.section}
  padding-inline-end: 0px;
`;
