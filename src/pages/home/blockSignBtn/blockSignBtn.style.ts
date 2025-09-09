import styled from "styled-components";

import { ButtonStyle } from "@/components/buttons/button/button.style";
import { BlockSignBtnLinkStyleProps } from "./blockSignBtn.types";

export const BlockBtnStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 250px;
  margin: 0 auto;
  gap: 0.75rem;

  @media (min-width: 768px) {
    gap: 2.25rem;
  }
`;

export const ButtonLinkStyle = styled(
  ButtonStyle
)<BlockSignBtnLinkStyleProps>``;
