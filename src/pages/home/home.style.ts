import backgroundDesk from "@assets/backgroundDesk.jpg";
import background from "@assets/backgroundHome.jpg";
import styled from "styled-components";

import { Button as BaseButton } from "@/components/buttons/button/Button";

import { ButtonIcon } from "@/components/buttons/buttonIcon/ButtonIcon";

export const WrapStyle = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 100vh;

  background: linear-gradient(
      357deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.4) 100%
    ),
    url(${background}) no-repeat center/ cover;

  text-align: center;

  overflow: hidden;

  @media (min-width: 768px) {
    justify-content: flex-start;

    background: linear-gradient(rgba(0, 0, 0, 0.2)),
      url(${backgroundDesk}) no-repeat center 100% / cover;
  }
`;

export const ContentBlockStyle = styled.div`
  margin-inline-end: 1rem;
`;

export const BackBtmStyle = styled(ButtonIcon)`
  position: absolute;

  width: 50px;
  height: 50px;

  color: white;
  background-color: transparent;
  border: none;
  outline: none;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ImgDecStyle = styled.img`
  width: 100%;
  margin-block-end: 20px;

  @media (min-width: 768px) {
  }
`;

export const BlockLoginStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 2;
  padding-block: 10px;

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
`;

export const BlockBtnStyle = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    margin-block-end: 1rem;
  }
`;

export const ButtonStyle = styled(BaseButton)``;
