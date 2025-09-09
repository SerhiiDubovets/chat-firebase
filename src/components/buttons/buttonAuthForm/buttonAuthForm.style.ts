import styled from "styled-components";

import { Button as BaseButton } from "@/components/buttons/button/Button";

export const ButtonAuthFormStyle = styled(BaseButton)`
  width: 100%;
  height: 3rem;
  margin-block-start: 1.563rem;

  &:disabled {
    cursor: not-allowed;
  }
`;
