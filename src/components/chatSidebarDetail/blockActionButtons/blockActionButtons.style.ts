import styled from "styled-components";

import { containerBlockInfo, flexColumn } from "@/styles/mixins";

export const BlockActionButtonsStyle = styled.div`
  ${flexColumn}
  ${containerBlockInfo}
  margin-block-start: 1.5rem;
  gap: 1.5rem;
`;
