import styled from "styled-components";

export const BlockTitleStyle = styled.div`
  margin-block-start: 65px;
  padding-inline: 45px;
  margin-inline: auto;

  @media (min-width: 768px) {
    margin-block-end: 70px;
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

export const TitleStyle = styled.h1`
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
    font-size: 4rem;
    /* font-size: clamp(38px, 8vw, 96px); */
  }
`;

export const SubTitleStyle = styled.p`
  font-size: clamp(1.125rem, 4vw, 1.25rem);
  font-weight: 700;

  color: #ffffff;

  @media (min-width: 768px) {
    font-size: clamp(20px, 6vw, 30px);
  }
`;
