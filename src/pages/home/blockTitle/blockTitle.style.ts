import styled from "styled-components";

export const BlockTitleStyle = styled.div`
  margin-block-start: 4.063rem;
  padding-inline: 2.813rem;
  margin-inline: auto;

  @media (min-width: 768px) {
    margin-block-end: 4.375rem;
  }
`;

export const LogoStyle = styled.div`
  margin-block-end: 0.938rem;

  & svg {
    width: 5rem;
    height: 5rem;
  }

  @media (min-width: 768px) {
    & svg {
      width: 7.5rem;
      height: 7.5rem;
    }
  }
`;

export const TitleStyle = styled.h1`
  margin-block-end: 1.25rem;

  font-size: clamp(1.875rem, 8vw, 2.375rem);
  font-weight: 700;

  color: hsl(0, 0%, 100%);

  & span {
    color: hsl(120, 92%, 25%);

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
    font-size: clamp(2.5rem, 5vw, 3rem);
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

export const SubTitleStyle = styled.p`
  font-size: clamp(1.125rem, 4vw, 1.25rem);
  font-weight: 700;

  color: hsl(0, 0%, 100%);

  @media (min-width: 768px) {
    font-size: clamp(1.25rem, 3vw, 2rem);
  }
`;
