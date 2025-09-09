import styled from "styled-components";
import { AvatarStyleProps } from "./avatar.types";

export const AvatarStyle = styled.img<AvatarStyleProps>`
  display: block;
  width: ${(p) => p.$width};
  height: ${(p) => p.$height};

  border-radius: 50%;
  border: 2px solid hsl(165.65deg 71.88% 37.65%);

  object-fit: cover;
`;
