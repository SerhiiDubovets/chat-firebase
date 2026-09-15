import styled from "styled-components";

import { AvatarStyleProps } from "./avatar.types";

export const Avatar = styled.img<AvatarStyleProps>`
  display: block;

  width: ${(p) => p.$size};
  height: ${(p) => p.$size};

  border-radius: 50%;
  border: 2px solid var(--border-avatar);

  object-fit: cover;
`;
