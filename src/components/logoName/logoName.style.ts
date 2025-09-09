import styled from "styled-components";

export const TitleStyle = styled.p`
  font-size: 1rem;

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
`;
