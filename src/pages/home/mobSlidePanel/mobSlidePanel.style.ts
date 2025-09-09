import leavesTop from "@assets/leaves_mob_1.png";
import leavesBottom from "@assets/leaves_mob_2.png";
import styled from "styled-components";

export const SlideBlockStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 250px;
  margin: 0 auto;
`;

export const SlideTextStyle = styled.p`
  margin-block-end: 40px;

  font-weight: 400;
  font-size: 0.75rem;
  text-align: center;

  color: #444;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const LeavesTopStyle = styled.div`
  position: absolute;
  top: 20px;
  left: 0;

  width: 55px;
  height: 75px;

  background: url(${leavesTop}) no-repeat center 100% / cover;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const LeavesBottomStyle = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;

  width: 80px;
  height: 70px;

  background: url(${leavesBottom}) no-repeat center 100% / cover;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const SlideLogoStyle = styled.div`
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
