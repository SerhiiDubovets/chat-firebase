import styled from "styled-components";
import backgroundHome from "@assets/backgroundDesk.jpg";
import leavesTop from "@assets/leaves_desk_1.png";
import leavesBottom from "@assets/leaves_desk_2.png";
import { Container as ContainerSignIn } from "@/components/container/Container";
import { LogoName as LogoTextName } from "@/components/logoName/LogoName";

export const SectionBlock = styled.section`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const ContainerSignInPage = styled(ContainerSignIn)`
  display: flex;
  width: 100%;
  height: 100vh;
`;

export const WrapSignIn = styled.div`
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  background-color: #fff;
`;

export const LeavesTop = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  background: url(${leavesTop}) no-repeat center 100% / cover;

  @media (min-width: 768px) {
    width: clamp(100px, 15vw, 200px);
    height: clamp(105px, 16vw, 210px);
  }

  @media (min-width: 1200px) {
    width: clamp(150px, 30vh, 200px);
    height: clamp(157px, 32vh, 210px);
  }
`;

export const LeavesBottom = styled.div`
  position: absolute;
  bottom: 0;
  right: -18px;

  background: url(${leavesBottom}) no-repeat center 100% / cover;

  @media (min-width: 768px) {
    width: clamp(100px, 15vw, 150px);
    height: clamp(55px, 8vw, 84px);
  }

  @media (min-width: 1200px) {
    width: clamp(150px, 30vh, 190px);
    height: clamp(83px, 17vh, 105px);
  }
`;

export const SignInPageStyle = styled.div`
  height: 80vh;
  width: 100%;

  display: flex;
  justify-content: center;

  overflow: auto;
  padding-inline: 1rem;
`;

export const BlockImg = styled.div`
  flex: 1;
  text-align: center;
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2)),
    url(${backgroundHome}) center 100% / cover;
`;

export const BlockLogo = styled.div`
  margin-block-start: 10vh;
  & svg {
    margin-block-end: 10px;
    @media (min-width: 768px) {
      width: 100px;
      height: 100px;
    }

    @media (min-width: 1200px) {
      width: 120px;
      height: 120px;
    }
  }
`;

export const LogoText = styled(LogoTextName)`
  margin-block-end: 15px;
  font-size: 3rem;
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const SubLogoText = styled.p`
  font-weight: 400;
  font-size: 1rem;

  color: #ffffff;
`;

export const SignInImg = styled.img`
  position: absolute;
  bottom: 0;
  right: 0px;
  width: 300px;
  /* @media (min-width: 768px) {
    width: 200px;
  } */

  @media (min-width: 768px) {
    width: clamp(200px, 50vh, 300px);
  }
`;
