import styled from "styled-components";
import { StyledImgProps } from "./lazyImageProps";

export const StyledImg = styled.img<StyledImgProps>`
  width: 100%;
  height: auto;

  transition: filter 0.3s ease;
  filter: ${({ $loaded }) => ($loaded ? "none" : "blur(10px)")};
`;
