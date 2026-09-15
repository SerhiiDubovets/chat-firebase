import styled from "styled-components";

import { flex } from "@shared/styles/mixins/mixins";

export const ChatWrap = styled.div`
  ${flex.center}
  height: 100vh;
  margin-block: auto;
  padding-inline: 3.125rem;
  text-align: center;

  & p {
    font-size: 3.125rem;
    font-weight: 300;
    color: hsl(0, 0%, 64.7%);
  }
`;
