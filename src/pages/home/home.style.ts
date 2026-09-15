import styled from "styled-components";

import backgroundDesk from "@shared/assets/images/backgroundDesk.jpg";
import background from "@shared/assets/images/backgroundHome.jpg";
import { flex } from "@shared/styles/mixins/mixins";
import { ButtonIcon } from "@shared/ui/buttons/buttonIcon/ButtonIcon";

export const WrapStyle = styled.div`
  position: relative;

  ${flex.column}
  justify-content: space-between;

  min-height: 100vh;

  background:
    linear-gradient(357deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.4) 100%),
    url(${background}) no-repeat center/ cover;

  text-align: center;

  overflow: hidden;

  @media (min-width: 768px) {
    justify-content: flex-start;

    background:
      linear-gradient(rgba(0, 0, 0, 0.2)),
      url(${backgroundDesk}) no-repeat center 100% / cover;
  }
`;

export const ContentBlockStyle = styled.div``;

export const BackBtmStyle = styled(ButtonIcon).attrs({
  size: "3.125rem",
  sizeIcon: "1.5rem",
})`
  position: absolute;
  z-index: 20;

  width: 3.125rem;
  height: 3.125rem;

  background-color: transparent;
  border: none;
  outline: none;

  color: hsl(0, 0%, 100%);

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ImgDecStyle = styled.img`
  width: 100%;
  margin-block-end: 1.25rem;

  @media (min-width: 768px) {
  }
`;

export const BlockLoginStyle = styled.div`
  ${flex.columnCenter}
  justify-content: center;
  flex: 2;
  padding-block: 0.625rem;
  margin-block-start: 1.5rem;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const BlockImgStyle = styled.div`
  display: flex;
  justify-content: end;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ImgStyle = styled.img`
  width: 100%;

  @media (min-width: 650px) {
    width: 80%;
  }
`;

export const BlockBtnStyle = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    margin-block-end: 1rem;
  }
`;
