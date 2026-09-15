import styled from "styled-components";

import { flex, layout } from "@shared/styles/mixins/mixins";

export const BlockActionButtonsStyle = styled.div`
  ${flex.column}
  ${layout.infoSection}
  margin-block-start: 1.5rem;
  gap: 1.5rem;
`;
