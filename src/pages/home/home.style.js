import styled from "styled-components";

import { ButtonMain as BaseButton } from "../../components/buttons/buttonMain/ButtonMain";

import background from "@assets/backgroundHome.jpg";
import backgroundDesk from "@assets/backgroundDesk.jpg";
import leavesTop from "@assets/leaves_mob_1.png";
import leavesBottom from "@assets/leaves_mob_2.png";
import { StyledButton } from "@/components/buttons/buttonMain/buttonMain.style";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  position: relative;
  overflow: hidden;

  text-align: center;

  background: linear-gradient(
      357deg,
      rgba(0, 0, 0, 0.4) 0%,
      rgba(0, 0, 0, 0.4) 100%
    ),
    url(${background}) no-repeat center/ cover;

  @media (min-width: 768px) {
    justify-content: flex-start;
    background: linear-gradient(rgba(0, 0, 0, 0.2)),
      url(${backgroundDesk}) no-repeat center 100% / cover;
  }
`;

export const ContentBlock = styled.div`
  padding: 15px;
`;

export const BackBtm = styled.button`
  width: 50px;
  height: 50px;

  position: absolute;

  border: none;
  outline: none;

  color: white;
  background-color: transparent;

  & svg {
    width: 25px;
    height: 25px;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const BlockTitle = styled.div`
  margin-block-start: 65px;
  padding-inline: 45px;
  margin-inline: auto;

  @media (min-width: 768px) {
    margin-block-end: 100px;
  }
`;

export const LogoStyle = styled.div`
  margin-block-end: 15px;

  & svg {
    width: 80px;
    height: 80px;
  }

  @media (min-width: 768px) {
    & svg {
      width: 120px;
      height: 120px;
    }
  }
`;

export const Title = styled.h1`
  margin-block-end: 20px;

  font-size: clamp(30px, 8vw, 38px);
  font-weight: 700;

  color: white;

  & span {
    color: #057b05;

    background-image: linear-gradient(
      to bottom,
      rgb(5, 105, 5),
      rgb(94, 220, 109)
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }

  @media (min-width: 768px) {
    font-size: clamp(38px, 8vw, 96px);
  }
`;

export const SubTitle = styled.p`
  font-size: clamp(18px, 4vw, 20px);
  font-weight: 700;

  color: #ffffff;

  @media (min-width: 768px) {
    font-size: clamp(20px, 6vw, 30px);
  }
`;

export const ImgDec = styled.img`
  width: 100%;
  margin-block-end: 20px;

  @media (min-width: 768px) {
  }
`;

export const BlockLogin = styled.div`
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

export const BlockImg = styled.div`
  display: flex;
  justify-content: end;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const Slide = styled.div`
  @media (max-width: 768px) {
    transform-style: preserve-3d;

    width: 100%;
    height: clamp(400px, 50vh, 470px);
    position: absolute;
    z-index: 10;
    bottom: ${(props) => (props.$showSlide ? "0" : "-470px")};
    left: 0;
    opacity: ${(props) => (props.$showSlide ? "1" : "0")};

    color: #000000;
    background-color: #ffffff;

    border-top-right-radius: 24px;
    border-top-left-radius: 24px;

    transition: all 0.5s;

    &::after,
    &::before {
      content: "";
      width: 100%;
      height: 50px;
      position: absolute;
      top: 0;
      left: 0;

      background-color: #000000;

      border-top-right-radius: 24px;
      border-top-left-radius: 24px;

      transition: all 0.5s;

      opacity: ${(props) => (props.$showSlide ? "1" : "0")};
    }
    &::after {
      top: -10px;

      background-color: #3fb283;

      transform: translateZ(-1px);

      border-top-right-radius: 30px;
      border-top-left-radius: 30px;
    }
    &::before {
      top: -20px;

      background-color: #b9db7e;

      transform: translateZ(-1px);

      border-top-right-radius: 35px;
      border-top-left-radius: 35px;
    }
  }

  @media (min-width: 768px) {
  }
`;

export const SlideBlock = styled.div`
  display: flex;
  width: 250px;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
`;

export const SlideText = styled.p`
  margin-block-end: 40px;

  font-weight: 400;
  font-size: 0.75rem;
  text-align: center;

  color: #444;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const LeavesTop = styled.div`
  width: 55px;
  height: 75px;
  position: absolute;
  top: 20px;
  left: 0;

  background: url(${leavesTop}) no-repeat center 100% / cover;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const LeavesBottom = styled.div`
  width: 80px;
  height: 70px;
  position: absolute;
  bottom: 0;
  right: 0;

  background: url(${leavesBottom}) no-repeat center 100% / cover;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const BlockBtm = styled.div`
  width: 250px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media (min-width: 768px) {
    gap: 36px;
  }
`;

export const Button = styled(BaseButton)``;
export const ButtonLink = styled(StyledButton)``;

export const SlideLogo = styled.div`
  margin-block-start: 16px;
  margin-block-end: 16px;

  & svg {
    width: 100px;
    height: 100px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
